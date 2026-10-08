import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedTwoMoreFieldInBookingMigration1760078663303 implements MigrationInterface {
    name = 'AddedTwoMoreFieldInBookingMigration1760078663303'

    public async up(queryRunner: QueryRunner): Promise<void> {
     //   await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_uniqueblog_registerUnit"`);
     //   await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
        await queryRunner.query(`ALTER TABLE "hallBooking" ADD "approvedBy" character varying`);
        await queryRunner.query(`ALTER TABLE "hallBooking" ADD "remarks" character varying`);
     //   await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
      //  await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "create-supplementry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
      //  await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "uniqueblog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`ALTER TABLE "hallBooking" DROP COLUMN "remarks"`);
        await queryRunner.query(`ALTER TABLE "hallBooking" DROP COLUMN "approvedBy"`);
        await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "blogpost"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_uniqueblog_registerUnit" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
