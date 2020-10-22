import Product from "../models/Product";

export default interface IFindProductResponse {
    products: Product[];
    maxValue: number;
}