import user from "../models/userModels.js";
import bcrypt from "bcrypt";


export const registerUser = async (req , res)=>{
    try{
        const {name  , email , password} = req.body;

        const existingUser= await user.findOne({email});
        if(existingUser){
            return res.json({message : "email already Exists"})
        }

        const hashedPassword = await bcrypt.hash(password  , 10);

        const newUser = new user({
            name,
            email,
            password : hashedPassword
        });

        await newUser.save();
        res.json({ message: "User registered successfully", user: newUser });
    }
    catch(error){
        console.error("Error in registerUser:", error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

export const loginUser = async (req , res)=>{
   try{
     const {email , password} = req.body;

     const existingUser = await user.findOne({email});
        if(!existingUser){
            return res.json({message : "User not found. Please register first."})
        }
        const isPasswordValid = await bcrypt.compare(password , existingUser.password);
        if(!isPasswordValid){
            return res.json({message : "Invalid Credentials"});
        }
        res.json({message : "Login Successful" , user : existingUser});
   }
   catch(error){
    console.error("Error in loginUser:", error);
    res.status(500).json({message : "Internal Server Error"});
   }


}