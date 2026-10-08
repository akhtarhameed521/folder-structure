import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationChangedRegisterUnitAndSupplymentary1755762117020 implements MigrationInterface {
    name = 'RelationChangedRegisterUnitAndSupplymentary1755762117020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP CONSTRAINT "FK_848649f86fd4f37990b7dacceb6"`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP COLUMN "registerUnitId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor" ALTER COLUMN "visitor_status" SET DEFAULT 'pending'`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD "registerUnitId" integer`);
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD CONSTRAINT "FK_848649f86fd4f37990b7dacceb6" FOREIGN KEY ("registerUnitId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
