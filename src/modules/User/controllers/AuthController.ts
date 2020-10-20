import { Request, Response } from 'express';
import IAuthService from '../services/IAuthService';
import IAuthController from './IAuthController';

class AuthController implements IAuthController {
    private service: IAuthService;

    constructor(service: IAuthService) {
        this.service = service;
    }

    public login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            if (!email || ! password)
                throw new Error('Missing fields');

            const { token, user } = await this.service.login({ email, password });

            return res.json({
                status: true,
                data: {
                    token, 
                    user
                }
            });   
        } catch (error) {
            return res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
}

export default AuthController;