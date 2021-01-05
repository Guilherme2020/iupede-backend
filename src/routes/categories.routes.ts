import { Router } from 'express';
import CreateCategorieService from '../services/CreateCategorieService';
import ShowCategorieService from '../services/ShowCategorieService';
// import ShowUserService from '../services/ShowUserService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
// import ShowAllUserService from '../services/ShowAllUserServices';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
    const showCategories = new ShowCategorieService();
    const categories = await showCategories.execute();
    return response.send(categories);
});

categoriesRouter.post('/', async (request, response) => {
    const { title, image_url } = request.body;
    const createCategorie = new CreateCategorieService();

    const categories = await createCategorie.execute({
        title,
        image_url,
    });

    return response.send(categories);
});

export default categoriesRouter;
