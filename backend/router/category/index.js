const { createNewCategory, getAllCategory, getSingleCategory, deleteCategory, updateCategory } = require("../../controllers/category.controller");
const CheckUserMiddleWare = require("../../middleware/CheckUserMiddleWare");
const createUploadMiddleware = require("../../middleware/fileupload");
// const categoryModel = require("../../model/category.model");

const router = require("express").Router();
const upload = createUploadMiddleware({ type: "category" })

// ! get all category
router.get("/all", getAllCategory);

// !single category
router.get("/single/:id", getSingleCategory)

// ! create new category
router.post(
    "/create",
    CheckUserMiddleWare,
    upload.single('thumb'),
    createNewCategory);


// ! dELETE category
router.put("/update/:id",
    CheckUserMiddleWare,
    upload.single('thumb'),
    updateCategory);

// ! dELETE category
router.delete("/delete/:id", CheckUserMiddleWare, deleteCategory);

module.exports = router;