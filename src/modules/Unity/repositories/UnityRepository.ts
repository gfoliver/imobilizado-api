import Unity from '../models/Unity';
import { getRepository } from "typeorm";
import IUnityRepository from "./IUnityRepository";

class UnityRepository implements IUnityRepository {
    public create = async (name: string) => {
        const repository = getRepository(Unity);

        const unity = repository.create({ name });
        await repository.save(unity);

        return unity;
    }

    public findById = async (id: number) => {
        const repository = getRepository(Unity);

        const foundUnity = await repository.findOne({ where: { id } });

        return foundUnity;
    }

    public find = async () => {
        const repository = getRepository(Unity);

        const unities = await repository.find();

        return unities;
    }

    public delete = async (id: number) => {
        const repository = getRepository(Unity);

        await repository.delete(id);

        return;
    }
}

export default UnityRepository;