import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingRelationInVisitorWithRegisterUnit1756878980910 implements MigrationInterface {
    name = 'AddingRelationInVisitorWithRegisterUnit1756878980910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor" ADD "registerUnitId" integer`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD CONSTRAINT "FK_332bc236d943dd0ea8eec9ad6f8" FOREIGN KEY ("registerUnitId") REFERENCES "register_unit"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visitor" DROP CONSTRAINT "FK_332bc236d943dd0ea8eec9ad6f8"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "registerUnitId"`);
    }

}
