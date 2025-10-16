const multer = require("multer");
// const { v4: uuidv4 } = require('uuid');
// const { v4: uuidv4 } = require('uuid');
const { v4: uuidv4 } = require('uuid');
// const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, path.join(__dirname + "./upload"))
        cb(null, "./upload")
    },
    filename: function (req, file, cb) {
        const fileName = uuidv4() + file.originalname;
        // const fileName = file.originalname;
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage });

module.exports = upload