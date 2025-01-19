// trial.repository.ts
import TrialModel from "./trial.model";
import { CreateTrialDto } from "./trial.dto";

export const getTrialByUserId = async (user_id: string) => {
  try {
    return await TrialModel.findOne({ user_id });
  } catch (error) {
    throw new Error("Error fetching trial by user ID");
  }
};

export const createOrUpdateTrialByUserId = async (data: CreateTrialDto) => {
  const { user_id, images, texts } = data;
  try {
    return await TrialModel.findOneAndUpdate(
      { user_id },
      { user_id, images, texts },
      { new: true, upsert: true }
    );
  } catch (error) {
    throw new Error("Error creating or updating trial");
  }
};
