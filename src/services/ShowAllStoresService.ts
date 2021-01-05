import { getRepository } from 'typeorm';
import Stores from '../models/Stores';
import AppError from '../errors/AppError';

class ShowStoresService {
    public async execute(): Promise<Stores[] | null> {
        const storesRepository = getRepository(Stores);
        try {
            const store = await storesRepository.find({
                // join: {
                //     alias: 'companies',
                //     innerJoin: {
                //         companies: 'companies.products',
                //     },
                // },
                relations: ['companies'],
            });
            console.log(store);
        } catch (e) {
            console.log(e);
        }

        if (!store) {
            throw new AppError('Products not found.');
        }

        // return null;
        return store || null;
    }
}

export default ShowStoresService;
