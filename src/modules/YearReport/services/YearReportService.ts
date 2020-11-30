import IYearReportRepository from "../repositories/IYearReportRepository";
import IYearReportService from "./IYearReportService";
import ICreateYearReportDTO from "../dtos/ICreateYearReportDTO";

class YearReportService implements IYearReportService {
    private repository: IYearReportRepository;

    constructor(repository: IYearReportRepository) {
        this.repository = repository;
    }

    public create = async (data: ICreateYearReportDTO) => {
        const yearReport = await this.repository.create(data);

        return yearReport;
    }

    public findById = async (id: number) => {
        const yearReport = await this.repository.findById(id);

        return yearReport;
    }

    public find = async () => {
        const yearReports = await this.repository.find();

        return yearReports;
    }

    public delete = async (id: number) => {
        const foundYearReport = await this.repository.findById(id);

        if (!foundYearReport)
            throw new Error(`Year Report with id ${id} not found`);

        await this.repository.delete(id);

        return;
    }
}

export default YearReportService;