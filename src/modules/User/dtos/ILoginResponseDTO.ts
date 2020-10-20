import User from "../models/User";

export default interface ILoginResponseDTO {
    token: string;
    user: Omit<User, "password">;
}