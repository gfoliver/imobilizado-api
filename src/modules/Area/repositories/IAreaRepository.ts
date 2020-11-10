import Area from '../models/Area';
import ICreateAreaDTO from '../dtos/ICreateAreaDTO';

export default interface IAreaRepository {
    create(data: ICreateAreaDTO): Promise<Area>;

    findById(id: number): Promise<Area | undefined>;

    find(): Promise<Area[]>;

    delete(id: number): Promise<void>;
}