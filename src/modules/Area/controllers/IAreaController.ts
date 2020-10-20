import { Request, Response } from 'express';

export default interface IAreaController {
    create(req: Request, res: Response): Promise<Response>;
}