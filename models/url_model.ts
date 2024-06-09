import mongoose, { Document, Model } from "mongoose";

interface URLInfo {
    timeStamp: string;
}

interface URLDocument extends Document {
    urlID: string;
    originalURL: string;
    info: URLInfo[];
}

interface URLModel extends Model<URLDocument> {}

const URLSchema = new mongoose.Schema<URLDocument, URLModel>({
    urlID: {
        type: String,
        required: true,
    },
    originalURL: {
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
}, {
    timestamps: true,
});

const URL = mongoose.model<URLDocument, URLModel>("URL", URLSchema);

export { URL, URLDocument, URLInfo };
