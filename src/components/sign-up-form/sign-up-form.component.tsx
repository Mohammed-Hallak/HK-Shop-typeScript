import { useState, FormEvent, ChangeEvent } from "react";

import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer, FormContainer } from "./sign-up-form.styles";
import { signUpStart } from "../../store/user/user.action";

let defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

let SignUpForm = () => {
  let [formFields, setFormFields] = useState(defaultFormFields);
  let { displayName, email, password, confirmPassword } = formFields;
  let dispatch = useDispatch();

  let resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  let handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  let handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      {/* onSubmit={handleSubmit}  */}
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit" style={{ margin: "auto" }}>
          Sign Up
        </Button>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpForm;
