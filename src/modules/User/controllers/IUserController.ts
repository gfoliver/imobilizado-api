import { Request, Response } from 'express';

export default interface IUserController {
    create(req: Request, res: Response): Promise<Response>;

    approve(req: Request, res: Response): Promise<Response>;

    find(req: Request, res: Response): Promise<Response>;
    
    findById(req: Request, res: Response): Promise<Response>;

    delete(req: Request, res: Response): Promise<Response>;
}