const CheckUserMiddleWare = (req, res, next) => {
    console.log(req.headers);

    if (!req.headers.authorization) {
        return res.status(401).send({
            success: false,
            message: "Unauthorized User"
        })
    }

    console.log('Middle ware is running...');
    next();

}
module.exports = CheckUserMiddleWare;