import { Product } from "./Product";

export interface Cart {
    product: Product,
    amount: number,
    quantity: number
}