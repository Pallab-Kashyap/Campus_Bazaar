const {product_model} = require("../models/product")

const path = require("path")

// ADD filters in it 
const get_all_products = async(req,res)=>{
    const{product_name} = req.query
    const query_object ={}
    const user = req.user;
    try{
        if(user){
            const { college: userCollege } = user;
            if (userCollege) {
                query_object.college = userCollege;
            }
        }
        if(product_name){
            query_object.product_name = {$regex:product_name , $options: 'i'}
        }
        const Product = await product_model.find(query_object)
        res.status(200).json({ Product });
    }
    catch(err){
        return res.status(500).json({"err":"some error occured"});
    }
}

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

//WARNING := please dont touch 
const addProductWithImage = async (req, res) => {
    try {
        const { product_name, product_prize, product_desc, seller_id, college } = req.body;

        if (!product_name || !product_prize || !seller_id || !college ) {
            return res.status(401).json({ "message": "Field can't be empty" });
        }
        
        if (req.file) {
            productImage = req.file.filename; 
            filePath = path.join(__dirname, '../uploads/', productImage);
        }

        // Create the product first
        const productData = {
            product_name,
            product_prize,
            product_desc,
            seller_id,
            college,
            image: filePath,
        };


        console.log(productData.product_name) 
        const newProduct = await product_model.create(productData);
        res.status(201).json(newProduct)


        // console.log("req file == ",req.file);
        // // If there's an image file, upload it
        // if (req.file) {
        //     const productImage = req.file.filename;
        //     console.log(req.file.filename)
        //     const filePath = path.join(__dirname, '../uploads/', productImage);
        //     console.log(filePath)

        //     const data = await uploadOnCloudinary(filePath, "productImage");

        //     // Update the product with the image URL
        //     await product_model.updateOne(
        //         { _id: newProduct._id },
        //         { $set: { image: data.url  } }
        //     );
            // console.log(req.body._id)
            // console.log(req.body.image)

        //     newProduct.image = data.url; // add the image URL to the response
        // }

        // res.status(201).json(newProduct);
    } catch (err) {
        console.error("There was an error", err);
        res.status(500).json({ msg: "Error", error: err.message });
    }
};

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
        console.log(taskID)
        let updateData = {};
        const { product_name, product_prize, product_desc, seller_id, college } = req.body;
        if(product_name){
            updateData.product_name = product_name;
        }
        if(product_prize){
            updateData.product_prize = product_prize;
        }
        if(product_desc){
            updateData.product_desc = product_desc;
        }
        if(college){
            updateData.college = college;
        }
        console.log(req.file);
        if(req.file){
            productImage = req.file.filename; 
            console.log(productImage);
            filePath = path.join(__dirname, '../uploads/', productImage);
            console.log(filePath);
            updateData.image = filePath
            console.log(updateData.image);
        }
        console.log(updateData)
        // if (req.file) {
        // }
        
        // const Product = await product_model.findByIdAndUpdate({_id : taskID},req.body,{
        //     new:true,
        //     runValidators: true,
        // })
        const Product = await product_model.findByIdAndUpdate({_id : taskID},updateData,{
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

// const get_all_products = async(req,res)=>{

//     try{
//      const Product = await product_model.find({})
//     res.status(200).json( Product );
// }
//     catch(err){
//         console.log(err);
//         return res.status(500).json({"err":"some error occured"});
//     }
// }

module.exports ={
    get_all_products,
    add_product,
    addProductWithImage,
    get_one_product,
    update_product,
    delete_product
}
