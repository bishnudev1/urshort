import app from "./app.js";
import { connectDB } from "./db/conn.js";

import URLRoutes from './routes/url_routes.js';

app.use(URLRoutes);


app.listen(8000, () => {
    console.log('Server started on http://localhost:8000');
    connectDB().then(() => {
        console.log("MongoDB connected");
    }).catch((err) => console.log(`MongoDB connection error: ${err}`));
});