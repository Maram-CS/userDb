import {Router} from "express";
import {addUser,getAll,getAuser,updateUser,deleteUser,loginUser} from "../Controller/userController.js";

const User = Router();

User.get("/",getAll);
User.get("/:id",getAuser);
User.post("/",addUser);
User.put("/:id",updateUser);
User.delete("/:id",deleteUser);
User.post("/login",loginUser);

export default User;