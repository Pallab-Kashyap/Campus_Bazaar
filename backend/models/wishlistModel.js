// models/wishlistModel.js
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    email: {
        type: String,
        ref: 'User',
        required: true
    },
    productId: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Product',
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
