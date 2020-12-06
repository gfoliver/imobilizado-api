import YearReport from "../models/YearReport";
import ICreateYearReportDTO from "../dtos/ICreateYearReportDTO";


export default interface IYearReport {
    create(data: ICreateYearReportDTO): Promise<YearReport>;

    findByYear(year: number): Promise<YearReport | undefined>;

    find(): Promise<YearReport[]>;

    delete(id: number): Promise<void>;
}