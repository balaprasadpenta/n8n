import mongoose, { Mongoose } from "mongoose";

const workflowSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["email", "telegram"],
    required: true,
  },
  enabled: {
    type: String,
    enum: ["true", "false"],
  },
  nodes: {
    type: mongoose.Types.ObjectId,
  },
  connections: {
    type: mongoose.Types.ObjectId,
  },
});

export const Workflow = mongoose.model("Workflow", workflowSchema)
