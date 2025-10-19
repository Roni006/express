const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://wii:wiiniet@cluster0.r7g4m.mongodb.net/wii");
            console.log("database connected");
            
    } catch (error) {
        console.log(error);

    }
}

module.exports = connectDb;