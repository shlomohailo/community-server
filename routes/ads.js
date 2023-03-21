const router = require("express").Router()
const {
  getAllAds,
  getAdsById,
  createNewAd,
  updateAd,
  deleteAd
} = require('../controllers/ads');

router.get("/", getAllAds)
router.get("/getById/:id", getAdsById)
router.post("/create", createNewAd)
router.put("/update/:id", updateAd)
router.delete("/delete/:id", deleteAd)


module.exports = router