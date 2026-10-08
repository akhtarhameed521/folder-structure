import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedRoleColumnInSupplementary1756295783155 implements MigrationInterface {
    name = 'AddedRoleColumnInSupplementary1756295783155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD "role" character varying NOT NULL DEFAULT 'User'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP COLUMN "role"`);
    }

}
