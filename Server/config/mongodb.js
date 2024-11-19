import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB is connected");
    });
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("db is connected error", error);
  }
};

export default dbConnect;
