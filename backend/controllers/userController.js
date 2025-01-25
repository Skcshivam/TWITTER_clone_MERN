import { User } from "../models/userSchema.js";
import bcryptjs from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { Name, Username, Email, Password } = req.body;
    //basic validation
    if (!Name || !Username || !Email || !Password) {
      return res.status(401).json({
        message: "All Feild are required",
        success: false,
      });
    }

    const user = await User.findOne({ Email });
    if (user) {
      return res.status(401).json({
        message: "User already Exist",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(Password, 16);

    await User.create({
      Name,
      Username,
      Email,
      Password: hashedPassword,
    });
    return res.status(201).json({
      message: "Account created sucessfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(401).json({
        message: "All Feild are required",
        success: false,
      });
    }
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({
        message: "User dosn't exist with this email",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(Password, user.Password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect Email or Password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._Id,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `welcome back ${user.Name}`,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "User Logged out successfully",
    success: true,
  });
};
