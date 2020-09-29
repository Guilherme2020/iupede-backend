import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';
// import IUsersRepository from '../repositories/IusersRepository';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
    user_id: string;
}

class ShowUserService {
    public async execute({ user_id }: Request): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found.');
        }

        return user;
    }
}

export default ShowUserService;
