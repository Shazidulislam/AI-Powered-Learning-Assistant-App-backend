import jwt from "jsonwebtoken";
import User from "../models/User.js"
    
//generate jwt token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET , {
        expiresIn : process.env.JWT_SECRET || "7d",
    });
};

// @desc Register new user 
//@route POST /api/auth/register
//@access public

export const register = async (req , res , next)=>{
    try{}
    catch(error){
     next(error)
    } 
}

//@dese Login User
// @Route POST / api / auth / login
// @access public
export const login = async(req , res , next)=>{
  try{}
  catch(err){
    next(err)
  }
}

// @dase  Get user profile
// @route GET / api / auth / profile
// @access privite
export const getProfile =async(req , res , next)=>{
    try{}
    catch(error){
      console.log(error)
      next(error)
    }
}

// @dase Update user rofile
// @route PUT/ api / auth
// @access privite
export const updateProfile = async(req , res ,next)=>{

}

// @dase Change password
// @route PUT / api / auth
// @access privite
export const changePassword =async(req , res , next)=>{
    try{}
    catch(error){
       next(error)
       console.log(error)
    }
}
