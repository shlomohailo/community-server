const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    from: [{ type: mongoose.Types.ObjectId, ref: "users" }],
    postContent: { type: String, required: true },
    img: { type: String, required: true },
    likes: [{ type: mongoose.Types.ObjectId, ref: "users" }],
    comments: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  },
  {
    timeseries: true,
    timestamps: true,
  }
);
module.exports = mongoose.model('posts', Post)
