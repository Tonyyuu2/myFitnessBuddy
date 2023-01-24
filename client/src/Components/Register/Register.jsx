import { FormControl, TextField } from "@mui/material";
import React from "react";
import Button from "../Button/Button";

function Register() {
  return (
    <div className="flex flex-col p-3 gap-3 mt-20">
      <h1>Athlete Sign Up</h1>
      <FormControl className="gap-4 flex justify-center w-full">
        <TextField
          required
          sx={{
            minWidth: 475,
          }}
          label="First Name"
          type="text"
        />
        <TextField
          required
          sx={{
            minWidth: 475,
          }}
          label="Last Name"
          type="text"
        />
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
          type="password"
        />
        <TextField
          required
          sx={{
            minWidth: 475,
          }}
          label="Retype Password"
          type="password"
        />
        <Button children={"Register"} login={true} />
      </FormControl>
    </div>
  );
}

export default Register;
