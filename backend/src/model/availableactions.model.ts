// telegram, email

import mongoose from "mongoose";

const availableActionsSchema = new mongoose.Schema({
  telegram: {
    type: mongoose.Types.ObjectId,
  },
  email: {
    type: mongoose.Types.ObjectId,
  },
});

export const AvailableActions = mongoose.model(
  "AvailableActions",
  availableActionsSchema,
);
