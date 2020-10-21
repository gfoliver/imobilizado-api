import Area from "../models/Area";

export default interface IAreaService {
    create(name: string): Promise<Area>;

    findById(id: number): Promise<Area | undefined>;

    find(): Promise<Area[]>;

    delete(id: number): Promise<void>;
}