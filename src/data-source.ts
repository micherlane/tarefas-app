import { DataSource } from "typeorm";
import { Task } from './entities/domain/tarefa';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database.sqlite",
    synchronize: true,
    logging: true,
    entities: [Task],
    subscribers: [],
    migrations: []
});