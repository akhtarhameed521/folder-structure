
import { MigrationInterface, QueryRunner } from "typeorm";

export class Expensemodul1756971998392 implements MigrationInterface {
    name = 'Expensemodul1756971998392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "expensemodule_receipt" (
                "id" SERIAL NOT NULL,
                "status" character varying(50) NOT NULL DEFAULT 'Active',
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "purpose" character varying(255) NOT NULL,
                "amount" numeric NOT NULL DEFAULT '0',
                "payslip" character varying,
                "date" date,
                CONSTRAINT "PK_25d6b76efc46259e68763a2b2b3" PRIMARY KEY ("id")
            )
        `);
        // Remove the ALTER TABLE statements for uniqueblog and post_response
        // since their constraints already exist
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "expensemodule_receipt"`);
    }
}