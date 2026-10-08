import { MigrationInterface, QueryRunner } from "typeorm";

export class ModigiedLoginMigration1760591560390 implements MigrationInterface {
    name = 'ModigiedLoginMigration1760591560390'

    public async up(queryRunner: QueryRunner): Promise<void> {
      //  await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_uniqueblog_registerUnit"`);
      //  await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
      //  await queryRunner.query(`ALTER TABLE "register_unit_supplementary" DROP CONSTRAINT "FK_supplementaryId"`);
        await queryRunner.query(`ALTER TABLE "register_unit" ADD "lastLoginAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "register_unit" ADD "lastLogoutAt" TIMESTAMP`);
    //    await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
     //   await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "create-supplementry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
      //  await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "uniqueblog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
      //  await queryRunner.query(`ALTER TABLE "register_unit_supplementary" ADD CONSTRAINT "FK_79483ca9d2a3d26582770d9d0fd" FOREIGN KEY ("supplementaryId") REFERENCES "create-supplementry"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_unit_supplementary" DROP CONSTRAINT "FK_79483ca9d2a3d26582770d9d0fd"`);
        await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`ALTER TABLE "register_unit" DROP COLUMN "lastLogoutAt"`);
        await queryRunner.query(`ALTER TABLE "register_unit" DROP COLUMN "lastLoginAt"`);
        await queryRunner.query(`ALTER TABLE "register_unit_supplementary" ADD CONSTRAINT "FK_supplementaryId" FOREIGN KEY ("supplementaryId") REFERENCES "create-supplementry"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "blogpost"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_uniqueblog_registerUnit" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
