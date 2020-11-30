export default interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    type: "admin" | "employee";
}