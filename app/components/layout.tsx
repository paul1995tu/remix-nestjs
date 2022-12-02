import { useState } from "react";
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from "@mantine/core";
import { NavbarContent } from "./navbar";
import { ActionToggle } from "~/components/thememode";

export default function Layout({ children }: { children: any }) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar width={{ base: 80 }} p="xs">
                    {<NavbarContent />}
                </Navbar>
            }
            header={
                <Header height={30} p="xs">
                    {}
                </Header>
            }
            footer={
                <Footer height={30} p="xs">
                    {/* Header content */}
                </Footer>
            }
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
        >
            {children}
        </AppShell>
    );
}
