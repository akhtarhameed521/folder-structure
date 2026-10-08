import { MigrationInterface, QueryRunner } from "typeorm";

export class Uniqueblogingpost1756705644442 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."uniqueblog_type_enum" AS ENUM('simplepost', 'pollpost')`
    );
    await queryRunner.query(
      `CREATE TYPE "public"."uniqueblog_usertype_enum" AS ENUM('register', 'supplementary')`
    );
    await queryRunner.query(
      `CREATE TABLE "uniqueblog" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" "public"."uniqueblog_type_enum" NOT NULL, "text" character varying(255), "image" character varying, "title" character varying(255), "description" text, "options" jsonb, "createduserId" integer, "userType" "public"."uniqueblog_usertype_enum", CONSTRAINT "PK_07b3226e9023a95154936542fc8" PRIMARY KEY ("id"))`
    );
    // Optional: Keep one foreign key if needed, or none to rely on application-level validation
    await queryRunner.query(
      `ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_uniqueblog_registerUnit" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    // Comment out or remove the second foreign key to avoid conflicts
    // await queryRunner.query(
    //   `ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_uniqueblog_supplementaryUnit" FOREIGN KEY ("createduserId") REFERENCES "create-supplementry"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(
    //   `ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_uniqueblog_supplementaryUnit"`
    // );
    await queryRunner.query(
      `ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_uniqueblog_registerUnit"`
    );
    await queryRunner.query(`DROP TABLE "uniqueblog"`);
    await queryRunner.query(`DROP TYPE "public"."uniqueblog_usertype_enum"`);
    await queryRunner.query(`DROP TYPE "public"."uniqueblog_type_enum"`);
  }
}