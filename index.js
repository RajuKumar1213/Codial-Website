const connectToMongo = require("./connect_to_mongo");
const express = require('express');
const app = express();
const port = 8000;

connectToMongo();

app.use(express.urlencoded({ extended: true }))

// serving the static files 
app.use(express.static('public'))


// Use the express routers
app.use("/" , require("./routes/routesIndex"));


// set up the ejs
app.set('view engine', 'ejs');

app.listen(port , function(err){
    if(err){
        console.log(`Error: ${port}`);
    }
    else {
        console.log(`Server is running on port ${port}`);
    }

})