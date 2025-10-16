const array = require("../model/user.model");

const user = (req, res) => {
    // চেক কর authorization আছে কি না
    if (!req.headers.authorization) {
        return res.status(401).send({
            success: false,
            message: "Authorization header missing!",
        });
    }

    // let token = req.headers.authorization.split(" ");


    let { name } = req.query;
    console.log(name);

    if (name) {
        let user = array.filter(
            (item) => item.name.toLowerCase() == name.toLowerCase()
        );
        if (user.length == 0) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }
        return res.status(200).send({
            success: true,
            message: "User found",
            data: user,
        });
    }

    res.status(200).send({
        success: true,
        message: "All Users found",
        data: array,
    });
};

const addUser = (req, res) => {
    let { id, name, age, status } = req.body;

    array.push({ id, name, age, status });

    res.send({
        success: true,
        message: "New User Created",
    });
}

const userDelete = (req, res) => {
    let { id } = req.params;

    // you can use findIndex and splice
    let index = array.findIndex((item) => item.id == id);
    if (index == -1) {
        res.status(404).send({
            success: false,
            message: "User not found",
        });
        return;
    }
    array.splice(index, 1);

    res.send({
        success: true,
        message: "User deleted success",
    });

    // also you can use filter
    // let newArray = array.filter((item) => item.name.toLowerCase() != name);
    // array = [];
    // array = newArray;

    // res.send({
    //     success: true,
    //     message: "User deleted success",
    // });
}

module.exports = { user, addUser, userDelete };