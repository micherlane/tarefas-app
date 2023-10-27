import { DataSource } from "typeorm";
import { Task } from './entities/domain/tarefa';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    synchronize: false,
    logging: true,
    entities: [Task],
    subscribers: [],
    migrations: ["src/migrations/**/*.{js,ts}"]
});