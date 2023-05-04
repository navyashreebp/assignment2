const express = require("express");
const postData= require("./data");

const app = express();
const port = 3001;

app.use(express.json());

// Create a GET api that returns query param, path param and return both values with info as json
app.get("/:id",(req,res)=>{
    const responseData ={pathParam: req.params, queryParam: req.query};
    res.json(responseData)
})


// Create a POST api which acccepts a JSON data. Return an array of data.
app.post("/",(req,res)=>{
    console.log("post body-",req.body)
    res.json(postData);
})

// Create an express server
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})