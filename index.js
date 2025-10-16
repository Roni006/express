require('dotenv').config();
const express = require("express");
const app = express(); 
const router = require('./router');
let port = process.env.PORT;

 
//! middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('upload')); 
 
app.use(router); 

// home route
app.get("/", (req, res) => {
//  console.log(uuidv4());
 
  res.send({
    success: true,
    message: "Welcome to server",
  });
});



// app.post('/new', upload.single('photo'), (req, res) => {
//   let { name, address } = req.body;
//   console.log(name, address);
//   res.send('ok')

// })


// error route
app.use((req, res) => {
  res.send({
    success: false,
    message: "Route not found",
  });
});

app.listen(port, () => {
  console.log("server is running on port: https://locahost:5000");
});
