// const { userModel } = require('../models/user');
const UsersModel = require('../models/user');
const {
  getAll,
  getById,
  create,
  updateOne,
  deleteOne
} = require('./main');

const getAllUsers = async(req,res)=>{
  await UsersModel.find({})
  .populate("posts")
  .populate("events")
  .populate("community")
  .then(data => {
    data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
        res.status(200).json({ success: true, data })
})
.catch(err => res.status(400).json({ success: false, err }))
}

const getUsersById = (req, res) => {
  getById(req, res, UsersModel)
}
const createNewUsers = (req, res) => {
  create(req, res, UsersModel)
}
const updateUsers = (req, res) => {
  updateOne(req, res, UsersModel)
}
const deleteUsers = (req, res) => {
  deleteOne(req, res, UsersModel)
}
module.exports = {
    getAllUsers,
    getUsersById,
    createNewUsers,
    updateUsers,
    deleteUsers,
  }