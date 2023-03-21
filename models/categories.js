const mongoose = require('mongoose');
const Schema = mongoose.Schema


const Category = new Schema(
    {
        name: { type: String, required: true },
        pic: { type: String, required: true },
        community: [{ type: mongoose.Types.ObjectId, ref: "communities" }],
    },
    {
        timeseries: true,
        timestamps: true
    }
)

module.exports = mongoose.model('categories', Category)