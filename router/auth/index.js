const { user, addUser, userDelete } = require("../../controllers/users.controller");
const CheckUserMiddleWare = require("../../middleware/CheckUserMiddleWare");

const router = require("express").Router();

// single users route 
router.get("/users",CheckUserMiddleWare ,user);

// new user add
router.post("/users/add", addUser);

// user delete route
router.delete("/users/:id", userDelete);

module.exports = router;
