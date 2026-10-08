import { MigrationInterface, QueryRunner } from "typeorm";

export class ImageColumnNullableInStaff1756186381213 implements MigrationInterface {
    name = 'ImageColumnNullableInStaff1756186381213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "staff" ALTER COLUMN "image" SET NOT NULL`);
    }

}
