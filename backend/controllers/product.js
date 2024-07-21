const {product_model} = require("../models/product")
const asyncWrapper = require("../middleware/async")

// ADD filters in it 
const get_all_products = async(req,res)=>{
    const products = await product_model.find({})
    return res.status(200).json(products)
}

const  add_product=async(req,res)=>{
    try{
        const {product_name , product_prize , product_desc , seller_id , college} = req.body
        if(!product_name || !product_prize || !seller_id || !college){
            return res.status(401).json({"message":"Field cant be empty"})
        }
        const Product = await product_model.create(req.body)
         res.status(201).json(Product)
    }catch(err){
        console.log("there was a error")
    }
}

const get_one_product = async(req,res)=>{
    try{
        const { id: taskID } = req.params
        const Product = await product_model.find({_id:taskID})
        if(!Product){
            return res.status(404).json({"msg":"product not found"})
        }
        return res.status(200).json({Product})
    }catch(err){
        return res.status(500).json({"err":"some error occured"});
    }
}
const update_product = async(req,res)=>{
    try{
        const { id : taskID} = req.params
        const Product = await product_model.findByIdAndUpdate({_id : taskID},req.body,{
            new:true,
            runValidators: true,
        })
        if(!Product){
            return res.status(404).json({"msg":"product not found"})
        }
        return res.status(200).json({Product})
        
    }catch(err){
        console.log(err)
        return res.status(500).json({err});
        
    }
}
const delete_product = async(req,res)=>{
    try{
        const {id:taskID} = req.params;
        // const Product = await product_model.findByIdAndDelete({_id:taskID})
        const Product = await product_model.deleteMany({product_name:"door mat"})
        if(!Product){
            return res.status(404).json({mes:"product is not avilable"})
        }
        return res.json(200).json({mes: 'Product deleted successfully' })
    }catch(err){
        console.log(err)
        return res.status(500).json({err});

    }
}



module.exports ={
    get_all_products,
    add_product,
    get_one_product,
    update_product,
    delete_product
}