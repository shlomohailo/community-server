const router = require("express").Router()
const {
  getAllCommunities,
  getCommunitiesById,
  createNewCommunities,
  updateCommunities,
  deleteCommunities,
  searchByCommunitiesName
} = require('../controllers/communities');

router.get("/", getAllCommunities)
router.get("/:communityName", searchByCommunitiesName)
router.get("/getById/:id", getCommunitiesById)
router.post("/create", createNewCommunities)
router.put("/update/:id", updateCommunities)
router.delete("/delete/:id", deleteCommunities)


module.exports = router