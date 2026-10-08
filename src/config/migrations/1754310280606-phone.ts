import { MigrationInterface, QueryRunner } from "typeorm";

export class Phone1754310280606 implements MigrationInterface {
    name = 'Phone1754310280606'

    public async up(queryRunner: QueryRunner): Promise<void> {
      //  await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     //   await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
