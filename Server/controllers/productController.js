import { v2 as cloudinary } from "cloudinary";
import productModels from "../models/productModels.js";

const addProduct = async (req, res) => {
  try {
    const {
      _type,
      name,
      price,
      discountedPersentage,
      category,
      band,
      badge,
      isAvailabel,
      offer,
      description,
      tags,
    } = await req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];

    if (!name) {
      return res.send({ success: false, message: "name is required" });
    }
    if (!price) {
      return res.send({ success: false, message: "price is required" });
    }
    if (!category) {
      return res.send({ success: false, message: "category is required" });
    }
    if (!description) {
      return res.send({ success: false, message: "description is required" });
    }
    let images = [image1, image2].filter((item) => item !== undefined);

    let imageUrls = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    let parsedTags;
    try {
      parsedTags = JSON.parse(tags);
    } catch (error) {
      parsedTags = tags ? tags.split(",").map((tag) => tag.trim()) : [];
    }

    const productData = {
      _type: _type ? _type : "",
      name,
      price: Number(price),
      discountedPersentage: Number(discountedPersentage),
      category,
      band: band ? band : "",
      badge: badge === " true" ? true : false,
      isAvailabel: isAvailabel === "true" ? true : false,
      offer: offer === "true" ? true : false,
      description,
      tags: tags ? parsedTags : [],
      images: imageUrls,
    };

    const product = new productModels(productData);
    product.save();
    return res.send({
      success: true,
      message: "add product success",
    });
  } catch (error) {
    console.log("no added product , pleace try again");
    return res.json({ success: false, message: "no add" });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModels.findByIdAndDelete(req.body._id);
    return res.send({ success: true, message: "Remove product success" });
  } catch (error) {
    console.log("error", error.message);
    return res.json({ success: false, message: error.message });
  }
};
const listProduct = async (req, res) => {
  try {
    const total = await productModels.countDocuments({});
    const products = await productModels.find({});
    res.send({ success: true, total, products });
  } catch (error) {
    console.log("error", error.message);
    return res.json({ success: false, message: error.message });
  }
};
const singleProduct = async (req, res) => {
  try {
    const { _id } = req.query;
    console.log("ids", req.query);
    const product = await productModels.findById(_id);
    if (!product) {
      return res.json({ success: false, message: "no product found this id" });
    }
    res.json({ success: true, product });
  } catch (error) {
    console.log("error", error.message);
    return res.json({ success: false, message: error.message });
  }
};

export { addProduct, removeProduct, listProduct, singleProduct };
