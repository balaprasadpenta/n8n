import mongoose, { mongo } from "mongoose";

const webhookModel = new mongoose.Schema({
  title: {
    type: String,
    enum: ["email", "telegram"],
  },
  method: {
    type: String,
    enum: ["POST", "GET"],
  },
  path: {
    type: mongoose.Types.ObjectId,
  },
  header: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
});

export const Webhook = mongoose.model("Webhook", webhookModel);
