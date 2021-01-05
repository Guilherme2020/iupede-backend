import { getCustomRepository, getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';
import UsersRepository from '../repositories/UsersRepository';

class ShowAllUserService {
    public async execute(): Promise<User[] | null> {
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.find();

        if (!user) {
            throw new AppError('Users not found.');
        }

        return user || null;
    }

    public async show(id: string): Promise<User> {
        const usersRepository = getRepository(User);
        const user = await usersRepository.findOne(id);

        if (!user) {
            throw new AppError('User not found.');
        }
        return user || null;
    }
}

export default ShowAllUserService;
