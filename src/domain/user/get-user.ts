import { IUser } from "./IUser";
import { IUserRepository } from "./IUserRepository";

export interface IUserUseCase {
  getUser(userId: number): Promise<IUser>;
}

export class User implements IUserUseCase {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(userId: number): Promise<IUser> {
    const user = await this.userRepository.getUserById(userId);

    return user;
  }
}