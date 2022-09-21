const register = require('../model/SignUpSchema');
const crypt = require('bcrypt');
const valid1 = require('../validator/validateRegs');
const tullu = require('twilio')('AC6575cee25785e0de60dbf388a7c8a0bc','6dfecf7ebadc209a0f92092128a5a958')
const Register = async(req,res)=>{
    try{
        let v = await valid1.validateAsync(req.body);
        if(v){
            let user = new register(req.body);
            let saltData = await crypt.genSalt(10);
            user.password = await crypt.hash(user.password, saltData);
            let NewUser = await user.save();
            res.status(201).json({
                success:true,
                data :{
                    name:NewUser.name,
                    size: NewUser.email,
                }
                
            });
            
            sendmessage=()=>{

                tullu.messages.create({
                    body: 'Hey there you have successfully registered on Navbar.... Happy Shopping',
                    to: '+918958437307',
                    from: '+17432000078'
                 }).then(message => console.log(message))
                   // here you can implement your fallback code
                   .catch(error => console.log(error))
                }
    
                sendmessage();
        }

    }catch(e){
        console.log(e)
    }
   

};
module.exports = {Register};