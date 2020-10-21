import { Request, Response } from 'express';
import IAreaService from '../services/IAreaService';
import IAreaController from './IAreaController';

class AreaController implements IAreaController {
    private service: IAreaService;

    constructor(service: IAreaService) {
        this.service = service;
    }

    public create = async (req: Request, res: Response) => {
        const { name } = req.body;

        try {
            if (! name)
                throw new Error('Missing fields');

            const area = await this.service.create(name);

            return res.json({
                status: true,
                data: area
            });
        }
        catch(error) {
            return res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    public findById = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            if (!id)
                throw new Error('Missing id');

            const area = await this.service.findById(Number(id));

            if (!area)
                return res.status(404).json({
                    status: false,
                    message: 'Area not found'
                })

            return res.json({
                status: true,
                data: area
            });
        }
        catch(error) {
            return res.status(400).json({
                status: false,
                error: error.message
            });
        }
    }

    public find = async (req: Request, res: Response) => {
        try {
            const areas = await this.service.find();

            return res.json({
                status: true,
                data: areas
            });
        }
        catch(error) {
            return res.status(500).json({
                status: false,
                error: error.message
            });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        
        try {
            await this.service.delete(Number(id));

            return res.json({
                status: true
            });
        } catch (error) {
            return res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
}

export default AreaController;