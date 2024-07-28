const { UserModel } = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const  transporter  = require("../config/emailConfig.js");
const nodemailer = require('nodemailer')

async function createUser(req, res) {
  const { name, email, password, college, year, course } = req.body;

  if (name && email && password) {
    const user = await UserModel.find({ email: email });
    if (user.length > 0) {
      res.send({ status: "failed", error: "user already exists" });
    } else {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await UserModel.create({
          userName: name,
          email: email,
          password: hashPassword,
          college: college,
          year: year,
          course: course,
        });

        if (user) {
          const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "7d" }
          );

          user.password = undefined;

          res.send({
            status: "success",
            message: "User registered",
            user: user,
            token: token,
          });
        }
      } catch (error) {
        res.send({ status: "failed", message: "Failed to register" });
      }
    }
  } else {
    res.send({ status: "failed", message: "All fields required" });
  }
}


async function loginUser(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
  if (email && password) {
    try {
      const user = await UserModel.findOne({ email: email });
      console.log(user);
      if (user) {
        isMatch = bcrypt.compare(password, user.password);
        console.log(isMatch);
        if (isMatch) {
          const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "7d" }
          );
          user.password = undefined;
          
          res.send({
            status: "success",
            message: "User LogedIn",
            user: user,
            token: token,
          });
        } else {
          console.log(isMatch);
          res.send({ status: "failed", message: "wrong email or password" });
        }
      } else {
        console.log("no user");
        res.send({ status: "failed", message: "User not found" });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.send({ status: "failed", message: "All fields required" });
  }
}


const updateUserPassword = async (req, res) => {
  const { password } = req.body;

  if (password) {
    try {
      const salt = await bcrypt.genSalt(10);

      const hashPassword = await bcrypt.hash(password, salt);

      const user = await UserModel.findByIdAndUpdate(req.user._id, {
        $set: {
          password: hashPassword,
        },
      }).select("-password");

      res.send({
        status: "success",
        message: "password changed",
        user: user,
      });
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Failed to change password" });
    }
  } else {
    res.send({ status: "failed", message: "All fields required" });
  }
};


const forgotPassword = async (req, res) => {
  const { email } = req.body
  console.log('got req1');
  if(email){
  try{
    const user = await UserModel.findOne({email})
    if(user){
      const secret = user._id + process.env.JWT_SECRET_KEY
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "15m"})
      const link = `http://localhost:5173/resetPassword/${user._id}/${token}` 

      
       const info = await transporter.sendMail({
        from: {
          name: 'campus bazaar',
          address: process.env.EMAIL_USER
        },
        to: 'pallabkshyp@gmail.com',
        subject: 'reset password',
        text: 'link to reset your password',
        html: `<a href=${link}>click here</a> to reset password`
      })
      res.send({status: 'succes', message: 'email is send to reset password', info: info})
      console.log('sent res');
    }
    else{
      res.send({status: "failed", message: "incorrect email"})
    }

  }catch(error){
    console.log(error);
  }
}else{
  res.send({status: "failed", message: "email is required"})
}
}


const resetPassword = async (req, res) => {
  const {userId, token} = req.params
  const {password} = req.body
  console.log(userId, token);
  try{
    const user = await UserModel.findById(userId);
    if(user){
    const secret = user._id + process.env.JWT_SECRET_KEY
    jwt.verify(token, secret)
    if(password){
      const salt = await bcrypt.genSalt(10);

      const hashPassword = await bcrypt.hash(password, salt);

      const newData = await UserModel.findByIdAndUpdate(user._id, {
        $set: {
          password: hashPassword,
        },
      }).select("-password");

      res.send({
        status: "success",
        message: "password changed",
        user: newData,
      });
    }
    else{
      res.send({status: "failed", message: "password is required"})
    }
  }
  else{
    res.send({status: "failed", message: "email doesn't exist"})
  }

  }catch(error){
    console.log(error);
    res.send({status: "failed", message: "failed to update password"})
  }
}

module.exports = {
  createUser,
  loginUser,
  updateUserPassword,
  forgotPassword,
  resetPassword
};
