import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/urshort", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error);
    }
};

export { connectDB };