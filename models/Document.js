
import mongoose from "mongoose";
const documentSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:string,
        required:[true ,"Plase provide a document title"],
        trim:true,
    },
    fileName:{
        type:String,
        require:true,
    },
    filePath:{
        type:String,
        required:true,
    },
    fileSize:{
        type:String,
        required:true,
    },
    extractedText:{
        type:String,
        default:"",
    },
    chunks:[{
        content:{
            type:String,
            required:true
        },
        pageNumber:{
            type:Number,
            required:true
        },
        chunkIndex:{
            type:Number,
            required:true
        }
    }],
    uploadDate:{
        type:Date,
        default:Date.now
    },
    lastAccess:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:["processing" , "ready" , "faild"],
        default:"processing"
    }
},{
    timestamps:true
})

// userId দিয়ে filter এবং uploadDate দিয়ে latest-first order এ দ্রুত query করার জন্য compound index তৈরি করা হয়েছে
documentSchema.index({userId:1 ,uploadDate:-1 })

const Document = mongoose.model("Document" , documentSchema)

export default Document;