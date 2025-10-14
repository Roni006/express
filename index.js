require("dotenv").config();
const express = require("express");
// const { v4: uuidv4 } = require('uuid'); 
const {user, addUser, userDelete} = require("./controllers/users.controller");
const upload = require("./middleware/fileupload");
const app = express(); 



let port = process.env.PORT;




//! middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('upload'))

// home route
app.get("/", (req, res) => {
 console.log(uuidv4());
 
  res.send({
    success: true,
    message: "Welcome to server",
  });
});

// single users route 
app.get("/users", user);


// new user add
app.post("/users/add", addUser);

// user delete route
app.delete("/users/:id",  userDelete);


app.post('/new', upload.single('photo'), (req, res) => {
  let { name, address } = req.body;
  console.log(name, address);
  res.send('ok')

})


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
