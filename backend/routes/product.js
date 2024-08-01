const express = require("express")
const auth = require("../middleware/authMiddleware")
const {upload} = require("../middleware/multer")

const router = express.Router();
const{
    get_all_products,
    add_product,
    addProductWithImage,
    get_one_product,
    update_product,
    delete_product,
    upload_image
} = require('../controllers/product')


router.route("/").get(auth, get_all_products).post(auth,upload.single("image"),addProductWithImage)
router.route("/:id").get(get_one_product) .patch(auth,upload.single("image"),update_product).delete(auth,delete_product)
// router.route("/upload/:id").post(auth,upload,upload_image)

module.exports = router