import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Period } from "./Period";

@Entity()
export class Movement {
  @PrimaryGeneratedColumn()
  move_id: number;

  @Column()
  dates: string;

  @ManyToOne((type) => Period)
  @JoinColumn({ name: "periodId" })
  periodId: Period;
}
