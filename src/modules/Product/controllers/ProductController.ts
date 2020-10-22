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

    public find = async (req: Request, res: Response) => {
        const filters = req.query;

        try {
            const response = await this.service.find(filters);

            return res.json({
                status: true,
                data: response
            });
        }
        catch(error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }

    public findByCode = async (req: Request, res: Response) => {
        const { code } = req.params;

        try {
            const product = await this.service.findByCode(code);

            return res.status(product ? 200 : 404).json({
                status: !!product,
                data: product
            });
        }
        catch(error) {
            return res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { code } = req.params;

        try {
            await this.service.delete(code);

            return res.json({
                status: true
            });
        }
        catch(error) {
            return res.status(400).json({
                status: false,
                error: error.message
            })
        }
    }

    public update = async (req: Request, res: Response) => {
        const data = req.body;

        try {
            const product = await this.service.update(data);

            return res.json({
                status: true,
                data: product
            })
        }
        catch(error) {
            return res.status(400).json({
                status: false,
                message: error.message
            })
        }
    }
}

export default ProductController;