const mongoose = require("mongoose");

const STRING_CONNECTION = process.env.STRING_CONNECTION

mongoose.connect(STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology:true

})
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.error("Connection error", err.message))

module.exports = mongoose.connection