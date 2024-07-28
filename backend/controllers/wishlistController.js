// controllers/wishlistController.js
const Wishlist = require('../models/wishlistModel');

exports.addToWishlist = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user._id;

    try {
        const existingWishlistItem = await Wishlist.findOne({ userId, productId });

        if (existingWishlistItem) {
            return res.status(400).json({ message: 'Product is already in the wishlist' });
        }

        const wishlistItem = new Wishlist({
            userId,
            productId
        });

        await wishlistItem.save();
        res.status(201).json({ message: 'Product added to wishlist', wishlistItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};
exports.removeFromWishlist =async (req,res)=>{
    try {
        const {productId}= req.body;
        const userId= req.user._Id;
        const wishlistItem = await Wishlist.findOneAndDelete({ productId }); //findOne
        
            return res.status(400).json({ message: 'Product is removed', deletedProduct: wishlistItem });
            
        } catch(error){
            console.error(error);
            res.status(500).json({message:'server error',error});
        }
        // \end{code} 
    };
    exports.getWishlist = async (req, res) => {
        try {
            const userId = req.user._id;
            const wishlist = await Wishlist.find({ "userId": userId });
            if (!wishlist) {
                return res.status(404).json({ message: 'Wishlist not found' });
            }
            res.status(200).json(wishlist);
        } catch (error) {
            
            res.status(500).json({ message: 'Server error', error });
        }
    };
    
