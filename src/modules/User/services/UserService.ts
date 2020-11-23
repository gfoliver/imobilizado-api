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
            name: user.name,
            type: user.type,
            active: user.active,
            created_at: user.created_at,
            updated_at: user.updated_at
        }
    }

    public findByEmail = async (email: string) => {
        const user = await this.repository.findByEmail(email);

        return user;
    }

    public approve = async (id: number) => {
        const user = await this.repository.approve(id);

        return user;
    }

    public find = async () => {
        return this.repository.find();
    }

    public findById = async (id: number) => {
        return this.repository.findById(id);
    }

    public delete = async (id: number) => {
        return this.repository.delete(id);
    }
}

export default UserService;