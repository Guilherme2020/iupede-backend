import { getRepository } from 'typeorm';

import Companies from '../models/Companies';

interface Request {
    name: string;
    description: string;
    cnpj: string;
}

class CreateCompanieService {
    public async execute({
        name,
        description,
        cnpj,
    }: Request): Promise<Companies> {
        const companieRepository = getRepository(Companies);

        const companie = companieRepository.create({
            name,
            description,
            cnpj,
        });

        await companieRepository.save(companie);

        return companie;
    }
}

export default CreateCompanieService;
