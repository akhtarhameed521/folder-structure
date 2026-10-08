import { MigrationInterface, QueryRunner } from "typeorm";

export class VisitorEntity1754397045110 implements MigrationInterface {
    name = 'VisitorEntity1754397045110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "visitor" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "cnic" character varying(100) NOT NULL, "phone" character varying(200) NOT NULL, "no_guest" integer NOT NULL, "purpose" character varying, "meet_time" TIMESTAMP NOT NULL, CONSTRAINT "PK_ba6ae421d03de90a99ed838741d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "visitor"`);
    }

}
