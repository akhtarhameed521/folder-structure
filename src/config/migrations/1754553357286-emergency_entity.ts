import { MigrationInterface, QueryRunner } from "typeorm";

export class EmergencyEntity1754553357286 implements MigrationInterface {
    name = 'EmergencyEntity1754553357286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "emergency" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "logo" character varying, "helpline_no" character varying NOT NULL DEFAULT 'User', CONSTRAINT "PK_577f3349535b2d39704154478d1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "emergency"`);
    }

}
