import Area from '../models/Area';

export default interface IAreaRepository {
    create(name: string): Promise<Area>;

    findById(id: number): Promise<Area | undefined>;
}