const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const checkUserAuth = require('./middleware/authMiddleware.js')
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const cookieParser = require('cookie-parser')
const dotevn = require('dotenv');
const connectDB = require("./config/db.js");
const product = require('./routes/product')
dotevn.config()

connectDB()

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your client's origin
    credentials: true
}));

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// app.use(express.urlencoded({ extended : false }));
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/products' , product)

app.use('/api/wishlist', require('./routes/wishlisRoutes.js'));

app.use("/api/auth", authRouter);

app.use('/api/profile', userRouter);


//imp doc 
// checkUserAuth from middlewere checks user and returns user 
//but in order to use that you need to provide token in postman auth section. how to do that ?? - (watch the latest vdo link in whatsapp)
//to get token use url "http://localhost:3000/auth/signin" and add {name: "", email: "", password: ""} in postman body-raw-json format
//u will get token in postman response
//when you want to use that token while sending req u can do that by (watch the latest vdo link in whatsapp)
//create a users collection in your DB

//how you will use user details??
//( when u use checkUserAuth )
//u will get user data from req.user
//example: {email, userName} = req.user

//for any query feel free to contact


const port = process.env.PORT
app.listen(port, () => console.log("server started"));
