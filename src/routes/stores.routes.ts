import { Router } from 'express';

import CreateStoresService from '../services/CreateStoresService';
import ShowAllStoresService from '../services/ShowAllStoresService';
// import ShowUserService from '../services/ShowUserService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
// import ShowAllUserService from '../services/ShowAllUserServices';

const storesRouter = Router();

// usersRouter.use(ensureAuthenticated);
// companieRouter.get('/all', async (request, response) => {
//     // const showUsers = new ShowAllUserService();
//     // const users = await showUsers.execute();
//     // return response.send(users);
// });

storesRouter.get('/', async (request, response) => {
    const showStores = new ShowAllStoresService();
    const stores = await showStores.execute();
    return response.send(stores);
});

storesRouter.post('/', async (request, response) => {
    const {
        address,
        description,
        latitude,
        longitude,
        companiesId,
    } = request.body;
    const createStore = new CreateStoresService();

    const store = await createStore.execute({
        address,
        description,
        latitude,
        longitude,
        companiesId,
    });

    return response.send(store);
});

export default storesRouter;
