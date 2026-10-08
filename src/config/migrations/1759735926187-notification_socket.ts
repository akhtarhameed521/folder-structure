import { MigrationInterface, QueryRunner } from "typeorm";

export class NotificationSocket1759735926187 implements MigrationInterface {
    name = 'NotificationSocket1759735926187'

    public async up(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.query(`ALTER TABLE "maintenance_receipt" ADD "payAmount" numeric`);
      //  await queryRunner.query(`ALTER TABLE "maintenance_receipt" ADD "dueDate" date`);
        await queryRunner.query(`ALTER TABLE "notification" ADD "isRead" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "notification" ADD "readAt" TIMESTAMP WITH TIME ZONE`);
        // await queryRunner.query(`ALTER TABLE "uniqueblog" ADD CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db" FOREIGN KEY ("createduserId") REFERENCES "create-supplementry"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
       // await queryRunner.query(`ALTER TABLE "post_response" ADD CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5" FOREIGN KEY ("blogId") REFERENCES "uniqueblog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_response" DROP CONSTRAINT "FK_b840d79847cc8f2164f1bbc52b5"`);
        await queryRunner.query(`ALTER TABLE "uniqueblog" DROP CONSTRAINT "FK_6f7b70c0c1ae699648c1cb498db"`);
        await queryRunner.query(`ALTER TABLE "notification" DROP COLUMN "readAt"`);
        await queryRunner.query(`ALTER TABLE "notification" DROP COLUMN "isRead"`);
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" DROP COLUMN "dueDate"`);
        await queryRunner.query(`ALTER TABLE "maintenance_receipt" DROP COLUMN "payAmount"`);
    }

}
