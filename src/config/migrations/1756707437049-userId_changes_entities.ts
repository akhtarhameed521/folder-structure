import { MigrationInterface, QueryRunner } from "typeorm";

export class UserIdChangesEntities1756707437049 implements MigrationInterface {
    name = 'UserIdChangesEntities1756707437049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "userUnit" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "totalVisitors" integer NOT NULL, "totalSupplementaryAccount" integer NOT NULL, "totalComplaints" integer NOT NULL, "totalMembers" integer NOT NULL, "totalVehicles" integer NOT NULL, "totalMaintenance" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_d61cb52410c6e39d7e2a786785c" PRIMARY KEY ("id"))`);
       // await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(100) NOT NULL, "userId" integer NOT NULL, "body" character varying(500) NOT NULL, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "visitor" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ALTER COLUMN "visitor_status" SET DEFAULT 'Pending'`);
       // await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" ALTER COLUMN "userId" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" ALTER COLUMN "userId" SET DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visitor" ALTER COLUMN "visitor_status" SET DEFAULT 'pending'`);
        await queryRunner.query(`ALTER TABLE "create-supplementry" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "visitor" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`DROP TABLE "userUnit"`);
    }

}
