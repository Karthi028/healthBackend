const mongoose= require("mongoose");
const app = require("./app");
const {MONGODB,PORT} = require('./config/config')   


mongoose
    .connect(MONGODB)
    .then(() => {
        console.log("Connected to Database");
        console.log('connecting to server');

        app.listen(PORT, () => {
            console.log(`server Running on port http://localhost:${PORT}`)
        })
    })
    .catch((error)=>{
        console.log("error connecting to database",error)
    })