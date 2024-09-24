import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the database in atlas");
  })
  .catch((e) => {
    console.log("There is some error in connecting. ", e);
  });

// 116.66.158.54 preyanshjain13 PDvkfF34ceymnJPo
