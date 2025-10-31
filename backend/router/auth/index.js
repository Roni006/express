const {
    user,
    addUser,
    userDelete,
    singleUser,
    updatedUser,
    registerUser,
    loginUser, 
    verifyUser} = require("../../controllers/users.controller");
const CheckUserMiddleWare = require("../../middleware/CheckUserMiddleWare");

const router = require("express").Router();

//register user
router.post("/register", registerUser)

//login user
router.post("/login", loginUser)

//verify user
router.get("/verify", verifyUser)


// all users route 
router.get("/users", CheckUserMiddleWare, user);

// single users route 
router.get("/users/:id", CheckUserMiddleWare, singleUser);


// updated users route 
router.patch("/users/update/:id", updatedUser);


// new user add
router.post("/users/add", addUser);

// user delete route
router.delete("/users/:id", userDelete);

module.exports = router;
