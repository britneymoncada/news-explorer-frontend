import { useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./LoginModal.css";

function LoginModal({ onClose, onOpenSignup, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.trim() !== "";

  const isFormValid = isEmailValid && isPasswordValid;

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleEmailBlur() {
    setEmailTouched(true);
  }

  function handlePasswordBlur() {
    setPasswordTouched(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setEmailTouched(true);
    setPasswordTouched(true);

    if (!isFormValid) {
      return;
    }

    onLogin();
  }

  return (
    <ModalWithForm title="Sign in" onClose={onClose} onSubmit={handleSubmit}>
      <label className="login-modal__label" htmlFor="email">
        Email
      </label>

      <input
        className="login-modal__input"
        id="email"
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        required
      />

      {emailTouched && !isEmailValid && (
        <span className="login-modal__error">
          {email.trim() === "" ? "Email is required" : "Invalid email address"}
        </span>
      )}

      <label className="login-modal__label" htmlFor="password">
        Password
      </label>

      <input
        className="login-modal__input"
        id="password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        required
      />

      {passwordTouched && !isPasswordValid && (
        <span className="login-modal__error">Password is required</span>
      )}

      <button
        className="login-modal__submit"
        type="submit"
        disabled={!isFormValid}
      >
        Sign in
      </button>

      <p className="login-modal__switch">
        or{" "}
        <button
          className="login-modal__switch-button"
          type="button"
          onClick={onOpenSignup}
        >
          Sign up
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
