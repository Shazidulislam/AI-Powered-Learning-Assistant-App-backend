import mongoose from "mongoose";

const chatHistorySchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    documentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Document",
        required:true,
    },
    message:[{
        role:{
            type:String,
            enum:["user" , "assistent"],
        },
        content:{
            type:String,
            required:true,
        },
        timestamp:{
            type:Date,
            default:Date.now
        },
        relevantChunk:{
            type:[Number],
            default:[],
        }
    }],
},{
    timestamps:true
});

chatHistorySchema.index({userId:1 , documentId:1})

const ChatHistory = mongoose.model("ChatHistory" , chatHistorySchema);

export default ChatHistory;