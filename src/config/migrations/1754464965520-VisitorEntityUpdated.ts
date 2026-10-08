import { MigrationInterface, QueryRunner } from "typeorm";

export class VisitorEntityUpdated1754464965520 implements MigrationInterface {
    name = 'VisitorEntityUpdated1754464965520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor" ADD "visitor_status" character varying NOT NULL DEFAULT 'pending'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "visitor_status"`);
    }

}
