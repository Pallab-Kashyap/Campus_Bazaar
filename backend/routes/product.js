const express = require("express")
const auth = require("../middleware/authMiddleware")
const router = express.Router();
const{
    get_all_products,
    add_product,
    get_one_product,
    update_product,
    delete_product} = require('../controllers/product')


router.route("/").get(get_all_products).post(auth,add_product)
router.route("/:id").get(auth,get_one_product) .patch(auth,update_product).delete(auth,delete_product)

module.exports = router