import { Card, Image, Text, Group, Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    card: {
        maxHeight: "525px",
        minHeight: "525px",
        maxWidth: "375px",
        minWidth: "375px",

        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },

    section: {
        borderBottom: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },
    description: {
        minHeight: "150px",
        maxHeight: "150px",
    },
    title: {
        color: theme.primaryColor,
        minHeight: "50px",
        maxHeight: "50px",
    },
}));

interface BadgeCardProps {
    image: string;
    title: string;
    description: string;
    inventory: string;
    price: string;
}
interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    inventory: string;
    price: string;
    onClick?(): void;
}

export function CurrentlyPromotingProductCard({
    image = "",
    title = "",
    description = "",
    inventory = "",
    price = "",
}: BadgeCardProps) {
    const { classes, theme } = useStyles();

    return (
        <Card withBorder radius="lg" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group position="center">
                    <Text
                        size="lg"
                        weight={500}
                        align={"center"}
                        className={classes.title}
                    >
                        {title}
                    </Text>
                </Group>
                <Text size="sm" mt="xs" className={classes.description}>
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={7} mt={10} position={"apart"}>
                    <Text>Inventar: {inventory} stk</Text>
                    <Text />
                    <Text>Preis: {price} Euro</Text>
                </Group>
            </Card.Section>

            <Group mt="xs" position={"center"}>
                Wird gerade promoted
            </Group>
        </Card>
    );
}

export function ProductCard({
    image,
    title,
    description,
    inventory,
    price,
    onClick,
}: ProductCardProps) {
    const { classes, theme } = useStyles();

    return (
        <Card withBorder radius="lg" className={classes.card}>
            <Card.Section>
                <Image
                    src={image}
                    alt={title}
                    width={375}
                    height={180}
                    fit={"scale-down"}
                />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group position="center">
                    <Text size="lg" weight={500} className={classes.title}>
                        {title}
                    </Text>
                </Group>
                <Text size="sm" mt="xs" className={classes.description}>
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Group spacing={7} mt={10} position={"apart"}>
                    <Text>Inventar: {inventory} stk</Text>
                    <Text>Preis: {price} Euro</Text>
                </Group>
            </Card.Section>

            <Group mt={6} position={"center"}>
                <Button radius="lg" onClick={onClick} variant="outline">
                    promote me
                </Button>
            </Group>
        </Card>
    );
}
