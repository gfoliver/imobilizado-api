import Area from '../models/Area';
import { getRepository } from "typeorm";
import IAreaRepository from "./IAreaRepository";
import ICreateAreaDTO from "../dtos/ICreateAreaDTO";

class AreaRepository implements IAreaRepository {
    public create = async (data: ICreateAreaDTO) => {
        const repository = getRepository(Area);

        const area = repository.create(data);
        await repository.save(area);

        return area;
    }

    public findById = async (id: number) => {
        const repository = getRepository(Area);

        const foundArea = await repository.findOne({ where: { id } });

        return foundArea;
    }

    public find = async () => {
        const repository = getRepository(Area);

        const areas = await repository.find();

        return areas;
    }

    public delete = async (id: number) => {
        const repository = getRepository(Area);

        await repository.delete(id);

        return;
    }
}

export default AreaRepository;