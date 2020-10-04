import * as express from "express";
import { Period } from "../entity/Period";
import { getConnection, getRepository } from "typeorm";

const router = express.Router();
const periodRep = getRepository(Period);

router.get("/period", async (req: express.Request, res: express.Response) => {
  const periods = await periodRep.find();

  res.json(periods);
});

export default router;
