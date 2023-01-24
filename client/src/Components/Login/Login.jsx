import { FormControl, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Login() {
  return (
    <div className="flex flex-col justify-center p-3 mt-20 gap-6 w-screen">
      <div>
        <h1>Athlete Login</h1>
      </div>
      <FormControl className="gap-4 flex justify-center items-center w-full">
        <TextField
          required
          sx={{
            minWidth: 475,
          }}
          label="Email"
          type="email"
        />
        <TextField
          required
          sx={{
            minWidth: 475,
          }}
          label="Password"
          type="text"
        />
        <Button children={"login"} login={true} />
      </FormControl>
      <div className="flex justify-center items-center">
        <h1>Not a member?&nbsp;</h1>
        <Link to="/register">
          <p className="text-blue-700">Sign up now!</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
