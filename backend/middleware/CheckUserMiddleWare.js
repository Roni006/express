const jwt = require('jsonwebtoken')
const CheckUserMiddleWare = (req, res, next) => {
    console.log(req.cookies);

    let token = req.cookies.token;
    if (!token) {
        return res.status(401).send({
            success: false,
            message: "Unauthorized User"
        })
    }

    jwt.verify(token, process.env.JWR_KEY, function (err, decoded) {
        if (err) {
            return res.status(401).send({
                success: false,
                message: 'Unathorizeed User'
            });
        }
        if (decoded) {
            req.user = decoded;
            next();
        } else {
            return res.status(401).send({
                success: false,
                message: 'Unathorizeed User'
            });
        }
        // console.log(decoded);

    });

}
module.exports = CheckUserMiddleWare;