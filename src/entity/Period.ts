import { Entity, Column, PrimaryColumn } from "typeorm";
import { PeriodEnum } from "../philosophersData";

@Entity()
export class Period {
  @PrimaryColumn()
  period_id: number;

  @Column()
  period_enum: PeriodEnum;

  @Column()
  img_url: string;

  @Column()
  title: string;

  @Column()
  era: string;

  @Column("varchar", { length: 1000 })
  text1: string;

  @Column("varchar", { length: 1000 })
  text2: string;

  @Column("varchar", { length: 1000 })
  text3: string;

  @Column("varchar", { length: 1000 })
  text4: string;

  @Column()
  description: string;

  @Column()
  dates: string;
}
