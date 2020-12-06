import { Request, Response } from 'express';

export default interface IYearReport {
    create(req: Request, res: Response): Promise<Response>;

    findByYear(req: Request, res: Response): Promise<Response>;
    
    find(req: Request, res: Response): Promise<Response>;
    
    delete(req: Request, res: Response): Promise<Response>;
}