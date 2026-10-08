import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationAddedSuppRegister1755518438192 implements MigrationInterface {
    name = 'RelationAddedSuppRegister1755518438192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(100) NOT NULL, "userId" integer NOT NULL, "body" character varying(500) NOT NULL, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD "registerUnitId" integer`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD CONSTRAINT "FK_848649f86fd4f37990b7dacceb6" FOREIGN KEY ("registerUnitId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP CONSTRAINT "FK_848649f86fd4f37990b7dacceb6"`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP COLUMN "registerUnitId"`);
        await queryRunner.query(`DROP TABLE "notification"`);
    }

}
