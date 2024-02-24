import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
    urlID:{
        type: String,
        required: true,
    },
    originalURL:{
        type: String,
        required: true,
    },
    info: [
        {
            timeStamp: {
                type: String,
                // required: true,
            }
        },
    
    ]
},
{
    timestamps: true,
}
);

const URL = mongoose.model("URL", URLSchema);

export { URL };