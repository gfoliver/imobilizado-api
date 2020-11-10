import IAreaRepository from "../repositories/IAreaRepository";
import IAreaService from "./IAreaService";
import ICreateAreaDTO from "../dtos/ICreateAreaDTO";

class AreaService implements IAreaService {
    private repository: IAreaRepository;

    constructor(repository: IAreaRepository) {
        this.repository = repository;
    }

    public create = async (data: ICreateAreaDTO) => {
        const area = await this.repository.create(data);

        return area;
    }

    public findById = async (id: number) => {
        const area = await this.repository.findById(id);

        return area;
    }

    public find = async () => {
        const areas = await this.repository.find();

        return areas;
    }

    public delete = async (id: number) => {
        const foundArea = await this.repository.findById(id);

        if (!foundArea)
            throw new Error(`Area with id ${id} not found`);

        await this.repository.delete(id);

        return;
    }
}

export default AreaService;