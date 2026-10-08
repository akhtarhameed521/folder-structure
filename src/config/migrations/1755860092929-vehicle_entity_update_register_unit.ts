import { MigrationInterface, QueryRunner } from "typeorm";

export class VehicleEntityUpdateRegisterUnit1755860092929 implements MigrationInterface {
    name = 'VehicleEntityUpdateRegisterUnit1755860092929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_unit" ADD "vehicle" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_unit" DROP COLUMN "vehicle"`);
    }

}
