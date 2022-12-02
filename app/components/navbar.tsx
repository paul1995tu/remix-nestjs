import { useState } from "react";
import {
    Navbar,
    Center,
    Tooltip,
    UnstyledButton,
    createStyles,
    Stack,
    Text,
} from "@mantine/core";
import {
    TablerIcon,
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconUserCircle,
    IconSettings,
    IconLogout,
    IconTruckDelivery,
    IconEdit,
    IconSwitchHorizontal,
} from "@tabler/icons";
import { LoaderArgs } from "@remix-run/node";
import {Link, NavLink, useLoaderData} from "@remix-run/react";

export function loader({ context }: LoaderArgs) {
    return context.jwt;
}

const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[0],
        },
    },

    active: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
        },
    },
}));

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;
    onClick?(): void;
    route:string
}

function NavbarLink({ icon: Icon, label, active, onClick, route }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    const jwt = useLoaderData();
    const jwtQuery = new URLSearchParams({ jwt: jwt });
    return (
        <>
            <Tooltip label={label} position="top" transitionDuration={0}>
                <Link to={route}>
                    <UnstyledButton
                        onClick={onClick}
                        className={cx(classes.link, {
                            [classes.active]: active,
                        })}
                    >
                        <Icon stroke={1.5} />
                    </UnstyledButton>
                </Link>
            </Tooltip>
        </>
    );
}

const mockdata = [
    { icon: IconHome2, label: "Home", route: ""},
    { icon: IconGauge, label: "Promotion", route: "promotion" },
];

export function NavbarContent() {
    const [active, setActive] = useState(0);

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            active={index === active}
            onClick={() => setActive(index)}
            route={link.route}
        />
    ));

    return (
        <>
            <Center>
                <Text>Hello world</Text>
            </Center>
            <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>


                </Stack>
            </Navbar.Section>
        </>
    );
}
