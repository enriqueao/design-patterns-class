import { IUser } from "./IUser";

export interface IUserRepository {
  getUserById(userId: number): Promise<IUser>;
}