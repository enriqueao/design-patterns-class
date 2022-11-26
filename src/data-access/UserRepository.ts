import { PgConnection, ClientBase } from "src/common/db/pg";

import { IUserRepository } from "./interface";

export class UserRepository implements IUserRepository {

  private db: ClientBase;

  constructor() {
    this.db = PgConnection.getInstance().client;
  }

  async getUserById(userId: number): Promise<any> {
    const result = await this.db.query("SELECT NOW()");
    return result;
  }
}
