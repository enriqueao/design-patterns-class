export interface IUserRepository {
    getUserById(userId: number): Promise<any>;
}