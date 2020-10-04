import { MigrationInterface, QueryRunner } from "typeorm";
import { philosophers } from "../philosophersData";

export class SeedsPhilosophers1596620312996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    philosophers.map(async (philo) => {
      queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into("philosopher")
        .values({
          fname: philo.fname,
          lname: philo.lname,
          topname: philo.topname,
          nation: philo.nation,
          dates: philo.dates,
          text_intro: philo.text.intro,
          text_life: philo.text.life,
          text_work: philo.text.work,
          image_desc: philo.image.desc,
          image_url: philo.image.url,
          period_id: philo.period_id,
        })
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from("philosopher")
      .execute();
  }
}
