const get_all_products = (req,res)=>{
    return res.json({"status":"success"})
}

const  add_product=(req,res)=>{
    return res.json({"status":"sucess"})
}

const get_one_product = (req,res)=>{
    const { id: taskID } = req.params
    console.log(taskID)
    return res.json({id:taskID})
}
const update_product = (req,res)=>{
    return res.json({"status":"success"})
}
const delete_product = (req,res)=>{
    return res.json({"status":"success"})
}



module.exports ={
    get_all_products,
    add_product,
    get_one_product,
    update_product,
    delete_product
}