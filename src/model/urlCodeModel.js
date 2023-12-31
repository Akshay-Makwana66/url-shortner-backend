const mongoose = require('mongoose');

const urlCodeModelSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    longUrl: {  
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    }

}, { timestamps: true });

module.exports = mongoose.model('urlCode', urlCodeModelSchema)   