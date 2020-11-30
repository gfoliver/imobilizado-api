import { Request, Response } from 'express';
import IUserController from './IUserController';
import IUserService from '../services/UserService';
import { decode } from 'jsonwebtoken';

interface decodedData {
    email: string;
}

class UserController implements IUserController {
    private service: IUserService;

    constructor(service: IUserService) {
        this.service = service;
    }

    public create = async (req: Request, res: Response) => {
        const { name, email, password, type } = req.body;

        try {
            if (!name || !email || !password) {
                throw new Error('Missing fields');
            }

            const user = await this.service.create({ name, email, password, type });

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

    public approve = async (req: Request, res: Response) => {
        const { authorization } = req.headers;
        const { id } = req.body;

        if (!id)
            return res.status(400).json({
                status: false,
                message: 'Missing id'
            })

        if (!authorization)
            return res.status(401).json({});
        
        const [ type, token ] = authorization.split(' ');

        const { email } = decode(token) as decodedData;

        const foundUser = await this.service.findByEmail(email);

        if (!foundUser)
            return res.status(401).json({});

        if (foundUser.type != "admin")
            return res.status(401).json({});

        const user = await this.service.approve(id);

        return res.json({
            status: true,
            data: user
        });
    }

    public find = async (req: Request, res: Response) => {
        const users = await this.service.find();

        return res.json({
            status: true,
            data: users
        })
    }

    public findById = async (req: Request, res: Response) => {
        const { id } = req.params;

        const user = await this.service.findById(Number(id));

        return res.json({
            status: !!user,
            data: user
        });
    }

    public delete = async(req: Request, res: Response) => {
        const { id } = req.params;

        await this.service.delete(Number(id));

        return res.json({
            status: true,
        });
    }
}

export default UserController;