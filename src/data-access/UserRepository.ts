import { Postgres } from "src/common/db/postgres";

import { IUserRepository } from "./interfaces/IUserRepository";

export default class UserRepository implements IUserRepository {

    private client;

    constructor() {
        this.client = Postgres.getInstance().client;
    }

    async getNow(): Promise<string> {
        const dbRes = await this.client.query("SELECT NOW()");
        const now = dbRes.rows.at(0);
        console.log({dbRes});
        return Promise.resolve(now);
    }
}
