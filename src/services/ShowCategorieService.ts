import { getRepository } from 'typeorm';
import Categories from '../models/Categories';
import AppError from '../errors/AppError';

class ShowCategorieService {
    public async execute(): Promise<Categories[] | null> {
        const categoriesRepository = getRepository(Categories);
        const categories = await categoriesRepository.find({
            // relations: ['products'],
        });

        if (!categories) {
            throw new AppError('Categories not found.');
        }

        return categories || null;
    }
}

export default ShowCategorieService;
