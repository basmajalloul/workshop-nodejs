
const User = require("../models/user")
const bcrypt = require("bcrypt")
const signin = async (req,res) => {
    try {

        let {email,password} = req.body
        if(!email || !password) return res.status(404).send({success:false,message:"all fields are required"})

        let user = await User.findOne({email})

        if(!user) return res.status(404).send({success:false, message: "account doesn't exist"})

        let isCorrectPassword = await bcrypt.compare(password,user.password)

        // CHECK JWT

        if(isCorrectPassword) {
            return res.status(200).send({success: true, user})
        }
        else {
            return res.status(404).send({success:false, message:"Please verify credentials"})
        }


    } catch(err){

        res.stauts(404).send({success:false, message: err})

    }
}

const register = async (req,res) => {

    try {

        console.log(req.body)

        let {email, password, firstname, lastname} = req.body

        const user = await User.findOne({email})

        if(user) return res.status(404).send({
            success:false,
            message:"user already exists"
        })

        const newUser = new User ({email,password,firstname,lastname})

        const createdUser = await newUser.save()

        return res.staus(201).send({success:true,message:"Account created successfully", user: createdUser})

    } catch(err) {

        res.status(404).send({
            success:false, 
            message : err
        })

    }
}

module.exports = {register,signin}