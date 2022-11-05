import { Client, ClientBase } from 'pg';

import config from 'src/config';

export class Postgres {

  #client: ClientBase;
  private static instance;

  private constructor(client: Client) {
    this.#client = client;
  }

  static getInstance(){
    if(!Postgres.instance){
        const client = new Client({
          user: config.db.username,
          host: config.db.host,
          database: config.db.database,
          password: config.db.password,
          port: config.db.port,
        });
        client.connect();
        Postgres.instance = new Postgres(client);
    }

    return Postgres.instance;
  }

  get client(){
    return this.#client;
  }
}