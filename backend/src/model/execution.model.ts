import mongoose from "mongoose";

const executionSchema = new mongoose.Schema({
  workflowId: {
    type: String,
    ref: "Workflow",
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
  },
  tasksDone: {
    type: Number,
  },
});

export const Execution = mongoose.model("Execution", executionSchema);
