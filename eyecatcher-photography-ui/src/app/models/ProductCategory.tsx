import { Product } from "./Product";

export interface ProductCategory {
    productCategoryID: number,
    categoryName: string,
    categoryDescription: string,
    imageUrl: string,
    products: Product[]
}