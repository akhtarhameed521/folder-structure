import { MigrationInterface, QueryRunner } from "typeorm";

export class PhoneUser1754308908578 implements MigrationInterface {
    name = 'PhoneUser1754308908578'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
