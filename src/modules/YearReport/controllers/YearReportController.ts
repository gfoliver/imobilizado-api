import { Request, Response } from 'express';
import IYearReportService from '../services/IYearReportService';
import IYearReport from './IYearReport';

class YearReport implements IYearReport {
    private service: IYearReportService;

    constructor(service: IYearReportService) {
        this.service = service;
    }

    public create = async (req: Request, res: Response) => {
        const data = req.body;

        try {
            if (!data.name || !data.cpf)
                throw new Error('Missing fields');

            const yearReport = await this.service.create(data);

            return res.json({
                status: true,
                data: yearReport
            });
        }
        catch(error) {
            return res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    public findByYear = async (req: Request, res: Response) => {
        const { year } = req.params;

        try {
            if (!year)
                throw new Error('Missing year');

            const yearReport = await this.service.findByYear(Number(year));

            if (!yearReport)
                return res.status(404).json({
                    status: false,
                    message: 'Year report not found'
                })

            return res.json({
                status: true,
                data: yearReport
            });
        }
        catch(error) {
            return res.status(400).json({
                status: false,
                error: error.message
            });
        }
    }

    public find = async (req: Request, res: Response) => {
        try {
            const yearReports = await this.service.find();

            return res.json({
                status: true,
                data: yearReports
            });
        }
        catch(error) {
            return res.status(500).json({
                status: false,
                error: error.message
            });
        }
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        
        try {
            await this.service.delete(Number(id));

            return res.json({
                status: true
            });
        } catch (error) {
            return res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
}

export default YearReport;