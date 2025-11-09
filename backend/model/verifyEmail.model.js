// const { default: mongoose } = require('mongoose'); 

const { default: mongoose } = require("mongoose");


const verifyEmailModel = new mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        token: {
            type: Number,
        },
        expiresAt: {
            type: Date,
            default: Date.now,
            expires: 3600,
        }
    },{
        timestamps: true,
    }
)

module.exports = mongoose.model('verifyModel', verifyEmailModel)

