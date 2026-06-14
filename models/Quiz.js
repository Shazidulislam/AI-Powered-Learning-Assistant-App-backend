import mongoose  from "mongoose";

const quizSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    documentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Documnet",
        required:true,
    },
    title:{
        type:String,
        required:true,
        trim:true,
    },
    questions:[{
        question:{
            type:String,
            required:true,
        },
        option:{
            type:[String],
            required:true,
            validate:[array => array.length === 4, "Must have exactly 4 option" ]
        },
        correctAnswer:{
            type:String,
            required:true,
        },
        explanation:{
            type:String,
            default:""
        },
        difficulty:{
            type:String,
            enum:["easy" , "medium" , "hard"],
            default:"medium"
        }
    }],
    userAnswer:[{
        questionIndex:{
            type:Number,
            required:true,
        },
        selectedAnswer:{
          type:String,
          required:true,
        },
        isCorrect:{
            type:Boolean,
            required:ture,
        },
        answereAt:{
            type:Date,
            default:Date.now
        },
    }],
    Score:{
        type:Number,
        default:0,
    },
    totalQuestions:{
        type:Number,
        required:true,
    },
    completedAt:{
        type:Date,
        default:null
    }

},{
    timestamps:true // // This enables automatic createdAt & updatedAt fields

})

//Index for faster queries
quizSchema.index({userId:1 , documentId:1}) //// Creates a compound index on userId and documentId to speed up queries filtering by both fields


const Quiz = mongoose.model("Quiz" , quizSchema);
export default Quiz;