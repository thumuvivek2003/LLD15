import mongoose from "mongoose";

const labelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Label", labelSchema);