import { getRepository } from 'typeorm';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';
import IUserRepository from './IUserRepository';

class UserRepository implements IUserRepository {
    async create({ name, email, password }: ICreateUserDTO) {
        const repository = getRepository(User);

        const user = repository.create({ name, email, password, type: "employee" });
        await repository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        const repository = getRepository(User);

        const user = await repository.findOne({ where: { email } });

        return user;
    }

    public approve = async (id: number) => {
        const repository = getRepository(User);

        let user = await repository.findOne({ where: { id } });

        if (!user)
            throw new Error('User not found');

        user.active = true;
        
        await repository.save(user);
        
        return user;
    }
}

export default UserRepository;