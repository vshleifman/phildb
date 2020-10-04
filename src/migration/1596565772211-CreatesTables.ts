import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatesTables1596565772211 implements MigrationInterface {
  name = "CreatesTables1596565772211";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `period` (`period_id` int NOT NULL, `period_enum` varchar(255) NOT NULL, `img_url` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `era` varchar(255) NOT NULL, `text1` varchar(1000) NOT NULL, `text2` varchar(1000) NOT NULL, `text3` varchar(1000) NOT NULL, `text4` varchar(1000) NOT NULL, `description` varchar(255) NOT NULL, `dates` varchar(255) NOT NULL, PRIMARY KEY (`period_id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `philosopher` (`philosopherId` int NOT NULL AUTO_INCREMENT, `fname` varchar(255) NOT NULL, `lname` varchar(255) NOT NULL, `topname` varchar(255) NOT NULL, `nation` varchar(255) NOT NULL, `dates` varchar(255) NOT NULL, `image_url` varchar(255) NOT NULL, `image_desc` varchar(255) NOT NULL, `text_intro` varchar(1000) NOT NULL, `text_life` text NOT NULL, `text_work` text NOT NULL, `PeriodId` int NULL, PRIMARY KEY (`philosopherId`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `book` (`title` varchar(255) NOT NULL, `link` varchar(255) NOT NULL, `author` varchar(255) NOT NULL, `editor` varchar(255) NOT NULL, `date` varchar(255) NOT NULL, `PhilosopherId` int NULL, PRIMARY KEY (`title`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `philosopher` ADD CONSTRAINT `FK_c62fc9e8a08b3d0febb273ce823` FOREIGN KEY (`PeriodId`) REFERENCES `period`(`period_id`) ON DELETE NO ACTION ON UPDATE NO ACTION"
    );
    await queryRunner.query(
      "ALTER TABLE `book` ADD CONSTRAINT `FK_f20ef7a15c492817cb92f50038b` FOREIGN KEY (`PhilosopherId`) REFERENCES `philosopher`(`philosopherId`) ON DELETE NO ACTION ON UPDATE NO ACTION"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `book` DROP FOREIGN KEY `FK_f20ef7a15c492817cb92f50038b`"
    );
    await queryRunner.query(
      "ALTER TABLE `philosopher` DROP FOREIGN KEY `FK_c62fc9e8a08b3d0febb273ce823`"
    );
    await queryRunner.query("DROP TABLE `book`");
    await queryRunner.query("DROP TABLE `philosopher`");
    await queryRunner.query("DROP TABLE `period`");
  }
}
