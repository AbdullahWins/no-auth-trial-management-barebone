// trial.router.ts
import { Router, Request, Response } from "express";
import { CreateTrialDto } from "./trial.dto";
import {
  getTrialByUserId,
  createOrUpdateTrialByUserId,
} from "./trial.repository";

const trial_router: Router = Router();

//hardcoded trial data
const image = 5;
const text = 10;

// Get Trial by User ID
trial_router.get(
  "/get-trial-by-user-id/:id",
  async (req: Request, res: Response) => {
    const user_id: string = req.params.id!;
    try {
      const trial = await getTrialByUserId(user_id);
      if (trial) {
        res.status(200).json(trial);
      } else {
        //if trial does not exist, send back hardcoded trial data
        res.status(200).json({ user_id, image, text });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching trial.", error });
    }
  }
);

// Create or Update Trial by User ID
trial_router.post(
  "/create-or-update-by-user-id",
  async (req: Request, res: Response) => {
    const data: CreateTrialDto = req.body;
    try {
      const trial = await createOrUpdateTrialByUserId(data);
      res.status(200).json(trial);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating or updating trial.", error });
    }
  }
);

export default trial_router;
