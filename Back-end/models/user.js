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

        Aptitude_round_statues:{
            type:String,
            required:true,
        },
        Tech_written_statues:{
            type:String,
            required:true,
            },
            
        Tech_interview:{
            type:String,
            required:true,
        },
        HR_interview_statues:{
            type:String,
            required:true,
        },
        Job_role:{
            type:String,
            required:true,
        },
    }
);

const UserModel=mongoose.model("user",UserSchema)
module.exports=UserModel;