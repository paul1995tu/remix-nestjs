import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";



import { useState } from "react";
import { DataResponse } from "~/Interfaces";
import {Grid, SimpleGrid} from "@mantine/core";
import {CurrentlyPromotingProductCard, ProductCard} from "~/components/productCard";



export async function loader({ context }:LoaderArgs) {
    // @ts-ignore
    const products = await context.appService.getProducts();
    return {
        jwt: context.jwt,
        products: products,
    };
}
interface Product{
    title:"",
    url: "",
    description: "",
    totalInventory: "",
    price: "",
}
export default function Promotion() {
    const { products, jwt } = useLoaderData<DataResponse>();
    const currentlyPromoting:Product= {
        title:"",
        url: "",
        description: "",
        totalInventory: "",
        price: "",
    }
    const [promotionProduct, setPromotionProduct] = useState(
        currentlyPromoting,
    );

    return (
        <Grid grow gutter="sm" align={"center"}>
            <Grid.Col span="auto" offset={0.8}>
                <CurrentlyPromotingProductCard
                    image={promotionProduct.url}
                    title={promotionProduct.title}
                    description={promotionProduct.description}
                    inventory={promotionProduct.totalInventory}
                    price={promotionProduct.price}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <SimpleGrid cols={4} verticalSpacing={"lg"} spacing={"lg"}>
                    {products.map((product: Product) => (
                        <ProductCard
                            image={product.url}
                            title={product.title}
                            description={product.description}
                            inventory={product.totalInventory}
                            price={product.price}
                            onClick={() =>
                                setPromotionProduct(
                                    product
                                )
                            }
                            key={product.title}
                        />
                    ))}
                </SimpleGrid>
            </Grid.Col>
        </Grid>
    );
}
