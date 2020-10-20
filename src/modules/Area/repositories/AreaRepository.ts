import Area from '../models/Area';
import { getRepository } from "typeorm";
import IAreaRepository from "./IAreaRepository";

class AreaRepository implements IAreaRepository {
    public create = async (name: string) => {
        const repository = getRepository(Area);

        const area = repository.create({ name });
        await repository.save(area);

        return area;
    }

    public findById = async (id: number) => {
        const repository = getRepository(Area);

        const foundArea = await repository.findOne({ where: { id } });

        return foundArea;
    }
}

export default AreaRepository;