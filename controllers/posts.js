const postsModel = require('../models/posts');

const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require('./main');


const getAllPosts = async(req,res)=>{
  await postsModel.find({})
  .populate("from")
  .populate("likes")
  .populate("comments")
  .then(data => {
    data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
        res.status(200).json({ success: true, data })
})
.catch(err => res.status(400).json({ success: false, err }))
}
const getPostsById = (req, res) => {
  getById(req, res, postsModel)
}
const createNewPosts = (req, res) => {
  create(req, res, postsModel)
}
const updatePosts = (req, res) => {
  updateOne(req, res, postsModel)
}
const deletePosts = (req, res) => {
  deleteOne(req, res, postsModel)
}

module.exports = {
  getPostsById,
  getAllPosts,
  createNewPosts,
  updatePosts,
  deletePosts
}