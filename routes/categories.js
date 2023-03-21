const router = require("express").Router()
const {
    getAllCategories,
    getCategoriesById,
    createNewCategories,
    updateCategories,
    deleteCategories,
} = require('../controllers/category');

router.get("/", getAllCategories)
router.get("/getById/:id", getCategoriesById)
router.post("/create", createNewCategories)
router.put("/update/:id", updateCategories)
router.delete("/delete/:id", deleteCategories)


module.exports = router