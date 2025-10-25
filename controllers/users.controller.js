// todo: NECESSERY IMPORTS
const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
// todo: NECESSERY IMPORTS


// ! registerUser
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        bcrypt.hash(password, 10, async function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                console.log(err);
                res.status(500).send({
                    success: false,
                    message: err
                });
            }
            else {
                let newUser = new userModel({ name, email, password: hash });
                await newUser.save();

                res.status(201).send({
                    success: true,
                    message: "User Registered Successfully",
                    data: newUser,
                });
            }
        });


    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        });
    }
}

// ! LoginrUser

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let existUser = await userModel.findOne({ email });

        if (existUser) {
            bcrypt.compare(password, existUser.password, (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        success: false,
                        message: err
                    });
                }
                if (data) {
                    let userdata =
                    {
                        id: existUser._id,
                        name: existUser.name,
                        email: existUser.email,
                        phone: existUser.phone,
                        address: existUser.address,
                        isVerify: existUser.isVarify,
                        image: existUser.image,
                    }
                    let token = jwt.sign(userdata, process.env.JWR_KEY,{
                        expiresIn: '1m'
                    });

                    res.cookie('token', token, {
                        maxAge: 60000,
                    });

                    console.log(token);
                    res.status(200).send({
                        success: true,
                        message: "User Login Successfully",
                        data: userdata,
                    });
                }
                else {
                    res.status(404).send({
                        success: false,
                        message: "Invalid Credentials",
                    });
                }
            });
        }
        else {
            res.status(404).send({
                success: false,
                message: "User Not Found, Please Register",
            });
        }
    }

    catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}


// ! all user
const user = async (req, res) => {
    try {
        let allUsers = await userModel.find();

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

module.exports = {
    registerUser,
    loginUser,
    user,
    addUser,
    singleUser,
    userDelete,
    updatedUser,
};