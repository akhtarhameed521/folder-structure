import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingUnitNoInSupplymentary1756380652778 implements MigrationInterface {
    name = 'AddingUnitNoInSupplymentary1756380652778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-complaint" ADD "unitNo" integer`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD "unitNo" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP COLUMN "unitNo"`);
        await queryRunner.query(`ALTER TABLE "create-complaint" DROP COLUMN "unitNo"`);
    }

}
