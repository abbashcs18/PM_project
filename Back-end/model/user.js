const mongoose=require("mongoose")  
const UserSchema= new mongoose.Schema(
    {
        pID:{

            type:Number,
            required:true,
        },
        cID:{
          
            type:Number,
            required:true,
        },

        cName:{

            type:String,
            required:true,
        },

        bName:{

            type:String,
            required:true,
        },

        domain:{

            type:String,
            required:true,
        },

        tOfD:{
            type:String,
            required:true,
        },

        score:{
            type:String,
            required:true,
        }
    }
);

const UserModel=mongoose.model("user",UserSchema)
module.exports=UserModel;