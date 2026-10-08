import { MigrationInterface, QueryRunner } from "typeorm";

export class RegisterUnitEntity1754627019254 implements MigrationInterface {
    name = 'RegisterUnitEntity1754627019254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "register_unit" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fullname" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "phone" character varying(100) NOT NULL, "cnic" character varying(100) NOT NULL, "gender" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "block" integer NOT NULL, "floor" integer NOT NULL, "unitNo" integer NOT NULL, "totalMembers" integer NOT NULL, CONSTRAINT "PK_a07ff2faacf9671192020c89dde" PRIMARY KEY ("id"))`);
     //   await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "register_unit"`);
    }

}
