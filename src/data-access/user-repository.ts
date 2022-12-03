import { IUser } from "src/domain/user/IUser";
import { IUserRepository } from "src/domain/user/IUserRepository";

export class UserRepository implements IUserRepository {

  constructor() { }

  async getUserById(userId: number): Promise<IUser> {
    return Promise.resolve({
      id: userId,
      name: 'Enrique',
      email: 'enriqueao@gmail.com'
    });
  }
}
