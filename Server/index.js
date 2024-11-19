import express from "express";
import cors from "cors";
const app = express();
import "dotenv/config";
import dbConnect from "./config/mongodb.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import cloudinaryConnect from "./config/cloudinary.js";

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

dbConnect();
cloudinaryConnect();

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
