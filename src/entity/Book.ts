import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Philosopher } from "./Philosopher";

@Entity()
export class Book {
  @PrimaryColumn()
  title: string;

  @Column()
  link: string;

  @Column()
  author: string;

  @ManyToOne((type) => Philosopher)
  @JoinColumn({ name: "PhilosopherId" })
  philosopherId: number;
}
