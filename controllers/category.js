const CategoriesModel = require('../models/Categories');
const {
  getAll,
  getById,
  create,
  updateOne,
  deleteOne
} = require('./main');

const getAllCategories = async(req,res)=>{
  await CategoriesModel.find({})
  .populate({
    path: 'community',
    populate: {
        path: 'users',
    }
})
  .then(data => {
    data.length == 0 ? res.status(300).json({ success: false, message: "no data found" }) :
        res.status(200).json({ success: true, data })
})
.catch(err => res.status(400).json({ success: false, err }))
}


const getCategoriesById = (req, res) => {
  getById(req, res, CategoriesModel)
}
const createNewCategories = (req, res) => {
  create(req, res, CategoriesModel)
}
const updateCategories = (req, res) => {
  updateOne(req, res, CategoriesModel)
}
const deleteCategories = (req, res) => {
  deleteOne(req, res, CategoriesModel)
}

module.exports = {
    getAllCategories,
    getCategoriesById,
    createNewCategories,
    updateCategories,
    deleteCategories,
  }