import { Request, Response } from 'express';

export default interface IUserController {
    create(req: Request, res: Response): Promise<Response>;
}