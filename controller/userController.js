
const User = require("../models/user")

const signin = (req,res) => {

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