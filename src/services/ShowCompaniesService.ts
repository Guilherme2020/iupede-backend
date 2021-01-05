import { getRepository } from 'typeorm';
import Companies from '../models/Companies';
import AppError from '../errors/AppError';

class ShowCompaniesService {
    public async execute(): Promise<Companies[] | null> {
        const companiesRepository = getRepository(Companies);
        const companie = await companiesRepository.find({
            relations: ['products'],
        });
        console.log(companie);
        if (!companie) {
            throw new AppError('Companies not found.');
        }

        return companie || null;
    }
}

export default ShowCompaniesService;
