require("dotenv").config();

const express = require("express");
const route = require("./route/route");
const mongoose = require("mongoose");
const cors = require('cors');
var app = express();
const port = process.env.PORT || 3004
app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)      
  .then(() => console.log("MongoDb is connected"))  
  .catch((err) => console.log(err));
app.use("/", route);        
  
app.listen(port,  () =>{        
  console.log(`Express app running on port ${port}`);
});  

module.exports = {app}