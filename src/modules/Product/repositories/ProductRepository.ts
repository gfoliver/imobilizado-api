import { getRepository } from 'typeorm';
import Product from '../models/Product';
import IProductRepository from './IProductRepository';
import IFindProductFilters from '../dtos/IFindProductFilters';

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

    public find = async (filters: IFindProductFilters) => {
        const repository = getRepository(Product);
        let products: Product[] = [];
        
        if (filters.area_id && filters.minValue != undefined && filters.maxValue != undefined) {
            products = await repository
            .createQueryBuilder('product')
            .where('product.area_id = :area_id AND product.value >= :min_value AND product.value <= :max_value', { 
                area_id: filters.area_id,
                min_value: filters.minValue,
                max_value: filters.maxValue
            })
            .getMany();
        }
        else if (filters.area_id) {
            products = await repository.find({ where: { area_id: filters.area_id } });
        }
        else if (filters.minValue != undefined && filters.maxValue != undefined) {
            products = await repository
                .createQueryBuilder('product')
                .where('product.value >= :min_value AND product.value <= :max_value', { 
                    min_value: filters.minValue, 
                    max_value: filters.maxValue
                })
                .getMany();
        }
        else {
            products = await repository.find();
        }

        const maxValueRaw = await repository
            .createQueryBuilder('product')
            .select('MAX(product.value)')
            .getRawOne();

        return {
            products,
            maxValue: Number(Object.values(maxValueRaw)[0])
        };
    }

    public delete = async (code: string) => {
        const repository = getRepository(Product);

        await repository.delete(code);

        return;
    }

    public update = async (product: Partial<Product>) => {
        const repository = getRepository(Product);

        await repository.save(product);

        const newProduct = await repository.findOne({where: product})

        return newProduct as Product;
    }

    public patrimony = async () => {
        const repository = getRepository(Product);
        
        const amount = await repository.createQueryBuilder('product').select('COUNT(product.code)').getRawOne();
        const total = await repository.createQueryBuilder('product').select('SUM(product.value)').getRawOne();

        return {
            amount: Number(Object.values(amount)[0]),
            total: Number(Object.values(total)[0]),
        }

    }
}

export default ProductRepository;