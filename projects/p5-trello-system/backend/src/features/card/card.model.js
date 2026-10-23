import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  listId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  assignedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  labelIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Label"
    }
  ]
}, {
  timestamps: true
});

export default mongoose.model("Card", cardSchema);