const router = require("express").Router()
const {
    getAllUsers,
    getUsersById,
    createNewUsers,
    updateUsers,
    deleteUsers,
} = require('../controllers/users');
const { signIn,signUp } = require("../middlewares/accsess");
// const { validateUserSchema } = require("../middlewares/schemas")
router.get("/", getAllUsers)
router.get("/getById/:id", getUsersById)
router.post("/create", createNewUsers)
router.put("/update/:id", updateUsers)
router.delete("/delete/:id", deleteUsers)
router.post("/signIn", signIn)
router.post("/signUp", signUp)

module.exports = router