import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveConfirmPasswordFeild1755768370058 implements MigrationInterface {
    name = 'RemoveConfirmPasswordFeild1755768370058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP COLUMN "confirmPassword"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD "confirmPassword" character varying NOT NULL`);
    }

}
