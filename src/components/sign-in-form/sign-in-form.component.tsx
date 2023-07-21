import { useState, FormEvent, ChangeEvent } from "react";

import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  SignInContainer,
  ButtonsContainer,
  FormContainer,
} from "./sign-in-form.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

let defaultFormFields = {
  email: "",
  password: "",
};

let SignInForm = () => {
  let dispatch = useDispatch();
  let [formFields, setFormFields] = useState(defaultFormFields);
  let { email, password } = formFields;

  let resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  let signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  let handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  let handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <FormContainer onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignInForm;
