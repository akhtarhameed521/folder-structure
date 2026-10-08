import { MigrationInterface, QueryRunner } from "typeorm";

export class StaffSchema1754388906874 implements MigrationInterface {
    name = 'StaffSchema1754388906874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "staff" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "gender" character varying(100) NOT NULL, "phone" character varying(100) NOT NULL, "cnic" character varying(100) NOT NULL, "address" character varying(100) NOT NULL, "designation" character varying(100) NOT NULL, "image" character varying(100) NOT NULL, CONSTRAINT "PK_e4ee98bb552756c180aec1e854a" PRIMARY KEY ("id"))`);
       // await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`DROP TABLE "staff"`);
    }

}
