const express = require("express");
const app = express();
const hbs = require("hbs");
const { userInfo } = require("os");
const path = require("path");
const crud = require('./route/routes');


const connectDB = require("./db/connect");
const Register = require("./models/registers");
require('dotenv').config()

const static_path = path.join(__dirname,"../public");
const partial_path = path.join(__dirname,"../templates/partials");
const template_path = path.join(__dirname,"../templates/views");

//console.log(path.join(__dirname,"../public"))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

//get a new user
app.use('/register',crud);

app.get('/',(req,res)=>{
    res.render("index");
})






const port = 5000;
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Listening in ${port}`))
    }catch(error){
        console.log(error);
    }
}

start()