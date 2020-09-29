import IFindAllUsersDTO from '../dtos/IFindAllUsersDTO';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';

export default interface IUsersRepository {
    findAllProviders(data: IFindAllUsersDTO): Promise<User[]>;
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
}
