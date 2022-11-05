export interface IUserRepository {
  getNow(): Promise<string>;
}