import mongoose, { Schema, Document } from "mongoose";
import { Trial } from "./trial.interface";

const TrialSchema: Schema = new Schema({
  user_id: {
    type: String,
    required: [true, "User ID is required"],
  },
  images: {
    type: Number,
    required: [true, "Images is required"],
  },
  texts: {
    type: Number,
    required: [true, "Texts is required"]
  },
});

const TrialModel = mongoose.model<Trial & Document>("Trial", TrialSchema);

export default TrialModel;
