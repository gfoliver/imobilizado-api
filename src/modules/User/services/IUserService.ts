import User from '../models/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserService {
    create({ email, name, password }: ICreateUserDTO): Promise<User>;
}