const express = require('express');
const { addToWishlist, getWishlist, removeFromWishlist } = require('../controllers/wishlistController');
// const {addToWishlist,removeFromWishlist}=
// require('../controllers/wishlistController');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, wishlistController.addToWishlist);
router.delete('/',authMiddleware,removeFromWishlist);
router.get('/', authMiddleware, getWishlist);

module.exports = router;