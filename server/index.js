import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb", extened: true }));
app.use(express.urlencoded({ limit: "50mb", extened: true }));
dotenv.config();

app.use("/auth", AuthRoute)

mongoose
  .connect(process.env.ATLAS_URI, {
    dbName: 'myFitnessBuddy',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Listening on ${process.env.PORT}`);
    })
  )
  .catch((error) => console.log(error));

