import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingUserIdInComplaint1756293233272 implements MigrationInterface {
    name = 'AddingUserIdInComplaint1756293233272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-complaint" ADD "userId" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-complaint" DROP COLUMN "userId"`);
    }

}
