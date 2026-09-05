import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignupSuccess.css";

function SignupSuccess({ onClose, onOpenLogin }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      onClose={onClose}
    >
      <button
        className="signup-success__button"
        type="button"
        onClick={onOpenLogin}
      >
        Sign in
      </button>
    </ModalWithForm>
  );
}

export default SignupSuccess;
