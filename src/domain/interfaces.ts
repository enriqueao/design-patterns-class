export interface IUserDomain {
  getUser(): Promise<string>;
}