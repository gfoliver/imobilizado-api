import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default async function verifyToken (req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization)
        return res.status(401).json({
            status: false,
            message: 'Token not provided'
        });

        
    const [ type, token ] = authorization.split(' ');
    
    const secret = String(process.env.JWT_SECRET);

    try {
        verify(token, secret);

        return next();
    }
    catch(error) {
        return res.status(401).json({
            status: false,
            message: 'Token invalid'
        });
    }
}