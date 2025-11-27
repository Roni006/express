const { createNewProduct } = require("../../controllers/product.controller");
const checkUserMiddleware = require("../../middleware/checkUserMiddleware");
const createUploadMiddleware = require("../../middleware/fileupload");

const router = require("express").Router();
const upload = createUploadMiddleware({ type: "product" })

router.post(
    "/create",
    checkUserMiddleware,
    upload.array("images"),
    createNewProduct)

module.exports = router;