import Product from '../models/Product';
import IFindProductFilters from '../dtos/IFindProductFilters';
import IFindProductResponse from '../dtos/IFindProductResponse';

export default interface IProductRepository {
    create(data: Product): Promise<Product>;

    findByCode(code: string): Promise<Product | undefined>;

    find(filters: IFindProductFilters): Promise<IFindProductResponse>;
}