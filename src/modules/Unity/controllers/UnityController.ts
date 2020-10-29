import { Request, Response } from 'express';
import IUnityService from '../services/IUnityService';
import IUnityController from './IUnitiesController';

class UnityController implements IUnityController {
    private service: IUnityService;

    constructor(service: IUnityService) {
        this.service = service;
    }

    public create = async (req: Request, res: Response) => {
        const { name } = req.body;

        try {
            if (! name)
                throw new Error('Missing fields');

            const unity = await this.service.create(name);

            return res.json({
                status: true,
                data: unity
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

            const unity = await this.service.findById(Number(id));

            if (!unity)
                return res.status(404).json({
                    status: false,
                    message: 'Unity not found'
                })

            return res.json({
                status: true,
                data: unity
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
            const unities = await this.service.find();

            return res.json({
                status: true,
                data: unities
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

export default UnityController;