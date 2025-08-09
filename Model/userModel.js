import {Schema,model} from 'mongoose';

const UserDB = new Schema({
    email:{
        type: String,
        required: true,
    },
    password: {
        type : Number,
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
    timestamp : true,
}
)

const modelUser  = model ("modelUser",UserDB);
export default modelUser;
