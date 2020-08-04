import "reflect-metadata";
import { createConnection, QueryBuilder } from "typeorm";
import { User } from "./entity/User";
import { Philosopher } from "./entity/Philosopher";
import { philosophers } from "./philosophersData";
import { periodData } from "./periodData";
import { Period } from "./entity/Period";
import { Book } from "./entity/Book";
import * as express from "express";
const cors = require("cors");

createConnection()
  .then(async (connection) => {
    const philoRep = connection.getRepository(Philosopher);
    const periodRep = connection.getRepository(Period);

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get("/period", async (req: express.Request, res: express.Response) => {
      const periods = await periodRep.find();

      res.json(periods);
    });

    app.get(
      "/philosopher",
      async (req: express.Request, res: express.Response) => {
        const philosophers = await philoRep.query("select * from Philosopher");

        res.json(philosophers);
      }
    );

    app.listen(3001);

    const createPhiloTable = () => {
      philosophers.map(async (philo) => {
        const philosopher = new Philosopher();
        philosopher.fname = philo.fname;
        philosopher.lname = philo.lname;
        philosopher.topname = philo.topname;
        philosopher.nation = philo.nation;
        philosopher.dates = philo.dates;
        philosopher.text_intro = philo.text.intro;
        philosopher.text_life = philo.text.life;
        philosopher.text_work = philo.text.work;
        philosopher.image_desc = philo.image.desc;
        philosopher.image_url = philo.image.url;
        philosopher.period_id = philo.period_id;

        await connection.manager.save(philosopher);
      });
      console.log("philo table saved!");
    };

    const createPeriodTable = () => {
      periodData.map(async (periodSrc) => {
        const period = new Period();

        period.title = periodSrc.title;
        period.period_enum = periodSrc.period;
        period.period_id = periodSrc.period_id;
        period.dates = periodSrc.dates;
        period.description = periodSrc.desc;
        period.era = periodSrc.era;

        period.text1 = periodSrc.text1;
        period.text2 = periodSrc.text2;
        period.text3 = periodSrc.text3;
        period.text4 = periodSrc.text4;

        period.img_url = periodSrc.img;

        await connection.manager.save(period);
      });
      console.log("period table saved!");
    };

    const createBookTable = async () => {
      const book = new Book();

      book.author = "Derrida, Jaques";
      book.link = "#";
      book.title = "A Derridw Reader: Between the Blinds";
      book.philosopherId = 22;

      await connection.manager.save(book);
      console.log("book table saved!");
    };

    // createPeriodTable();
    createPhiloTable();
    // createBookTable();
    console.log("db ready");
  })
  .catch((error) => console.log(error));
