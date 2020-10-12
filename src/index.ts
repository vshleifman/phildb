import "reflect-metadata";
import { createConnection, QueryBuilder } from "typeorm";
import { Philosopher } from "./entity/Philosopher";
import { Period } from "./entity/Period";
import express from "express";
import cors from "cors";
import periodRoutes from "./routes/periodRoutes";
import { resolve } from "path";

createConnection()
  .then(async (connection) => {
    const philoRep = connection.getRepository(Philosopher);
    const periodRep = connection.getRepository(Period);

    const app = express();
    app.use(express.json());
    // app.use(periodRoutes);
    app.use(cors());

    app.get("/period", async (req: express.Request, res: express.Response) => {
      const periods = await periodRep.find();

      res.json(periods);
    });

    app.get(
      "/philosopher",
      async (req: express.Request, res: express.Response) => {
        const philosophers = await philoRep.query("select * from philosopher");

        res.json(philosophers);
      }
    );

    app.listen(3001);

    console.log("db ready");
  })
  .catch((error) => console.log({ error }));
