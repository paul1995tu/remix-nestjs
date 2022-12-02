import type { MetaFunction } from "@remix-run/node";
import { theme } from "./theme";
import Layout from "./components/layout";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import indexStyle from "./styles/test.css";
import type { LoaderArgs } from "@remix-run/node";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";

//style="background-color: #046fcf"

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
});


createEmotionCache({ key: "mantine" });
export default function App() {
    return (
        <MantineProvider
            theme={theme}
            withGlobalStyles
            withNormalizeCSS
        >
        <html lang="en">
            <head>
                <StylesPlaceholder />
                <Meta />
                <title></title>
            </head>
            <body>
<Layout>
                    <Outlet />
                    <Scripts />
                    <LiveReload />
                    <ScrollRestoration />
</Layout>

            </body>
        </html>
        </MantineProvider>
    );
}
