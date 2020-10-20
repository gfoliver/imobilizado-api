import { Request, Response } from 'express';
import IProductService from '../services/IProductService';
import IProductController from './IProductController';

class ProductController implements IProductController {
    private service: IProductService;

    constructor(service: IProductService) {
        this.service = service;
    }

    public create = async (req: Request, res: Response) => {
        const data = req.body;

        try {
            if (!data.code || !data.name || !data.value || !data.amount || !data.image || !data.description || !data.area_id)
                throw new Error('Missing fields');

            const product = await this.service.create(data);

            return res.json({
                status: true,
                data: product
            });
        }
        catch(error) {
            return res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
}

export default ProductController;