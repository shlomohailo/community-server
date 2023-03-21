const router = require("express").Router()
const {
    getAllEvents,
    getEventsById,
    createNewEvents,
    updateEvents,
    deleteEvents,
} = require('../controllers/events');

router.get("/", getAllEvents)
router.get("/getById/:id", getEventsById)
router.post("/create", createNewEvents)
router.put("/update/:id", updateEvents)
router.delete("/delete/:id", deleteEvents)


module.exports = router