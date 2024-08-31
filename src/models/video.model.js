import mongoose, {Schema} from "mongoose";
const videoSchema = new Schema({
    videoFile:{
        type: String, //cloudinary url
        required: true
    },
    thumbnail:{
        type: String, //cloudinary url
        required: true
    },
    title:{
        type: urlencoded,
        required: true
    },
    duration:{
        type: Number,
        required: true
    }, 
    views:{
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: 0
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
})
export const Video = mongoose.model("Video", videoSchema)
