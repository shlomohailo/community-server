const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Community = new Schema({
  communityName: { type: String, required: true },
  communityDescription: { type: String, required: true },
  communityRules: { type: String, required: true },
  isPrivate: { type: Boolean, required: true },
  img: { type: String },
  managerDetails: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  requests: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  users: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  posts: [{ type: mongoose.Types.ObjectId, ref: "posts" }],
  events: [{ type: mongoose.Types.ObjectId, ref: "events" }],
  views: { type: Number },
  ads: [{ type: mongoose.Types.ObjectId, ref: "ads" }],

}, {
  timeseries: true,
  timestamps: true,
})
module.exports = mongoose.model('communities', Community);
