import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSupplimentary1755171870951 implements MigrationInterface {
  name = "CreateSupplimentary1755171870951";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "create-supplementry" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fullName" character varying(100) NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "relation" character varying NOT NULL, "gender" character varying NOT NULL, "cnic" character varying NOT NULL, "password" character varying NOT NULL, "confirmPassword" character varying NOT NULL, "supplementryStatus" character varying NOT NULL DEFAULT 'Pending', CONSTRAINT "PK_ad61c3d3168fa5b24a666fb7027" PRIMARY KEY ("id"))`
    );
    // await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "qr_code_url"`);
    // await queryRunner.query(`ALTER TABLE "register_unit" DROP COLUMN "role"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(
    //   `ALTER TABLE "register_unit" ADD "role" character varying NOT NULL DEFAULT 'User'`
    // );
    // await queryRunner.query(
    //   `ALTER TABLE "visitor" ADD "qr_code_url" character varying`
    // );
    await queryRunner.query(`DROP TABLE "create-supplementry"`);
  }
}
