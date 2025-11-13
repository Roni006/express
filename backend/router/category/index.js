const { createNewCategory } = require("../../controllers/category.controller");
const CheckUserMiddleWare = require("../../middleware/CheckUserMiddleWare");
const createUploadMiddleware = require("../../middleware/fileupload");

const router = require("express").Router();
const upload = createUploadMiddleware({ type: "category" })


router.post(
    "/create", 
    CheckUserMiddleWare, 
    upload.single('thumb'), 
    createNewCategory)

module.exports = router;