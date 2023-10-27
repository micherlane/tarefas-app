export class TaskCreateDto {
    name: string;

    description: string;

    created_at: Date;

    tags: string;

    author: string;

    done: boolean;
}