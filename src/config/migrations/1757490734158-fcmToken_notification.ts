import { MigrationInterface, QueryRunner } from "typeorm";

export class FcmTokenNotification1757490734158 implements MigrationInterface {
    name = 'FcmTokenNotification1757490734158'

    public async up(queryRunner: QueryRunner): Promise<void> {
      //  await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_uniqueblog_registerUnit"`);
       // await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
       // await queryRunner.query(`CREATE TABLE "expensemodule_receipt" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "purpose" character varying(255) NOT NULL, "amount" numeric NOT NULL DEFAULT '0', "payslip" character varying, "date" date, CONSTRAINT "PK_25d6b76efc46259e68763a2b2b3" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(100) NOT NULL, "userId" integer NOT NULL, "body" character varying(500) NOT NULL, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fcmToken" character varying`);
        await queryRunner.query(`ALTER TABLE "register_unit" ADD "fcmToken" character varying`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD "fcmToken" character varying`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ALTER COLUMN "supplementryStatus" SET DEFAULT 'pending'`);
       // await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
      //  await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "create-supplementry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
      //  await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "uniqueblog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ALTER COLUMN "supplementryStatus" SET DEFAULT 'Pending'`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP COLUMN "fcmToken"`);
        await queryRunner.query(`ALTER TABLE "register_unit" DROP COLUMN "fcmToken"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fcmToken"`);
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`DROP TABLE "expensemodule_receipt"`);
        await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "blogpost"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_uniqueblog_registerUnit" FOREIGN KEY ("createduserId") REFERENCES "register_unit"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
