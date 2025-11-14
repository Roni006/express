const { createNewProduct } = require("../../controllers/product.controller");
const createUploadMiddleware = require("../../middleware/fileupload");

const router = require("express").Router();
const upload = createUploadMiddleware({ type: "product" })

router.post("/create", upload.array("images"), createNewProduct)

module.exports = router;