import ILoginDTO from "../dtos/ILoginDTO";
import IUserRepository from "../repositories/IUserRepository";
import IAuthService from "./IAuthService";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

class AuthService implements IAuthService {
    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    public login = async ({ email, password }: ILoginDTO) => {
        const foundUser = await this.repository.findByEmail(email);

        if (!foundUser)
            throw new Error(`User with email ${email} not found`);

        const isPasswordCorrect = await compare(password, foundUser.password);

        if (!isPasswordCorrect)
            throw new Error('Password incorrect');

        const secret = process.env.JWT_SECRET;

        if (!secret)
            throw new Error('JWT Secret not set');

        const token = sign({ email }, secret, {
            expiresIn: '1d'
        });

        return {
            token,
            user: {
                id: foundUser.id,
                email: foundUser.email,
                name: foundUser.name
            }
        }
    }
}

export default AuthService;