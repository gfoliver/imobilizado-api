import { Request, Response } from 'express';

export default interface IProductController {
    create(req: Request, res: Response): Promise<Response>;
    
    findByCode(req: Request, res: Response): Promise<Response>;

    find(req: Request, res: Response): Promise<Response>;
}