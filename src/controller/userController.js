const Register = require("../models/registers");

const getData = async(req,res)=>{

        try {
            
            const registersUser = new Register({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                area_code: req.body.area_code,
                phone: req.body.phone,
             }) 
    
            const registered = await registersUser.save();
            console.log('Data Inserted Successfully');
             res.status(200).render("index");
            
            
         } catch (error) {
            res.status(400).send(error);
            console.log(error);
        }
    
}

module.exports = {getData};