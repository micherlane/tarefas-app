import "reflect-metadata";
import 'express-async-errors';
import express from 'express';
import { router } from './routers';
import { exceptionsFunction } from './middlewares/exceptions';
import { AppDataSource } from "./data-source";
import cors from 'cors';

AppDataSource.initialize()
    .then(async () => {
        console.log("Banco de dados ativo")
        const port = 3333;
        
        const app = express();
        
        app.use(express.json());
        
        app.use(cors());
        
        app.use(router);
        
        app.use(exceptionsFunction);
        
        app.listen(port, () => console.log(`Servidor Online: http:/\/\localhost:${port}`))
}).catch(console.error);
