import User from "./Router/userRouter.js";
import express from "express";
import {config} from "dotenv";

config();
const Port = process.env.PORT || "1001";

const App = express();
App.use(express.json());
App.use(express.urlencoded({extended : true}));
App.use("/api/User/",User);


App.listen (Port,()=>{
    console.log(`listning on Port :${Port}`);
})