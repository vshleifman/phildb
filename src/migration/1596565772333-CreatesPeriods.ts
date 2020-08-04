import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatesPeriods1596565772333 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("period")
      .values({
        period_id: 1,
        period_enum: "hi",
        img_url: "hi",
        title: "hi",
        era: "hi",
        text1: "hi",
        text2: "hi",
        text3: "hi",
        text4: "hi",
        description: "hi",
        dates: "hi",
      })
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.clearTable("period");
  }
}
