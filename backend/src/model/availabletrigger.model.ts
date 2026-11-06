// manual trigger, webhook trigger
import mongoose from "mongoose";

const availableTriggerSchema = new mongoose.Schema({
  trigger: {
    type: String,
    enum: ["manual trigger", "webhook"],
  },
});

export const AvailableTrigger = mongoose.model(
  "AvailableTrigger",
  availableTriggerSchema,
);
