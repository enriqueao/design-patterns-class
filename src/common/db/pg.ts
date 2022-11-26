import { Client, ClientBase } from "pg";
import config from 'src/config';

class PgConnection {

    #client: ClientBase; // private field typescript

    private static instance: PgConnection;

    private constructor (client: ClientBase){
        this.#client = client;
    }

    public static getInstance(){
        if(!PgConnection.instance){
            // create instance
            const client = new Client({
              user: config.db.username,
              host: config.db.host,
              database: config.db.database,
              password: config.db.password,
              port: config.db.port,
            });
            client.connect();
            PgConnection.instance = new PgConnection(client);
        }
        // si existe
        return PgConnection.instance;
    }

    get client(){
        return this.#client;
    }
}

export { ClientBase, PgConnection };