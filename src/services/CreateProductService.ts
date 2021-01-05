import { getRepository } from 'typeorm';

import Product from '../models/Product';

interface Request {
    name: string;
    price: number;
    quantity: number;
    description: string;
    image_url: string;
    thumbnail_url: string;
    companies_id: string;
    categories_id: string;
}

class CreateProductService {
    public async execute({
        name,
        price,
        quantity,
        description,
        image_url,
        thumbnail_url,
        companies_id,
        categories_id,
    }: Request): Promise<Product | null> {
        const productRepository = getRepository(Product);
        const product = productRepository.create({
            name,
            quantity,
            price,
            description,
            image_url,
            thumbnail_url,
            companies_id,
            categories_id,
        });
        await productRepository.save(product);
        return product;
    }
}

export default CreateProductService;
