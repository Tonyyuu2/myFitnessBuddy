import { FormControl, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth.context";
import Button from "../Button/Button";

function Register() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    retypePwd: "",
    firstName: "",
    lastName: "",
  });
  console.log('data :', data);
  const [error, setError] = useState({
    titleError: false,
    descriptionError: false,
    locationError: false,
    dateError: false,
    imageError: false,
  });
  const firstNameRef = useRef();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col p-3 gap-3 mt-20">
      <h1>Athlete Sign Up</h1>
      <FormControl className="gap-4 flex justify-center w-full">
        <TextField
          name="firstName"
          required
          sx={{
            minWidth: 475,
          }}
          label="First Name"
          type="text"
          onChange={handleChange}
          ref={firstNameRef}
        />
        <TextField
          name="lastName"
          required
          sx={{
            minWidth: 475,
          }}
          label="Last Name"
          type="text"
          onChange={handleChange}
        />
        <TextField
          name="email"
          required
          sx={{
            minWidth: 475,
          }}
          label="Email"
          type="email"
          onChange={handleChange}
        />
        <TextField
          name="password"
          required
          sx={{
            minWidth: 475,
          }}
          label="Password"
          type="password"
          onChange={handleChange}
        />
        <TextField
          name="retypePwd"
          required
          sx={{
            minWidth: 475,
          }}
          label="Retype Password"
          type="password"
          onChange={handleChange}
        />
        <Button children={"Register"} login={true} />
      </FormControl>
    </div>
  );
}

export default Register;
