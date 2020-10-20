import { getRepository } from 'typeorm';
import Product from '../models/Product';
import IProductRepository from './IProductRepository';

class ProductRepository implements IProductRepository {
    public create = async (data: Product) => {
        const repository = getRepository(Product);

        const product = repository.create(data);
        await repository.save(product);

        return product;
    }

    public findByCode = async (code: string) => {
        const repository = getRepository(Product);
        const foundProduct = await repository.findOne({ where: { code } });

        return foundProduct;
    }
}

export default ProductRepository;