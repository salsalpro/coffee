const mongoose = require('mongoose')
require('./Product')
require('./User')


const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 5,
    },
    isAccept: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: () => Date.now(),
        immutable: false
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required:true
    },
    wroter: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required:true
    }
})

export default mongoose.models.Comment || mongoose.model('Comment', Schema)