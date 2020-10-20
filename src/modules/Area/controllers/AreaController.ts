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
}

export default AreaController;