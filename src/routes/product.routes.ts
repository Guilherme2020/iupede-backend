import { Router } from 'express';

import CreateProductService from '../services/CreateProductService';
import ShowProductService from '../services/ShowProductService';
// import ShowUserService from '../services/ShowUserService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
// import ShowAllUserService from '../services/ShowAllUserServices';

const productRouter = Router();

// usersRouter.use(ensureAuthenticated);

productRouter.get('/', async (request, response) => {
    // const showUsers = new ShowAllUserService();
    // const users = await showUsers.execute();
    // return response.send(users);
    console.log('request', request.query);
    const { companies_id } = request.query;
    const showProducts = new ShowProductService();
    const products = await showProducts.execute({ companies_id });
    return response.send(products);
});

productRouter.post('/', async (request, response) => {
    const {
        name,
        price,
        quantity,
        description,
        image_url,
        thumbnail_url,
        companies_id,
        categories_id,
    } = request.body;
    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
        name,
        price,
        quantity,
        description,
        image_url,
        thumbnail_url,
        companies_id,
        categories_id,
    });

    return response.send(product);
});

export default productRouter;
