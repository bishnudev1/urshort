import app from "./app";
import { connectDB } from "./db/conn";
import URLRoutes from './routes/url_routes';

app.use(URLRoutes);

const port: number = 8000;

app.listen(port, async () => {
    console.log(`Server started on http://localhost:${port}`);
    try {
        await connectDB();
        console.log("MongoDB connected");
    } catch (err) {
        console.log(`MongoDB connection error: ${err}`);
    }
});
