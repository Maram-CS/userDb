import {Schema,model} from 'mongoose';
import bcrypt from "bcrypt";

const UserDB = new Schema({
    email:{
        type: String,
        required: true,
    },
    password: {
        type : String,
        required : true,
    },
    userName : {
        type : String,
        required : true,
    },
    Role: {
        type : String,
        required  :true,
        default : "user",
    }
},
{
    timestamps: true,
}
)

UserDB.pre("save",function(next) {
    const User = this;
    if(!User.isModified("password")) return next();
    bcrypt.genSalt(9,(err,salt) => {
        if(err) return next();
        bcrypt.hash(User.password,salt,(err,hash)=>{
             if(err) return next();
            User.password = hash;
            next();
        })
    })
})

UserDB.statics.login = async function(email,password) {
    const user = await this.findOne({email})
    
    if(user){
        const isAuth = await bcrypt.compare(password,user.password);
        if(isAuth){
            return user;
        }
    }
    throw Error("WRONG PASSWORD");
} 










const modelUser  = model ("modelUser",UserDB);
export default modelUser;
