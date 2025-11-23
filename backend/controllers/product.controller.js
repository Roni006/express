const productModel = require("../model/product.model");

const createNewProduct = async (req, res) => {
    console.log(res.files);
    // return res.send("ok");

    if (!req.user) {
        return res
            .status(404)
            .send({
                success: false,
                message: "Undefined User"
            });
    }
    let { name, description, sellingPrice, discountPrice, category } = req.body;

    let images = req.files.map(image => {
        return `http://localhost:5000/${image.filename}`;
    });

    try {
        let newProduct = new productModel({
            name,
            description,
            sellingPrice,
            discountPrice,
            category,
            userId: req.user.id,
            images,
        });

        await newProduct.save();

        res.status(201).send({
            success: true,
            message: "New Product Created",
            data: newProduct,
        });
    } catch (error) {
        console.log(error);
        return res
            .status(400)
            .send({
                success: false,
                message: error.message
            });
    }
};

module.exports = { createNewProduct }