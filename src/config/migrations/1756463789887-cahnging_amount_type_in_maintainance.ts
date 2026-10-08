import { MigrationInterface, QueryRunner } from "typeorm";

export class CahngingAmountTypeInMaintainance1756463789887 implements MigrationInterface {
    name = 'CahngingAmountTypeInMaintainance1756463789887'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" ADD "amount" numeric NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" ADD "amount" integer NOT NULL`);
    }

}
