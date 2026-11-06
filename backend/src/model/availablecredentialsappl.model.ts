// openai, telegram,resend

import mongoose from "mongoose";

const availableCredentialsSchema = new mongoose.Schema({
  openAi: {
    type: mongoose.Types.ObjectId,
  },
  resend: {
    type: mongoose.Types.ObjectId,
  },
  telegram: {
    type: mongoose.Types.ObjectId,
  },
});

export const AvailableCredentials = mongoose.model(
  "AvailableCredentials",
  availableCredentialsSchema,
);
