import { MigrationInterface, QueryRunner } from "typeorm";

export class AssignIdInComplaint1756967600534 implements MigrationInterface {
    name = 'AssignIdInComplaint1756967600534'

    public async up(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(100) NOT NULL, "userId" integer NOT NULL, "body" character varying(500) NOT NULL, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "create-complaint" ADD "registerUnitId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "create-complaint" ADD CONSTRAINT "FK_ccab701d11699881050bc5c07f0" FOREIGN KEY ("registerUnitId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "create-complaint" DROP CONSTRAINT "FK_ccab701d11699881050bc5c07f0"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "create-complaint" DROP COLUMN "registerUnitId"`);
       // await queryRunner.query(`DROP TABLE "notification"`);
    }

}
