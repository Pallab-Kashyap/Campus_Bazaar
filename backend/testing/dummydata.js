const product = require("../testing")
const connectDB = require("../config/db.js");
const {product_model } = require("../models/product.js");


const start = async()=>{
    try{
        connectDB()
        await product_model.deleteMany()
        await product_model.create(product)
        console.log('Success!!!!')
        process.exit(0)
    }catch(err){
        console.log({"error":err})
        process.exit(1)
    }
}

start()