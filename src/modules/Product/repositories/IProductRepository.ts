import Product from '../models/Product';
import IFindProductFilters from '../dtos/IFindProductFilters';
import IFindProductResponse from '../dtos/IFindProductResponse';
import IPatrimonyResponse from '../dtos/IPatrimonyResponse';

export default interface IProductRepository {
    create(data: Product): Promise<Product>;

    findByCode(code: string): Promise<Product | undefined>;

    find(filters: IFindProductFilters): Promise<IFindProductResponse>;

    delete(code: string): Promise<void>;

    update(product: Partial<Product>): Promise<Product>;

    patrimony(): Promise<IPatrimonyResponse>;
}