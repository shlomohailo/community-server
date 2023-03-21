const AdsModel = require('../models/ads');
const {
  getAll,
  getById,
  create,
  updateOne,
  deleteOne
} = require('./main');


const getAllAds = async(req,res)=>{
  await AdsModel.find({})
  .populate("category")
  .then(data => {
    data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
        res.status(200).json({ success: true, data })
})
.catch(err => res.status(400).json({ success: false, err }))
}


const getAdsById = (req, res) => {
  getById(req, res, AdsModel)
}
const createNewAd = (req, res) => {
  create(req, res, AdsModel)
}
const updateAd = (req, res) => {
  updateOne(req, res, AdsModel)
}
const deleteAd = (req, res) => {
  deleteOne(req, res, AdsModel)
}

module.exports = {
  getAllAds,
  getAdsById,
  createNewAd,
  updateAd,
  deleteAd
}