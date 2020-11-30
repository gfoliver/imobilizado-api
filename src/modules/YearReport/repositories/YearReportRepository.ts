import YearReport from '../models/YearReport';
import { getRepository } from "typeorm";
import IYearReportRepository from "./IYearReportRepository";
import ICreateYearReportDTO from "../dtos/ICreateYearReportDTO";

class YaerReportRepository implements IYearReportRepository {
    public create = async (data: ICreateYearReportDTO) => {
        const repository = getRepository(YearReport);
        
        const yearReport = repository.create(data);        
        await repository.save(yearReport);

        return yearReport;
    }

    public findById = async (id: number) => {
        const repository = getRepository(YearReport);

        const foundYearReport = await repository.findOne({ where: { id } });

        return foundYearReport;
    }

    public find = async () => {
        const repository = getRepository(YearReport);

        const yearReport = await repository.find();

        return yearReport;
    }

    public delete = async (id: number) => {
        const repository = getRepository(YearReport);

        await repository.delete(id);

        return;
    }
}

export default YaerReportRepository;