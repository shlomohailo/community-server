const router = require("express").Router()
const sendMail = require("../controllers/contact")

router.post('/contact',sendMail)

module.exports = router
