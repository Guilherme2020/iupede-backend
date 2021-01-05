import { getRepository } from 'typeorm';

import Categories from '../models/Categories';

interface Request {
    title: string;
    image_url: string;
}

class CreateCategorieService {
    public async execute({ title, image_url }: Request): Promise<Categories> {
        const caegorieRepository = getRepository(Categories);

        const categorie = caegorieRepository.create({
            title,
            image_url,
        });

        await caegorieRepository.save(categorie);

        return categorie;
    }
}

export default CreateCategorieService;
