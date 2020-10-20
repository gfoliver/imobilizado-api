import { Request, Response } from 'express';
import IUserController from './IUserController';
import IUserService from '../services/UserService';

class UserController implements IUserController {
    private service: IUserService;

    constructor(service: IUserService) {
        this.service = service;
    }

    public create = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;

        try {
            if (!name || !email || !password) {
                throw new Error('Missing fields');
            }

            const user = await this.service.create({ name, email, password });

            return res.json({
                status: true,
                message: 'User created successfully',
                data: user
            });
        }
        catch(error) {
            return res.status(400).json({
                status: false,
                message: error.message
            })
        }
    }
}

export default UserController;