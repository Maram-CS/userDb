import {connect} from "mongoose";

const userConfiguration = async (database) => {
    try{
          await connect(`mongodb://localhost:27017/${database}`);
          console.log(`database is working as ${database}`);
    }catch(err){
        console.error(err);
    }

}
 export default userConfiguration;