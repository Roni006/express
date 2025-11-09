const fs = require('fs');
const path = require('path');
const multer = require("multer")
const generateToken = require('../utils/token');
const createUploadMiddleware = ({ type }) => {
    let allowedTypes = [];
    let maxSize = 0;
    let folderName = "";


    if (type === "profile") {
        allowedTypes = ["image/jpeg", "image/png", "image/gig", "image/webp"];
        maxSize = 5 * 1024 * 1024; //5 MB
        folderName = "profile";
    } else if (type === "category") {
        allowedTypes = ["image/jpeg", "image/png", "image/gig", "image/webp"];
        maxSize = 5 * 1024 * 1024; // 5 MB
        folderName = "category";
    } else if (type === "product") {
        allowedTypes = ["image/jpeg", "image/png", "image/gig", "image/webp"];
        maxSize = 5 * 1024 * 1024; // 5 MB
        folderName = "product";
    } else {
        throw new Error("Invalid upload type. Must be 'image'")
    }

    // Storage configuration 
    const storage = multer.diskStorage({
        destination: function (req, file, cd) {
            const uploadPath = `./uploads/${folderName}`;
            fs.mkdirSync(uploadPath, { recursive: true });
            cd(null, uploadPath); 
        },
        filename: function (req, file, cb) {
            const ext = path.extname(file.originalname);
            const uniqueSuffix = Date.now() + "-" + generateToken();
            cb(null, uniqueSuffix + ext)
        }
    });

    return multer({
        storage,
        limits: { fileSize: maxSize },
    })

};


module.exports = createUploadMiddleware;





// const multer = require("multer");
// // const { v4: uuidv4 } = require('uuid');
// // const { v4: uuidv4 } = require('uuid');
// const { v4: uuidv4 } = require('uuid');
// const generateToken = require('../utils/token');
// // const path = require('path')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         // cb(null, path.join(__dirname + "./upload"))
//         cb(null, "./upload")
//     },
//     filename: function (req, file, cb) {
//         const fileName = uuidv4() + file.originalname;
//         // const fileName = file.originalname;
//         cb(null, fileName)
//     }
// })

// const upload = multer({ storage: storage });

// module.exports = upload