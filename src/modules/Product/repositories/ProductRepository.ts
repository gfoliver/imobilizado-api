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
}

export default ProductRepository;