const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;
require("./DB/db");
// const passport = require('passport')
// require('./config/passport')(passport)
// const authMiddleWare = require("./middlewares/auth")
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const postsRouter = require("./routes/posts");
const communitiesRouter = require("./routes/communities");
const adsRouter = require("./routes/ads");
const eventsRouter = require("./routes/events");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/user");
const contactMail = require('./routes/contact')
app.use('/api/posts', postsRouter)
app.use('/api/contact', contactMail)
app.use('/api/communities', communitiesRouter)
app.use('/api/ads', adsRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/events', eventsRouter)
app.use('/api/users', usersRouter)

app.get("/", (req, res) => {
    res.send({ message: "success" })
});


app.listen(port, () => {
    console.log(`server is connect on port: ${port}`);
});