import { IUserRepository } from '../data-access/interfaces/IUserRepository';
import UserRepository from '../data-access/UserRepository';
import { IUserDomain } from './interfaces';


export class User implements IUserDomain {

    private userRepository: IUserRepository;

    constructor(){
        this.userRepository = new UserRepository();
    }

    async getUser(): Promise<string>{
        return await this.userRepository.getNow();
    }
}