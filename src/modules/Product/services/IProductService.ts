import Product from "../models/Product";

export default interface IProductService {
    create(data: Product): Promise<Product>;
}