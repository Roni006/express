const categoryModel = require("../model/category.model");
const fs = require('fs');
const path = require('path')


const createNewCategory = async (req, res) => {
    if (!req.user) {
        return res.status(404).send({
            success: false,
            message: "Unathorrised User"
        })
    }
    let { name, description } = req.body;
    let thumb = req?.file?.filename;

    if (!thumb) {
        return res.status(404).send({
            success: false,
            message: "Category Thumb Must Be needed"
        })
    }

    try {
        let newCategory = new categoryModel({
            name,
            description,
            userId: req.user.id,
            thumb: `http://localhost:5000/${thumb}`,
        });

        await newCategory.save();

        return res.status(201).send({
            success: true,
            message: "New Category Created",
            data: newCategory,
        })

    } catch (error) {
        fs.unlink(path.join(`${__dirname} + "../uploads/category" + ${thumb}`))
        console.log(error);
        return res.status(400).send({
            success: false,
            message: error.message,
        })
    }


}

module.exports = {
    createNewCategory,
}