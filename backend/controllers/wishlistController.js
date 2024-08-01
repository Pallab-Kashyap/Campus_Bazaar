// controllers/wishlistController.js
const { product_model } = require('../models/product');
const Wishlist = require('../models/wishlistModel');

exports.addToWishlist = async (req, res) => {
    const { productId } = req.body;
    const email = req.user.email;

    try {
        const existingWishlistItem = await Wishlist.findOne({ email, productId });

        if (existingWishlistItem) {
            return res.status(400).json({ message: 'Product is already in the wishlist' });
        }

        const wishlistItem = new Wishlist({
            email,
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
        const email= req.user.email;
        const wishlistItem = await Wishlist.findOneAndDelete({ email, productId }); //findOne
        
            return res.status(200).json({status: 'success', message: 'Product is removed', deletedProduct: wishlistItem });
            
        } catch(error){
            console.error(error);
            res.status(500).json({message:'server error',error});
        }
        // \end{code} 
    };
    exports.getWishlist = async (req, res) => {
        try {
            const email = req.user.email;
            const wishlist = await Wishlist.find({ "email": email });
            if (!wishlist) {
                return res.status(404).json({status: 'failed', message: 'Wishlist not found' });
            }

            const productIds = wishlist.map(item => item.productId)
            const products = await product_model.find({ _id: { $in: productIds } }).lean();
            res.status(200).json(products);
        } catch (error) {
            
            res.status(500).json({ message: 'Server error', error });
        }
    };
    
