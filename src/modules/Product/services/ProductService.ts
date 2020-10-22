import IFindProductFilters from '../dtos/IFindProductFilters';
import Product from '../models/Product';
import IProductRepository from '../repositories/IProductRepository';
import IProductService from "./IProductService";

class ProductService implements IProductService {
    private repository: IProductRepository;

    constructor(repository: IProductRepository) {
        this.repository = repository;
    }

    public create = async (data: Product) => {
        const { code } = data;

        const foundProductWithSameCode = await this.repository.findByCode(code);

        if (foundProductWithSameCode)
            throw new Error(`Product with code ${code} already registered.`);

        const product = await this.repository.create(data);

        return product;
    }

    public findByCode = async (code: string) => {
        const product = await this.repository.findByCode(code);

        return product;
    }

    public find = async (filters: IFindProductFilters) => {
        const products = await this.repository.find(filters);

        return products;
    }
}

export default ProductService;