import { MigrationInterface, QueryRunner } from "typeorm";

export class NotificationEntity1754399445642 implements MigrationInterface {
    name = 'NotificationEntity1754399445642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."announcement_announcementstatus_enum" AS ENUM('like', 'dislike', 'pending')`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(255) NOT NULL, "announcementStatus" "public"."announcement_announcementstatus_enum" NOT NULL DEFAULT 'pending', "body" text NOT NULL, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TYPE "public"."announcement_announcementstatus_enum"`);
    }

}
