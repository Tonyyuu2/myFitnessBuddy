import UserModel from "../Models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateJwt = (id, secretKey) => {
  return jwt.sign({ id }, secretKey, { expiresIn: "6h" });
};

export const userRegister = async (req, res) => {
  const { email, firstname, lastname, password } = req.body;

  if (!email || !password || !firstname || !lastname)
    return res
      .status(400)
      .json({ message: "An email and password is required." });

  const duplicate = await UserModel.findOne({ email: email }).exec();
  if (duplicate)
    return res
      .status(409)
      .json({ message: "The user with this email already exists" });

  const salt = await bcrypt.genSalt(10);

  const hashpwd = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    email,
    password: hashpwd,
    firstname,
    lastname,
  });

  const accessToken = generateJwt(email, process.env.SECRET_KEY);
  try {
    await newUser.save();
    res.status(200).json({ newUser, accessToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "An email and password is required." });
  }
  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      const accessToken = generateJwt(user.id, process.env.SECRET_KEY);

      checkPass
        ? res.status(200).json({ user, accessToken })
        : res.status(400).json("Wrong email or password");
    } else {
      res.status(404).json("No user");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
