import { TextField } from "@mui/material";
import React from "react";

function Login() {
  return (
    <div className="flex flex-col justify-center p-3 mt-6">
      <div>
        <h1>Athlete Login</h1>
      </div>
      <form>
        <TextField
          // sx={{
          //   width: 470,
          // }}
          label="Email"
        />
      </form>
    </div>
  );
}

export default Login;
