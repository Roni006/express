const {
    user,
    addUser,
    userDelete,
    singleUser,
    updatedUser,
    registerUser,
    loginUser,
    verifyUser,
    resendVerificationEmail,
    updateUserPassword,
    editUserProfile } = require("../../controllers/users.controller");
const CheckUserMiddleWare = require("../../middleware/CheckUserMiddleWare");
const createUploadMiddleware = require("../../middleware/fileupload");
//Upload image
const upload = createUploadMiddleware({ type: "profile" })

const router = require("express").Router();

//register user
router.post("/register", registerUser)

//login user
router.post("/login", loginUser)

//verify user
router.get("/verify", verifyUser);

//resend Email
router.post("/resend", resendVerificationEmail);

//update user password
router.post("/update-password", CheckUserMiddleWare, updateUserPassword);

// update user profile
router.patch(
    '/profile-update',
    CheckUserMiddleWare,
    upload.single("image"),
    editUserProfile
    // (req, res) => {
    //     return res.send('OK');
    // }
);

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
