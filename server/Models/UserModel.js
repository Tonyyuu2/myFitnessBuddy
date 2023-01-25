import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    required: true
  },
  refreshToken:[String],

});

const UserModel = mongoose.model("users", UserSchema)
export default UserModel