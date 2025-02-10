const mongoose = require('mongoose')
require('./Product')
require('./User')

const Schema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    }
}, {
    timestamps: true,
})


export default mongoose.models.Wishlist || mongoose.model('Wishlist', Schema)