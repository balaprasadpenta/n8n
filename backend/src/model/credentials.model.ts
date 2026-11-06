import mongoose from "mongoose";

const credentialsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  platform: {
    type: String,
  },
  data: {
    type: mongoose.Types.ObjectId,
  },
});

export const Credentials = mongoose.model("Credentials", credentialsSchema);
