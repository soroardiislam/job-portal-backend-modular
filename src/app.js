import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routes/index.js";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
//  import companyRoute from "./routes/company.route.js";
//  import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";

dotenv.config({});
const app = express();

app.use(cors({
    origin: ["*"],
    credentials: true
}))

// middleware
app.use(express.json());
app.use(cookieParser());


app.use('/api/v1', router);

app.get('/', async(req, res) =>{
    res.send("server is running");
});


export default app;
