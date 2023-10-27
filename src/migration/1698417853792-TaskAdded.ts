import { MigrationInterface, QueryRunner } from "typeorm";

export class TaskAdded1698417853792 implements MigrationInterface {
    name = 'TaskAdded1698417853792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tasks" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(30) NOT NULL, "description" varchar, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "tags" varchar, "author" varchar NOT NULL DEFAULT (''), "done" boolean NOT NULL DEFAULT (0))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Tasks"`);
    }

}
