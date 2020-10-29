import IUnityRepository from "../repositories/IUnityRepository";
import IUnityService from "./IUnityService";

class UnityService implements IUnityService {
    private repository: IUnityRepository;

    constructor(repository: IUnityRepository) {
        this.repository = repository;
    }

    public create = async (name: string) => {
        const unity = await this.repository.create(name);

        return unity;
    }

    public findById = async (id: number) => {
        const unity = await this.repository.findById(id);

        return unity;
    }

    public find = async () => {
        const unities = await this.repository.find();

        return unities;
    }

    public delete = async (id: number) => {
        const foundUnity = await this.repository.findById(id);

        if (!foundUnity)
            throw new Error(`Unity with id ${id} not found`);

        await this.repository.delete(id);

        return;
    }
}

export default UnityService;