import { v2 as cloudinary } from "cloudinary";

const cloudinaryConnect = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINAR_NAME,
    api_key: process.env.CLOUDINAR_API_KEY,
    api_secret: process.env.CLOUDINAR_SECRET_KEY,
  });
};

export default cloudinaryConnect;
