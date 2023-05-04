const express = require('express');
const app = express();
const port = 8000;

app.get("/" , (req, res)=>{
    let myData = {
        "Name " : "Raju kumar "
    }
    res.json(myData);
})

app.listen(port , function(err){
    if(err){
        console.log(`Error: ${port}`);
    }
    else {
        console.log(`Server is running on port ${port}`);
    }

})