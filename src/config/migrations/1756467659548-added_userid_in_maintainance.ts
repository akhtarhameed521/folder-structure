import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedUseridInMaintainance1756467659548 implements MigrationInterface {
    name = 'AddedUseridInMaintainance1756467659548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" ADD "userId" integer NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" DROP COLUMN "userId"`);
    }

}
