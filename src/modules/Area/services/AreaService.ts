import IAreaRepository from "../repositories/IAreaRepository";
import IAreaService from "./IAreaService";

class AreaService implements IAreaService {
    private repository: IAreaRepository;

    constructor(repository: IAreaRepository) {
        this.repository = repository;
    }

    public create = async (name: string) => {
        const area = await this.repository.create(name);

        return area;
    }
}

export default AreaService;