import { IUserDomain } from "./interfaces";

export class User implements IUserDomain{

    getUser(userId: number): Promise<any> {
        return Promise.resolve(userId);
    }

}