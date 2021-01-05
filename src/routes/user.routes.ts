import { Router } from 'express';

import CreateUserService from '../services/CreateUserServices';
import ShowUserService from '../services/ShowUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ShowAllUserService from '../services/ShowAllUserServices';

const usersRouter = Router();

// usersRouter.use(ensureAuthenticated);
usersRouter.get('/all', async (request, response) => {
    const showUsers = new ShowAllUserService();
    const users = await showUsers.execute();
    return response.send(users);
});

usersRouter.get('/:id', async (request, response) => {
    console.log(request.params.id);
    const showUser = new ShowUserService();
    const user = await showUser.execute(request.params.id);
    return response.send(user);
});

usersRouter.get('/', ensureAuthenticated, async (request, response) => {
    // console.log(request.user.id);
    const showUser = new ShowUserService();
    const user = await showUser.execute({ user_id: request.user.id });

    return response.send(user);
});

usersRouter.post('/', async (request, response) => {
    const { name, email, password, cpf, fcm, token } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name,
        email,
        password,
        cpf,
        fcm,
        token,
    });

    delete user.password;
    return response.send(user);
});

// usersRouter.patch(
//     '/avatar',
//     ensureAuthenticated,
//     upload.single('avatar'),
//     async (request, response) => {
//         const updateUserAvatar = new UpdateUserAvatarService();

//         const user = await updateUserAvatar.execute({
//             user_id: request.user.id,
//             avatarFilename: request.file.filename,
//         });
//         delete user.password;
//         return response.json(user);
//     },
// );

export default usersRouter;
