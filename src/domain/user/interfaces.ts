export interface IUserDomain {
    getUser(userId: number): Promise<any>;
}