import { Postgres } from "src/common/db/postgres";

import { IUserRepository } from "./interfaces/IUserRepository";

export default class UserRepository implements IUserRepository {

    private client;

    constructor() {
        this.client = Postgres.getInstance().client;
    }

    async getNow(): Promise<string> {
        const dbRes = await this.client.query("SELECT NOW()");
        return Promise.resolve(dbRes.rows.at(0));
    }
}
