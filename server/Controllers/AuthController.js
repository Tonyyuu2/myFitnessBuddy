import UserModel from "../Models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateJwt = (id, secretKey) => {
  return jwt.sign({ id }, secretKey, { expiresIn: "6h" });
};

export const registerUser = async (req, res) => {
  const { email, firstname, lastname, password } = req.body;

  if (!email || !password || !firstname || !lastname)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const duplicate = await UserModel.findOne({email: email}).exec();
  if (duplicate) return res.sendStatus(409);

  const salt = await bcrypt.genSalt(10);

  const hashpwd = await bcrypt.hash(password, salt)

};
