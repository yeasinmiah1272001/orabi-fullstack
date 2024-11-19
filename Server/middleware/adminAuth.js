import jwt from "jsonwebtoken";
const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "not authorized, pleace try again",
      });
    }
    const decode_token = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decode_token);
    const { isAdmin } = decode_token;
    // console.log(isAdmin);

    if (!isAdmin) {
      return res.json({
        success: false,
        message: "not authorized, pleace try again",
      });
    }
    next();
  } catch (error) {
    console.log("admin auth error", error);
    res.json({ success: false, message: error?.message });
  }
};

export default adminAuth;
