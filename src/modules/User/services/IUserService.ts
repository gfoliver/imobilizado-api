import User from '../models/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserService {
    create({ email, name, password }: ICreateUserDTO): Promise<Omit<User, "password">>;

    findByEmail(email: string): Promise<User | undefined>;

    approve(id: number): Promise<User>;
}