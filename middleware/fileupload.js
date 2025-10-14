const multer = require("multer");
// const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, path.join(__dirname + "./uploadd"))
        cb(null, "./upload")
    },
    filename: function (req, file, cb) {
        // const fileName = uuidv4() + file.originalname;
        const fileName = file.originalname;
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage });

module.exports = upload