const { createNewProduct, getAllProducts, getSingleProduct } = require("../../controllers/product.controller");
const CheckUserMiddleWare = require("../../middleware/CheckUserMiddleWare");

const createUploadMiddleware = require("../../middleware/fileupload");

const router = require("express").Router();
const upload = createUploadMiddleware({ type: "product" })



router.get("/all", getAllProducts);
router.get("/single/:id", getSingleProduct);

router.post(
    "/create",
    CheckUserMiddleWare,
    upload.array("images"), 
    createNewProduct)



module.exports = router;