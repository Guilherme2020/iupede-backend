import { Router } from 'express';
import CreateUserService from '../services/CreateUserServices';
import ShowUserService from '../services/ShowUserService';
// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
    const showUser = new ShowUserService();
    console.log(request);
    // const user = await showUser.execute({ user_id: request.user.id });

    return response.send({});
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
