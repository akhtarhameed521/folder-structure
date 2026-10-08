import { MigrationInterface, QueryRunner } from "typeorm";

export class QrCodeVisitors1754908658247 implements MigrationInterface {
    name = 'QrCodeVisitors1754908658247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor" ADD "qr_code_url" character varying`);
      //  await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "qr_code_url"`);
    }

}
