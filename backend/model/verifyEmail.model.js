const { default: mongoose } = require('mongoose');

const verifyEmailSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        token: {
            type: Number,
        },

        expireAt: {
            type: Date,
            default:  Date.now,
            expire: 3600,
        }

    }, {
    timestamps: true,

});

module.exports = mongoose.model("VerifyEmail", verifyEmailSchema);

