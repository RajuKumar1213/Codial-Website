const mongoose = require('mongoose');

async function connectToMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/codail');
      console.log("Connected to mongo successfully");
  }
    
module.exports = connectToMongo;
