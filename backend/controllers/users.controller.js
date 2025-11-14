// todo: NECESSERY IMPORTS
const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const generateTokne = require("../utils/token");
const mail = require("../utils/email");
// const nodemailer = require('nodemailer');
const verifyEmailModel = require("../model/verifyEmail.model");
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
                console.log("cretaed user");

                await verifyEmailModel.deleteMany({ userId: newUser._id });

                let token = generateTokne();
                console.log("generateTokne");
                let sentToken = new verifyEmailModel({ userId: newUser._id, token });

                await sentToken.save();
                console.log("sentToken save");



                let verificationLink = `http://localhost:5000/api/auth/verify?email=${email}&token=${token}`;


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
                        isVerify: existUser.isVerify,
                        // ! sdfdfss
                        image: existUser.image,
                    }
                    let token = jwt.sign(userdata, process.env.JWR_KEY, {
                        expiresIn: '10m'
                    });

                    res.cookie('token', token, {
                        maxAge: 600000, //10 min
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
// ! verifyUser
const verifyUser = async (req, res) => {
    const { email, token } = req.query;
    console.log(email, token);

    try {
        // let tokenExist = await verifyEmailModel.findOne({ token }).populate("userId");
        let tokenExist = await verifyEmailModel.findOne({ token }).populate('userId');

        if (!tokenExist) {
            return res.status(404).send({
                success: false,
                message: "Token Not Found"
            })
        }
        console.log(tokenExist);

        //! ekhnae prblm the hocche
        let user = await userModel.findOneAndUpdate(
            { _id: tokenExist.userId },
            { isVarify: true },
            { new: true },
        );
        //! ekhnae prblm the hocche
        console.log(user);

        await verifyEmailModel.deleteOne({ _id: tokenExist._id });

        res.status(200).send(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Email Verification</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 30px;">
    <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 8px; padding: 20px; text-align: center;">
      <h2 style="color: #333333;">Verify Your Email Address</h2>
      <p style="font-size: 15px; color: #555555;">
        Hi<b> ${user.name}</b>,<br /><br />
        Thanks for signing up! Please click the button below to verify your email address and activate your account.
      </p> 

      <p style="margin-top: 25px; font-size: 13px; color: #777777;">
        If the button doesn’t work, copy and paste this link into your browser:<br />
      </p>

      <hr style="margin-top: 25px; border: none; border-top: 1px solid #eeeeee;" />

      <p style="font-size: 12px; color: #999999;">
        If you didn’t request this, you can safely ignore this email.<br />
        &copy;  2025 Western Ideal Institute. All rights reserved.
      </p>
    </div>
  </body>
</html>


            `)
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        });
    }
}

const resendVerificationEmail = async (req, res) => {
    let { email } = req.body

    try {
        let userExist = await userModel.findOne({ email });
        if (!userExist) {
            return res.status(404).send({
                success: false,
                message: "Email Not Found",
            })
        }


        let token = generateTokne();

        await verifyEmailModel.deleteMany({ userId: userExist._id })

        let sentToken = new verifyEmailModel({ userId: userExist._id, token });

        await sentToken.save();


        let verificationLink = `http://localhost:5000/api/auth/verify?email=${email}&token=${token}`;


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

        <p>Hi ${userExist.name}</p>

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

        await mail(userExist.email, "Verify Your Email", body);


        res.status(200).send({
            success: true,
            message: "Verification Email Send",
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: flase,
            message: error.message
        });

    }
}

// ! Update User Password
const updateUserPassword = async (req, res) => {
    console.log(req.user);
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    try {
        let existUser = await userModel.findOne({ _id: req.user.id })
        if (!existUser) {
            return res.status(401).send({
                success: false,
                message: "Unathorized User"
            });
        } else {
            bcrypt.compare(oldPassword, existUser.password, (err, data) => {
                if (err) {
                    return res.status(401).send({
                        success: false,
                        message: "Unathorized User"
                    });
                }
                else {
                    if (newPassword == confirmNewPassword) {
                        bcrypt.hash(newPassword, 10, async function (err, hash) {
                            if (err) {
                                return res.status(500).send({
                                    success: false,
                                    message: "Internel Server Error"
                                });
                            } else {
                                let newPass = await userModel.findOneAndUpdate(
                                    { _id: existUser._id },
                                    { password: hash },
                                    { new: true }
                                );
                                res.status(200).send({
                                    success: true,
                                    message: 'Password Updated Successfuly',
                                    data: newPass
                                })
                            }
                        })
                    }
                    else {
                        return res.status(401).send({
                            success: false,
                            message: "New Password Did Not Match"
                        });
                    }
                }
            });
        }

        // res.send("ok")
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

// ! Eidt User Profile
const editUserProfile = async (req, res) => {
    if (!req.user) {
        return res
            .status(404)
            .send({ success: false, message: "Unathorised User" });
    }

    let profilePicture = req?.file?.filename;
    let updateFields = {};
    let allowedFields = ["name", "phone", "address"];

    allowedFields.map((field) => {
        if (req.body[field] !== undefined) {
            updateFields[field] = req.body[field]; // updateFields.name = data
        }
    });

    if (profilePicture) {
        try {
            let updateProfile = await userModel.findOneAndUpdate(
                { _id: req.user.id },
                { updateFields, image: `http://localhost:5000/${profilePicture}` },
                {
                    new: true,
                }
            );
            return res.status(200).send({
                success: true,
                message: "Profile Update Success",
                data: updateProfile,
            });
        } catch (error) {
            console.log(error);
            return res.status(400).send({
                success: false,
                message: error.message,
            });
        }
    }

    try {
        let updateProfile = await userModel.findOneAndUpdate(
            { _id: req.user.id },
            updateFields,
            {
                new: true,
            }
        );
        return res.status(200).send({
            success: true,
            message: "Profile Update Success",
            data: updateProfile,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message,
        });
    }
};
 

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
    resendVerificationEmail,
    updateUserPassword,
    editUserProfile,
    user,
    addUser,
    singleUser,
    userDelete,
    updatedUser,
};