import ILoginDTO from '../dtos/ILoginDTO';
import ILoginResponseDTO from '../dtos/ILoginResponseDTO';

export default interface IAuthService {
    login({ email, password }: ILoginDTO): Promise<ILoginResponseDTO>;
}