import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./SignupModal.css";

function SignupModal({ onClose, onOpenLogin, onSignupSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.trim() !== "";
  const isUsernameValid = username.trim() !== "";

  const isFormValid = isEmailValid && isPasswordValid && isUsernameValid;

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailBlur() {
    setEmailTouched(true);
  }

  function handlePasswordBlur() {
    setPasswordTouched(true);
  }

  function handleUsernameBlur() {
    setUsernameTouched(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setEmailTouched(true);
    setPasswordTouched(true);
    setUsernameTouched(true);

    if (!isFormValid) {
      return;
    }

    onSignupSuccess(username);
  }

  return (
    <ModalWithForm title="Sign up" onClose={onClose} onSubmit={handleSubmit}>
      <label className="signup-modal__label" htmlFor="signup-email">
        Email
      </label>

      <input
        className="signup-modal__input"
        id="signup-email"
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        required
      />

      {emailTouched && !isEmailValid && (
        <span className="signup-modal__error">
          {email.trim() === "" ? "Email is required" : "Invalid email address"}
        </span>
      )}

      <label className="signup-modal__label" htmlFor="signup-password">
        Password
      </label>

      <input
        className="signup-modal__input"
        id="signup-password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        required
      />

      {passwordTouched && !isPasswordValid && (
        <span className="signup-modal__error">Password is required</span>
      )}

      <label className="signup-modal__label" htmlFor="signup-username">
        Username
      </label>

      <input
        className="signup-modal__input"
        id="signup-username"
        type="text"
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
        onBlur={handleUsernameBlur}
        required
      />

      {usernameTouched && !isUsernameValid && (
        <span className="signup-modal__error">Username is required</span>
      )}

      <button
        className="signup-modal__submit"
        type="submit"
        disabled={!isFormValid}
      >
        Sign up
      </button>

      <p className="signup-modal__switch">
        or{" "}
        <button
          className="signup-modal__switch-button"
          type="button"
          onClick={onOpenLogin}
        >
          Sign in
        </button>
      </p>
    </ModalWithForm>
  );
}

export default SignupModal;
