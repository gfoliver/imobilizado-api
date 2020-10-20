import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUserService from './IUserService';
import IUserRepository from '../repositories/IUserRepository';
import { hash } from 'bcrypt';

class UserService implements IUserService {
    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    async create({ name, email, password }: ICreateUserDTO) {
        const foundUserWithSameEmail = await this.repository.findByEmail(email);

        if (foundUserWithSameEmail)
            throw new Error('Email already registered');
        
        const hashedPassword = await hash(password, 8);

        const user = await this.repository.create({ name, email, password: hashedPassword });

        return {
            id: user.id,
            email: user.email,
            name: user.name
        }
    }
}

export default UserService;