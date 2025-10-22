import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/userRoutes.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();


app.use(bodyParser.json());

app.use(cors());


app.use("/api/user" , router)



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});