import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "member", "viewer"],
    default: "member"
  }
}, {
  timestamps: true
});

// prevent duplicate membership
memberSchema.index({ userId: 1, boardId: 1 }, { unique: true });

export default mongoose.model("Member", memberSchema);