import express from 'express';
import { router } from './routers';
import 'express-async-errors';
import { exceptionsFunction } from './middlewares/exceptions';
import cors from 'cors';

const port = 3333;

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use(exceptionsFunction);

try {
    app.listen(port, () => console.log(`Servidor Online: http:/\/\localhost:${port}`))
} catch (error){
    console.log(error);
}