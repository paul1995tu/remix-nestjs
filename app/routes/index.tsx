import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";

import { Tooltip, Text, Button } from "@mantine/core";

export default function Index() {
    return (
        <Tooltip label={"Hello World"} position={"right"}>
            <Button>
                <Text>Hello World</Text>
            </Button>
        </Tooltip>
    );
}
