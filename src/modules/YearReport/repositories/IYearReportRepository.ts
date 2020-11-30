import YearReport from '../models/YearReport';
import ICreateYearReportDTO from '../dtos/ICreateYearReportDTO';

export default interface IYearReportRepository {
    create(data: ICreateYearReportDTO): Promise<YearReport>;

    findById(id: number): Promise<YearReport | undefined>;

    find(): Promise<YearReport[]>;

    delete(id: number): Promise<void>;
}