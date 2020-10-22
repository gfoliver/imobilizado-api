import IFindProductFilters from "../dtos/IFindProductFilters";
import IFindProductResponse from "../dtos/IFindProductResponse";
import Product from "../models/Product";

export default interface IProductService {
    create(data: Product): Promise<Product>;

    findByCode(code: string): Promise<Product | undefined>;

    find(filters: IFindProductFilters): Promise<IFindProductResponse>;

    delete(code: string): Promise<void>;

    update(product: Partial<Product>): Promise<Product>;
}