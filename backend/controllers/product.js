const {product_model} = require("../models/product")
const { UserModel } = require("../models/userModel.js");
const asyncWrapper = require("../middleware/async")

// ADD filters in it 
// const get_all_products = async(req,res)=>{
//     const{product_name} = req.query
//     const query_object ={}
//     const userCollege = req.user.college;
//     try{
//     if(college){
//         query_object.college =userCollege ;
//     }

//     if(product_name){
//         query_object.product_name = {$regex:product_name , $options: 'i'}
//     }
//     const Product = await product_model.find(query_object)
//     res.status(200).json({ Product });}
//     catch(err){
//         return res.status(500).json({"err":"some error occured"});
//     }
// }




const  add_product=async(req,res)=>{
    try{
        // const {product_name , product_prize , product_desc , seller_id , college} = req.body
        const {product_name , product_prize ,seller_id } = req.body
        if(!product_name || !product_prize || !seller_id){
            return res.status(401).json({"message":"Field cant be empty"})
        }
        const Product = await product_model.create(req.body)
         res.status(201).send({res: Product})
    }catch(err){
        console.log("there was a error")
        res.send({res: false})
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
    try {
        console.log('Received request to delete product with ID:', req.params.id);
        const { id: taskID } = req.params;
        const Product = await product_model.findOneAndDelete({ _id: taskID });
        
        if (!Product) {
            console.log('Product not found:', taskID);
            return res.status(404).json({ mes: "Product is not available" });
        }
        console.log('Product deleted successfully:', taskID);
        return res.status(200).json({ mes: 'Product deleted successfully' });
    } catch (err) {
        console.error('Error deleting product:', err);
        return res.status(500).json({ err });
    }
}

const get_all_products = async(req,res)=>{

    try{
     const Product = await product_model.find({})
    res.status(200).json( Product );
}
    catch(err){
        console.log(err);
        return res.status(500).json({"err":"some error occured"});
    }
}


module.exports ={
    get_all_products,
    add_product,
    get_one_product,
    update_product,
    delete_product
}
