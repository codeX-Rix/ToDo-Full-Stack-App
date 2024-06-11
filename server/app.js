const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 500;
const cors = require("cors");
const routes = require("./routes/TodoRoutes.js")

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConnect = async () => {
  try{
    mongoose.connect(process.env.MONGO_URI)
    console.log("database connected")
  }catch(error){
    console.log("databse not connected:", error)
  }
}
dbConnect()

app.use("/api", routes)

app.listen(PORT, () => {
  console.log(`server working on ${PORT}`)
})
