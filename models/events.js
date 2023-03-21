const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Event = new Schema(
    {
        eventDate: { type: String, required: true },
        place: { type: String, required: true },
        participants: [{ type: mongoose.Types.ObjectId, ref: "users"  }],
        participantConfirm: [{ type: mongoose.Types.ObjectId, ref: "users"  }],
        community: { type: mongoose.Types.ObjectId, ref: "communities"  },
    },
    {
        timeseries: true,
        timestamps: true
    }
)

module.exports = mongoose.model('events', Event)