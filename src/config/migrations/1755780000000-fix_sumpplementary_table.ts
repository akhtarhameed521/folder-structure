import { MigrationInterface, QueryRunner } from "typeorm";

export class FixSupplementaryFK1755780000000 implements MigrationInterface {
  name = "FixSupplementaryFK1755780000000";

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop incorrect foreign key constraint
    await queryRunner.query(`
      ALTER TABLE "register_unit_supplementary"
      DROP CONSTRAINT IF EXISTS "FK_79483ca9d2a3d26582770d9d0fd";
    `);

    // Add correct foreign key constraint
    await queryRunner.query(`
      ALTER TABLE "register_unit_supplementary"
      ADD CONSTRAINT "FK_supplementaryId"
      FOREIGN KEY ("supplementaryId")
      REFERENCES "create-supplementry" ("id")
      ON DELETE CASCADE;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Revert the foreign key constraint
    await queryRunner.query(`
      ALTER TABLE "register_unit_supplementary"
      DROP CONSTRAINT IF EXISTS "FK_supplementaryId";
    `);

    // Re-add the old constraint (if needed)
    await queryRunner.query(`
      ALTER TABLE "register_unit_supplementary"
      ADD CONSTRAINT "FK_79483ca9d2a3d26582770d9d0fd"
      FOREIGN KEY ("supplementaryId")
      REFERENCES "create-supplementry" ("id")
      ON DELETE CASCADE;
    `);
  }
}
