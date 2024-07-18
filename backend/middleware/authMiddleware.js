const { UserModel } = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

const checkUserAuth = async(req, res, next) => {
    const {authorization} = req.headers;
    if( authorization && authorization.startsWith('Bearer')){
        try{
            let token = authorization.split(' ')[1];

            const { userId }  = jwt.verify(token, process.env.JWT_SECRET_KEY)

             req.user = await UserModel.findById(userId).select('-password')

            next()
        }
        catch(error){
            res.send({status: 'failed', message: 'not a valid user'})
        }
    }
    else{
        res.send({status: 'failed', message: 'no token'})
    }
}

module.exports = checkUserAuth;