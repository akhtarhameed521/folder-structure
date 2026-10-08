import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDomesticStaff1759235884350 implements MigrationInterface {
    name = 'UpdateDomesticStaff1759235884350'

    public async up(queryRunner: QueryRunner): Promise<void> {
     //   await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_uniqueblog_registerUnit"`);
     //   await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
        await queryRunner.query(`CREATE TABLE "domestic_staff_register_unit" ("domesticStaffId" integer NOT NULL, "registerUnitId" integer NOT NULL, CONSTRAINT "PK_c55b8a529c17f77866c1e4ca055" PRIMARY KEY ("domesticStaffId", "registerUnitId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b5b3601c633fe299fbae8df0de" ON "domestic_staff_register_unit" ("domesticStaffId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fc2df92e9973d17136145e3c3d" ON "domestic_staff_register_unit" ("registerUnitId") `);
    //    await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    //    await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "create-supplementry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    //    await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "uniqueblog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "domestic_staff_register_unit" ADD CONSTRAINT "FK_b5b3601c633fe299fbae8df0dee" FOREIGN KEY ("domesticStaffId") REFERENCES "domesticStaffSupplementary"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "domestic_staff_register_unit" ADD CONSTRAINT "FK_fc2df92e9973d17136145e3c3de" FOREIGN KEY ("registerUnitId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "domestic_staff_register_unit" DROP CONSTRAINT "FK_fc2df92e9973d17136145e3c3de"`);
        await queryRunner.query(`ALTER TABLE "domestic_staff_register_unit" DROP CONSTRAINT "FK_b5b3601c633fe299fbae8df0dee"`);
        await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fc2df92e9973d17136145e3c3d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b5b3601c633fe299fbae8df0de"`);
        await queryRunner.query(`DROP TABLE "domestic_staff_register_unit"`);
        await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "blogpost"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_uniqueblog_registerUnit" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
