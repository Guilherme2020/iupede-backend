import { getRepository } from 'typeorm';
import Product from '../models/Product';
import AppError from '../errors/AppError';

class ShowProductService {
    public async execute(idCompanie): Promise<Product[] | null> {
        console.log(idCompanie);
        const { companies_id } = idCompanie;
        const productsRepository = getRepository(Product);
        const product = await productsRepository.find({
            relations: ['categories_id', 'companies_id'],
            where: {
                companies_id: { id: companies_id },
            },
        });
        if (!product) {
            throw new AppError('Products not found.');
        }

        return product || null;
    }
}

export default ShowProductService;
