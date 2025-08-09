import userConfiguration from "../Configuration/userConfig.js";
import modelUser from "../Model/userModel.js";
import userModel from "../Model/userModel.js";
import {config} from "dotenv";
config();
userConfiguration(process.env.NAME_DB || "USER_DB");

const addUser = async (req,res,next) => {
    try {
        const user = new userModel(req.body);
        const newUser = await user.save();
        if(newUser) {
            res.status(200).json(newUser);
        }else {
            res.status(404).json("you have an error somewhere");
        }
        next();
    }catch(err) {
        console.error(err);
    }
}

const getAll = async(req,res,next) => {
    try{
        const wantedUser = await modelUser.find({});
        if(wantedUser){
            res.status(200).json(wantedUser);
        }else{
            res.status(404).json("you have an error somewhere");
        }
        next();
    }  
    catch(err) {
       console.error(err); 
}
}

const getAuser = async(req,res,next) => {

     try{
        const wantedUser = await modelUser.findById(req.params.id);
        if(wantedUser){
            res.status(200).json(wantedUser);
        }else{
            res.status(404).json("you have an error somewhere");
        }
        next();
    }  
    catch(err) {
       console.error(err); 
}

}

const updateUser = async(req,res,next) => {

    try{
        const newUser = await modelUser.findByIdAndUpdate(req.params.id,req.body);
        if(newUser){
            res.status(200).json(newUser);
        }else{
            res.status(404).json("you have an error somewhere");
        }
        next();
    }  
    catch(err) {
       console.error(err); 
}
}

const deleteUser = async (req,res,next) => {
    try {
        const deletedUser = await modelUser.findByIdAndDelete(req.params.id);
        if(deleteUser) {
            res.status(200).json(deleteUser);
        }else{
            res.setHeader("Content-Type","text/html");
            res.writeHead(404);
            res.send("<h2>error</h2>");
        }
    }catch(err){
        console.error(err);
    }
}

export {addUser,getAll,getAuser,updateUser,deleteUser};



