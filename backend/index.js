require('dotenv').config();
const express = require("express");
const app = express(); 
const cokkieParser = require('cookie-parser');
const router = require('./router');
const connectDb = require('./config/db.config');
const cors = require('cors')
let port = process.env.PORT; 

connectDb(); 
 
//! middle ware
app.use(cors({
  origin: "http://127.0.0.1:5500"
}))
app.use(cokkieParser());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads/profile'));
app.use(express.static('uploads/category'));

app.use(router); 
//! middle ware

// home route
app.get("/", (req, res) => { 
 
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
