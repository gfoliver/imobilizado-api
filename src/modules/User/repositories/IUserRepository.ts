import User from '../models/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
    create({ email, name, password }: ICreateUserDTO): Promise<User>;

    findByEmail(email: string): Promise<User | undefined>;

    approve(id: number): Promise<User>;

    find(): Promise<Partial<User>[]>;

    findById(id: number): Promise<Partial<User> | undefined>;

    delete(id: number): Promise<void>;
}