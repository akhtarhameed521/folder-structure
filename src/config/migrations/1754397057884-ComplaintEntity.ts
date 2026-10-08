import { MigrationInterface, QueryRunner } from "typeorm";

export class ComplaintEntity1754397057884 implements MigrationInterface {
    name = 'ComplaintEntity1754397057884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "create-complaint" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(100) NOT NULL, "description" character varying(500) NOT NULL, "type" character varying NOT NULL DEFAULT 'Other', "priority" character varying NOT NULL DEFAULT 'Low', CONSTRAINT "PK_7f7fe9d44a8acc61ff8ebb6ec0c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "create-complaint"`);
    }

}
