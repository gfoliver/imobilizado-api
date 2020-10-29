import Unity from "../models/Unity";

export default interface IUnityService {
    create(name: string): Promise<Unity>;

    findById(id: number): Promise<Unity | undefined>;

    find(): Promise<Unity[]>;

    delete(id: number): Promise<void>;
}