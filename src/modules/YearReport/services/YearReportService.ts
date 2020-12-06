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

    public findByYear = async (year: number) => {
        const yearReport = await this.repository.findByYear(year);

        return yearReport;
    }

    public find = async () => {
        const yearReports = await this.repository.find();

        return yearReports;
    }

    public delete = async (id: number) => {
        await this.repository.delete(id);

        return;
    }
}

export default YearReportService;