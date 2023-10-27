import { MigrationInterface, QueryRunner } from "typeorm";

export class Task1698418091658 implements MigrationInterface {
    name = 'Task1698418091658'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_Tasks" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(30) NOT NULL, "description" varchar, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "tags" varchar, "done" boolean NOT NULL DEFAULT (0), "author" varchar NOT NULL DEFAULT (''))`);
        await queryRunner.query(`INSERT INTO "temporary_Tasks"("id", "name", "description", "created_at", "tags", "done") SELECT "id", "name", "description", "created_at", "tags", "done" FROM "Tasks"`);
        await queryRunner.query(`DROP TABLE "Tasks"`);
        await queryRunner.query(`ALTER TABLE "temporary_Tasks" RENAME TO "Tasks"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tasks" RENAME TO "temporary_Tasks"`);
        await queryRunner.query(`CREATE TABLE "Tasks" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(30) NOT NULL, "description" varchar, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "tags" varchar, "done" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`INSERT INTO "Tasks"("id", "name", "description", "created_at", "tags", "done") SELECT "id", "name", "description", "created_at", "tags", "done" FROM "temporary_Tasks"`);
        await queryRunner.query(`DROP TABLE "temporary_Tasks"`);
    }

}
