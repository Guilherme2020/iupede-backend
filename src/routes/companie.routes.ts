import { Router } from 'express';

import CreateCompanieService from '../services/CreateCompanieService';
import ShowCompaniesService from '../services/ShowCompaniesService';
// import ShowUserService from '../services/ShowUserService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
// import ShowAllUserService from '../services/ShowAllUserServices';

const companieRouter = Router();

// usersRouter.use(ensureAuthenticated);
// companieRouter.get('/all', async (request, response) => {
//     // const showUsers = new ShowAllUserService();
//     // const users = await showUsers.execute();
//     // return response.send(users);
// });

companieRouter.get('/', async (request, response) => {
    const showCompanies = new ShowCompaniesService();
    const companies = await showCompanies.execute();
    return response.send(companies);
});

companieRouter.post('/', async (request, response) => {
    const { name, description, cnpj } = request.body;
    const createCompanie = new CreateCompanieService();

    const companies = await createCompanie.execute({
        name,
        description,
        cnpj,
    });

    return response.send(companies);
});

export default companieRouter;
