const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { loginHandle, signUpHandle } = require("./middleware");
const userRouter = require("./routes/user.js");
const cookieParser = require('cookie-parser')


const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(cookieParser());
app.use((req,res,next) => {
    console.log(req.body);
    next();
})

app.post("/", signUpHandle, userRouter);

app.post("/login", loginHandle, userRouter);

app.listen(3000, () => console.log("server started"));
