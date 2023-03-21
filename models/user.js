const mongoose = require('mongoose');
const Schema = mongoose.Schema


const User = new Schema(
    {

        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        role: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        pic: { type: String, required: false },
        address: { country: String, city: String, street: String },
        community:[ { type: mongoose.Types.ObjectId, ref: "communities" }],
        age: { type: String, required: true },
        gander: { type: String, required: true },
        events: [{ type: mongoose.Types.ObjectId, ref: "events" }],
        posts: [{ type: mongoose.Types.ObjectId, ref: "posts" }],

    },
    {
        timeseries: true,
        timestamps: true
    }
)

module.exports = mongoose.model('users', User);


