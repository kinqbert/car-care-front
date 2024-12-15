import { useNavigate } from "react-router-dom";
import { register } from "../../../api/auth";
import { useRef, useState } from "react";
import { checkEmail } from "../../../api/user";
import { RegisterData } from "../../../types/User";

export const RegisterPageContent = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const [isOnDataInputPhase, setIsOnDataInputPhase] = useState(false);

  const savedEmail = useRef("");
  const savedPassword = useRef("");
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const onFirstPhaseSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return;
    }

    checkEmail(email.toString())
      .then(() => {
        savedEmail.current = email.toString();
        savedPassword.current = password.toString();
        setIsOnDataInputPhase(true);

        if (emailInputRef.current) emailInputRef.current.value = "";
        if (passwordInputRef.current) passwordInputRef.current.value = "";
      })
      .catch(() => {
        setErrorText("Email already in use");
      });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const registerData: RegisterData = {
      email: savedEmail.current.toString(),
      password: savedPassword.current.toString(),
      name: formData.get("name")?.toString() || "",
      surname: formData.get("surname")?.toString() || "",
      licenseNumber: formData.get("licenseNumber")?.toString() || "",
      avatarUrl: formData.get("avatarUrl")?.toString() || "",
    };

    register(registerData)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        setErrorText("Registration failed. Please try again.");
      });
  };

  if (isOnDataInputPhase) {
    return (
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Surname" name="surname" />
        <input type="text" placeholder="License number" name="licenseNumber" />
        <input type="text" placeholder="Avatar URL" name="avatarUrl" />
        <button type="submit">Register</button>
      </form>
    );
  }

  return (
    <form onSubmit={onFirstPhaseSubmit}>
      <input type="text" placeholder="Email" name="email" ref={emailInputRef} />
      <input
        type="password"
        placeholder="Password"
        name="password"
        ref={passwordInputRef}
      />
      <button type="submit">Register</button>
      {errorText && <p>{errorText}</p>}
    </form>
  );
};
