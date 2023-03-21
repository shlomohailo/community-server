const EventsModel = require('../models/events');
const {
  getAll,
  getById,
  create,
  updateOne,
  deleteOne
} = require('./main');

const getAllEvents = async (req,res) => {
  await EventsModel.find({})
    .populate('posts')
    .populate('events')
    .populate('community')
    .then(data => {
      data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
        res.status(200).json({ success: true, data })
    })
    .catch(err => res.status(400).json({ success: false, err }))
}


const getEventsById = (req, res) => {
  getById(req, res, EventsModel)
}
const createNewEvents = (req, res) => {
  create(req, res, EventsModel)
}
const updateEvents = (req, res) => {
  updateOne(req, res, EventsModel)
}
const deleteEvents = (req, res) => {
  deleteOne(req, res, EventsModel)
}

module.exports = {
  getAllEvents,
  getEventsById,
  createNewEvents,
  updateEvents,
  deleteEvents,
}