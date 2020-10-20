import Area from "../models/Area";

export default interface IAreaService {
    create(name: string): Promise<Area>;
}