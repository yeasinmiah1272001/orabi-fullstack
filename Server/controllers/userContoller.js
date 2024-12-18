import usermodel from "../models/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      password: user.name,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "10h" }
  );
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("body", req.body);
    if (!email) {
      return res.json({ success: false, message: "pleace email is requred" });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "pleace password is requred",
      });
    }

    const user = await usermodel.findOne({ email });
    // console.log("user", user);
    if (!user) {
      return res.json({ success: false, message: "user does not exit" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user);
      res.json({ success: true, token, message: "user login success" });
    } else {
      return res.json({
        success: false,
        message: "invalid creadiantial, pleace try again",
      });
    }
  } catch (error) {
    console.log("User Login error", error);
    res.json({ success: true, message: error.message });
  }
};

const userRegister = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = await req.body;
    // console.log("body", req.body);

    const existinguser = await usermodel.findOne({ email });
    // console.log("exis", existinguser);
    if (!name) {
      return res.json({ success: false, message: "pleace name is requred" });
    }
    if (!email) {
      return res.json({ success: false, message: "pleace email is requred" });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "pleace password is requred",
      });
    }
    // email validation
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "pleace enter a validate email",
      });
    }
    if (existinguser) {
      // cheack user
      return res.json({ success: true, message: "user already exit" });
    }

    // password
    if (password.length < 8) {
      return res.json({
        success: true,
        message: "pleace password must be 8 chr",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const encryptPassword = await bcrypt.hash(password, salt);

    // new user create
    const newUser = new usermodel({
      name,
      email,
      password: encryptPassword,
      isAdmin,
    });
    // console.log("user", newUser);
    // save database
    await newUser.save();

    res.json({
      success: true,
      message: "user register successfull",
    });
  } catch (error) {
    console.log("register error", error);
    res.json({ success: true, message: error.message });
  }
};

const addmiinLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("body", req.body);
    if (!email) {
      return res.json({ success: false, message: "pleace email is requred" });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "pleace password is requred",
      });
    }

    const user = await usermodel.findOne({ email });
    // console.log("user", user);
    if (!user) {
      return res.json({ success: false, message: "user does not exit" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user.isAdmin) {
      return res.json({
        success: false,
        message: "you are not authorized login, pleace try again",
      });
    }
    if (isMatch && user.isAdmin) {
      const token = createToken(user);
      res.json({ success: true, token, message: "user login success" });
    } else {
      return res.json({
        success: false,
        message: "password not match, pleace try again",
      });
    }
  } catch (error) {
    console.log("Admin Login error", error);
    res.json({ success: true, message: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    await usermodel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "user deleted success" });
  } catch (error) {
    console.log("remove user error", error);
    res.json({ success: true, message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id, name, email, password, isAdmin } = await req.body;
    const user = await usermodel.findById(_id);

    // console.log("body", req.body);
    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }

    if (user) user.name = name;

    // email update
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "pleace enter a validate email",
      });
    }
    user.email = email;
    user.isAdmin = isAdmin;
    // password update
    if (password) {
      if (email.length < 8) {
        return res.json({
          success: true,
          message: "pleace password must be 8 chr",
        });
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    await user.save();
    res.json({ success: true, message: "user updated success" });
  } catch (error) {
    console.log("Update user error", error);
    res.json({ success: true, message: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const total = await usermodel.countDocuments({});
    const user = await usermodel.find({});
    res.json({ success: true, total, user });
  } catch (error) {
    console.log("all user get error", error);
    res.json({ success: true, message: error.message });
  }
};

export {
  userLogin,
  userRegister,
  addmiinLogin,
  removeUser,
  updateUser,
  getUsers,
};
