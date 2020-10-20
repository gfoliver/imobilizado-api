import Product from '../models/Product';

export default interface IProductRepository {
    create(data: Product): Promise<Product>;

    findByCode(code: string): Promise<Product | undefined>;
}