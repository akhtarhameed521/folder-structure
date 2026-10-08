import { MigrationInterface, QueryRunner } from "typeorm";

export class MaintenanceReceipt1754908666360 implements MigrationInterface {
    name = 'MaintenanceReceipt1754908666360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."maintenance_receipt_maintenancestatus_enum" AS ENUM('Pending', 'Paid', 'Unpaid', 'PartiallyPaid', 'Overdue')`);
        await queryRunner.query(`CREATE TABLE "maintenance_receipt" ("id" SERIAL NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'Active', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "purpose" character varying(255) NOT NULL, "maintenancestatus" "public"."maintenance_receipt_maintenancestatus_enum" NOT NULL DEFAULT 'Pending', "amount" integer NOT NULL, "payslip" character varying, CONSTRAINT "PK_5e219c2b5045c95bc94bd78860c" PRIMARY KEY ("id"))`);
       // await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "maintenance_receipt"`);
        await queryRunner.query(`DROP TYPE "public"."maintenance_receipt_maintenancestatus_enum"`);
    }

}
