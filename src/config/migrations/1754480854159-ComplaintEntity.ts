import { MigrationInterface, QueryRunner } from "typeorm";

export class ComplaintEntity1754480854159 implements MigrationInterface {
    name = 'ComplaintEntity1754480854159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-complaint" ADD "complaintStatus" character varying NOT NULL DEFAULT 'Pending'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-complaint" DROP COLUMN "complaintStatus"`);
    }

}
