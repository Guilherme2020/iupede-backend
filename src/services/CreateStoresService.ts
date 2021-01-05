import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Companies from '../models/Companies';

import Stores from '../models/Stores';

interface Request {
    address: string;
    description: string;
    latitude: string;
    longitude: string;
    companiesId: string;
}

class CreateStoresService {
    public async execute({
        address,
        description,
        latitude,
        longitude,
        companiesId,
    }: Request): Promise<Stores> {
        const storesRepository = getRepository(Stores);
        const companieRepository = getRepository(Companies);
        const findCompanieId = await companieRepository.findOne({
            id: companiesId,
        });
        console.log('find companie id', findCompanieId);

        if (!findCompanieId) {
            throw new AppError('This companie not exists', 400);
        }

        const stores = storesRepository.create({
            address,
            description,
            latitude,
            longitude,
            companies: companiesId,
        });

        await storesRepository.save(stores);

        return stores;
    }
}

export default CreateStoresService;
