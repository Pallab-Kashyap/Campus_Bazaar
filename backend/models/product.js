// TODO:
// CHECK IF COLLEGE IS REQIRED OR NOT 
// ADD DATE WHEN ADDEDD 
// ADD SCHEMA FOR IMAGE 

const mongoose = require("mongoose");

const product_schema = mongoose.Schema({
    product_name:{
        type: String,
        trim: true,
        required: true,
    } ,
    product_prize:{
        type: Number,
        required: true,
    },
    product_desc:{
        type: String,
        required: false,
    },
    seller_id:{
        type: String,
        required: true,
    },
    college:{
        type: String,
        // not sure take a look at it first 
        reqired:true,
    }

})

const product_model = mongoose.model("product",product_schema );

module.exports = {
    product_model
};        