import mongoose, {ConnectOptions} from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://bishnudevkhutia26:YQVvPVm9FhptRfGn@igrosine.zru5dui.mongodb.net/igrosine", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        } as ConnectOptions);
    } catch (error) {
        console.log(error);
    }
};

export { connectDB };