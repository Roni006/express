// todo: NECESSERY IMPORTS
const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const generateTokne = require("../utils/token");
const verifyEmailModel = require("../model/verifyEmail.model");
const mail = require("../utils/email");
const nodemailer = require('nodemailer')
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

                let token = generateTokne();
                let sentDoken = new verifyEmailModel({ userId: newUser._id, token });

                await sentDoken.save();


                let verificationLink = `http://localhost:5000/api/auth/verify?email=${email}&token=${token}`


                let body = `<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>Verify Your Email</title>

    <style>
        body {

            font-family: Arial, sans-serif;

            background-color: #f7f7f7;

            padding: 20px;

            color: #333;

        }

        .container {

            max-width: 500px;

            margin: auto;

            background-color: #fff;

            padding: 30px;

            border-radius: 6px;

            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .code {

            font-size: 24px;

            font-weight: bold;

            background-color: #f0f0f0;

            padding: 10px;

            border-radius: 4px;

            text-align: center;

            letter-spacing: 2px;

            margin: 20px 0;

        }

        .footer {

            font-size:

                12px;

            color:

                #777;

            margin-top: 20px;

        }
    </style>

</head>

<body>

    <div class="container">

        <h2>Verify Your Email Addres</h2>

        <p>Hi ${newUser.name}</p>

        <p>Thank you for signing up!</p>

        <p>Please use the verification code below to verify your email address:</p>

        <div class="code">${verificationLink}</div>

        <p>This code will expire in 10 minutes.</p>

        <p>If you did not request this, you can safely ignore this email.</p>

        <p>Thanks, <br>The Wii Team</p>
        I 

        <div class="footer">
            &copy; 2025 Wii. All rights reserved.
        </div>

    </div>

</body>

                            </html>`;

                await mail(newUser.email, "Verify Your Email", body);


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
                    let token = jwt.sign(userdata, process.env.JWR_KEY, {
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

const verifyUser = async (req, res) => {
    const { email, token } = req.query;
    console.log(email, token);

    try {
        let tokenExist = await verifyEmailModel.findOne({ token });
        if (!tokenExist) {
            return res.status(404).send({
                success: false,
                message: "Token Not Found"
            })
        }
        console.log(tokenExist);
        res.send("ok")
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        });
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
    verifyUser,
    user,
    addUser,
    singleUser,
    userDelete,
    updatedUser,
};