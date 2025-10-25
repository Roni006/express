const CheckUserMiddleWare = (req, res, next) => {
    console.log(req.cookies);

    let token = req.cookies.token;
    if (!token) {
        return res.status(401).send({
            success: false,
            message: "Unauthorized User"
        })
    }


    next();

}
module.exports = CheckUserMiddleWare;