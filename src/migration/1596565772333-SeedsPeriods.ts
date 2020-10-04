import { MigrationInterface, QueryRunner } from "typeorm";
import { periodData } from "../periodData";

export class SeedsPeriods1596565772333 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    periodData.map(async (periodSrc) => {
      queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into("period")
        .values({
          title: periodSrc.title,
          period_enum: periodSrc.period,
          period_id: periodSrc.period_id,
          dates: periodSrc.dates,
          description: periodSrc.desc,
          era: periodSrc.era,

          text1: periodSrc.text1,
          text2: periodSrc.text2,
          text3: periodSrc.text3,
          text4: periodSrc.text4,

          img_url: periodSrc.img,
        })
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.createQueryBuilder().delete().from("period").execute();
  }
}
