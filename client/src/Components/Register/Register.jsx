import { FormControl, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth.context";
import Button from "../Button/Button";

const emailRegex =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%/]).{8,24}$/;

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
  console.log("data :", data);
  const [error, setError] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
    retypePassError: false,
  });
  console.log("error :", error);
  const firstNameRef = useRef();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('PRESSSED');
    const testedEmail = emailRegex.test(data.firstName);

    if (data.firstName === "") {
      const firstNameError = (error.firstNameError = true);
      setError((prev) => ({ ...prev, firstNameError }));
    } else {
      const firstNameError = (error.firstNameError = false);
      setError((prev) => ({ ...prev, firstNameError }));
    }

    if (data.lastName === "") {
      const lastNameError = (error.lastNameError = true);
      setError((prev) => ({ ...prev, lastNameError }));
    } else {
      const lastNameError = (error.lastNameError = false);
      setError((prev) => ({ ...prev, lastNameError }));
    }

    if (data.email === "" || !testedEmail) {
      const emailError = (error.emailError = true);
      setError((prev) => ({ ...prev, emailError }));
    } else {
      const emailError = (error.emailError = false);
      setError((prev) => ({ ...prev, emailError }));
    }
  };

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
          onChange={(e) => {
            handleChange(e)
            setError((prev) => {
              return {...prev, firstNameError: false}
            })
          }}
          ref={firstNameRef}
          error={error.firstNameError}
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
        <Button
          children={"Register"}
          login={true}
          handleSubmit={handleSubmit}
        />
      </FormControl>
    </div>
  );
}

export default Register;
