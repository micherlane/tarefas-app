import { Request, Response } from "express";
import { TaskCreateDto } from "../../dtos/TaskCreateDto";

export class TaskCreateController {
    async handle(req: Request, res: Response){
        const taskCreateDto = req.body as TaskCreateDto;

        return res.json(taskCreateDto);
    }
}