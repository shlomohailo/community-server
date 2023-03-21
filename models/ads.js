const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ad = new Schema(
  {
    category: [{ type: mongoose.Types.ObjectId, ref: "categories" }],
    companyName: { type: String, required: true },
    coupons: { type: String, required: true },
    img: { type: String, required: true },
    linkToWebSite: { type: String, required: true },
  },
  {
    timeseries: true,
    timestamps: true,
  }
);
module.exports = mongoose.model('ads', Ad)

