const router = require("express").Router()
const {
  getPostsById,
  getAllPosts,
  createNewPosts,
  updatePosts,
  deletePosts
} = require('../controllers/posts');

router.get("/", getAllPosts)
router.get("/getById/:id", getPostsById)
router.post("/create", createNewPosts)
router.put("/update/:id", updatePosts)
router.delete("/delete/:id", deletePosts)


module.exports = router