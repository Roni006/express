const userModel = require("../model/user.model")

const user = async (req, res) => {
    // চেক কর authorization আছে কি না
    // if (!req.headers.authorization) {
    //     return res.status(401).send({
    //         success: false,
    //         message: "Authorization header missing!",
    //     });
    // }

    try {
        let allUsers = await userModel.find({ address: "dhaka" });

        res.status(200).send({
            success: true,
            message: "Users found",
            data: allUsers,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        });
    }

};

// ! singleUser
const singleUser = async (req, res) => {
    let { id } = req.params;
    try {
        let user = await userModel.findOne({ _id: id });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Users Not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "Users found",
            data: user,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        });
    }

};

// ! addUser
const addUser = async (req, res) => {
    let { name, address, phone, email, password } = req.body;

    try {
        let newUser = new userModel({ name, email, address, phone, password })
        await newUser.save();

    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        });
    }

    res.send({
        success: true,
        message: "New User Created",
    });
}

// ! update user 
const updatedUser = async (req, res) => {
    let { id } = req.params;
    let { name, address, phone, email, password } = req.body;

    try {
        let updateUser = await userModel.findOneAndUpdate(
            { _id: id },
            { name, address, phone, email, password },
            { new: true }
        );

        res.status(200).send({
            success: true,
            message: "user Upated",
            data: updateUser
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

// ! userDelete
const userDelete = async (req, res) => {
    let { id } = req.params;

    try {
        let data = await userModel.findByIdAndDelete({ _id: id });
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "user not found"
            });
        }
        res.status(200).send({
            success: true,
            message: "user dleted",
            data: data
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        })
    }

}

module.exports = { user, addUser, singleUser, userDelete, updatedUser };