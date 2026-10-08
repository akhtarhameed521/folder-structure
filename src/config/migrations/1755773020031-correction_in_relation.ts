import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectionInRelation1755773020031 implements MigrationInterface {
    name = 'CorrectionInRelation1755773020031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "register_unit_supplementary" ("supplementaryId" integer NOT NULL, "registerUnitId" integer NOT NULL, CONSTRAINT "PK_661bcbdcc93069dae90efe3388a" PRIMARY KEY ("supplementaryId", "registerUnitId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_79483ca9d2a3d26582770d9d0f" ON "register_unit_supplementary" ("supplementaryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_204465433c073d17a30038a1dd" ON "register_unit_supplementary" ("registerUnitId") `);
        await queryRunner.query(`ALTER TABLE "register_unit_supplementary" ADD CONSTRAINT "FK_79483ca9d2a3d26582770d9d0fd" FOREIGN KEY ("supplementaryId") REFERENCES "create-supplementry"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "register_unit_supplementary" ADD CONSTRAINT "FK_204465433c073d17a30038a1dd7" FOREIGN KEY ("registerUnitId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_unit_supplementary" DROP CONSTRAINT "FK_204465433c073d17a30038a1dd7"`);
        await queryRunner.query(`ALTER TABLE "register_unit_supplementary" DROP CONSTRAINT "FK_79483ca9d2a3d26582770d9d0fd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_204465433c073d17a30038a1dd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_79483ca9d2a3d26582770d9d0f"`);
        await queryRunner.query(`DROP TABLE "register_unit_supplementary"`);
    }

}
