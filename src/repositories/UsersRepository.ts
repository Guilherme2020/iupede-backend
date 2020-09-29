import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
    public async findByEmail(email: string): Promise<User | null> {
        const findUser = await this.findOne({
            where: { email },
        });

        return findUser || null;
    }

    public async findById(id: string): Promise<User | null> {
        const findUserById = await this.findById(id);

        return findUserById || null;
    }
}

export default UsersRepository;
