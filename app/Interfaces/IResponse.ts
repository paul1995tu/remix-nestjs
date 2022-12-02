import { PromotionDataResponse } from "~/server/shopify/interfaces";

export interface DataResponse {
  products: PromotionDataResponse,
  jwt: string
}
