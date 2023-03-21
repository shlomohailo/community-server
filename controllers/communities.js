const CommunitiesModel = require('../models/communities');
const sendSms = require('../twilio');
const {
  getAll,
  getById,
  create,
  updateOne,
  deleteOne
} = require('./main');

const getAllCommunities = async(req,res)=>{
  await CommunitiesModel.find({})
  .populate('requests')
  .populate('managerDetails')
  .populate('users')
  .populate('posts')
  .populate('events')
  .populate('ads')
  .then(data => {
    data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
        res.status(200).json({ success: true, data })
})
.catch(err => res.status(400).json({ success: false, err }))
}


const getCommunitiesById = (req, res) => {
  getById(req, res, CommunitiesModel)
}
const createNewCommunities = (req, res) => {
  create(req, res, CommunitiesModel)
  // sendSms()
}
const updateCommunities = (req, res) => {
  updateOne(req, res, CommunitiesModel)
}
const deleteCommunities = (req, res) => {
  deleteOne(req, res, CommunitiesModel)
}

const searchByCommunitiesName = async(req,res)=>{
CommunitiesModel.find(community => community.name == req.params.name)
.then(communityName=>{
  res.status(200).json({success:true,communityName})
})
.catch(err=>res.status(400).json({success:false, err}))
}


module.exports = {
  getAllCommunities,
  getCommunitiesById,
  createNewCommunities,
  updateCommunities,
  deleteCommunities,
  searchByCommunitiesName
}