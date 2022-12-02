import path from 'path';
import { All, Controller, Logger, Next, Req, Res } from '@nestjs/common';
import type { GetLoadContextFunction } from '@mcansh/remix-fastify';
import { createRequestHandler } from '@mcansh/remix-fastify';
import type { DataFunctionArgs } from '@remix-run/node';

import { AppService } from 'src/app.service';
import { FastifyReply, FastifyRequest } from 'fastify';

const BUILD_DIR = path.join(process.cwd(), 'build');

interface LoadContext {
  appService: AppService;
  jwt: string;
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@remix-run/server-runtime' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export interface LoaderArgs extends DataFunctionArgs {
    context: LoadContext;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export interface ActionArgs extends DataFunctionArgs {
    context: LoadContext;
  }
}

@Controller('')
export class RemixController {
  constructor(private readonly appService: AppService) {}

  @All('*')
  handler(@Req() request: FastifyRequest, @Res() response: FastifyReply) {
    this.purgeRequireCacheInDev();

    const getLoadContext: GetLoadContextFunction = (req) => {
      // return your context here
      return {
        appService: this.appService,
        jwt: ""
      };
    };

    return createRequestHandler({
      // `remix build` and `remix dev` output files to a build directory, you need
      // to pass that build to the request handler
      build: require(BUILD_DIR),

      // return anything you want here to be available as `context` in your
      // loaders and actions. This is where you can bridge the gap between Remix
      // and your server
      getLoadContext,
    })(request, response);
  }

  private purgeRequireCacheInDev() {
    if (process.env.NODE_ENV === 'production') return;

    for (const key in require.cache) {
      if (key.startsWith(BUILD_DIR)) {
        delete require.cache[key];
      }
    }
  }

  private isStaticAsset(request: Request) {
    return /^\/(build|assets)\//gi.test(request.url);
  }
}
