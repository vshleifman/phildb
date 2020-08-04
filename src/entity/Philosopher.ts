import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Period } from "./Period";
import { Movement } from "./Movement";
import { PeriodEnum } from "../philosophersData";

@Entity()
export class Philosopher {
  @PrimaryGeneratedColumn()
  philosopherId: number;

  @Column()
  fname: string;

  @Column()
  lname: string;

  @Column()
  topname: string;

  @Column()
  nation: string;

  @Column()
  dates: string;

  @Column()
  image_url: string;

  @Column()
  image_desc: string;

  @Column("varchar", { length: 1000 })
  text_intro: string;

  @Column("text")
  text_life: string;

  @Column("text")
  text_work: string;

  @ManyToOne((type) => Period)
  @JoinColumn({ name: "PeriodId" })
  period_id: number;

  // @ManyToOne((type) => Movement)
  // @JoinColumn()
  // move: Movement;
}
