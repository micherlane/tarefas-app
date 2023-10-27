import 'dotenv/config';
import { DataSource } from "typeorm";
import { Task } from "./entities/tarefa";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "tasks",
    synchronize: false,
    logging: true,
    entities: [ Task ],
    subscribers: [],
    migrations: ["src/**/migrations/*.{js,ts}"]
});



AppDataSource.initialize()
    .then(() => console.log("Banco de dados ativo"))
    .catch(console.error);