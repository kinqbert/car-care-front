import { useNavigate } from "react-router-dom";
import { register } from "../../../api/auth";
import { useState } from "react";
import { checkEmail } from "../../../api/user";
import { UserRegisterData } from "../../../types/User";

import styles from "./styles.module.scss";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { imageExists } from "../../../utils/imageExists";

export const RegisterPageContent = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isOnDataInputPhase, setIsOnDataInputPhase] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState("");

  const [surnameValue, setSurnameValue] = useState("");
  const [surnameError, setSurnameError] = useState("");

  const [licenseNumberValue, setLicenseNumberValue] = useState("");
  const [licenseNumberError, setLicenseNumberError] = useState("");

  const [avatarUrlValue, setAvatarUrlValue] = useState("");
  const [avatarUrlError, setAvatarUrlError] = useState("");

  const onFirstPhaseSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    let isError = false;

    setError("");
    setEmailError("");

    if (!emailValue.trim()) {
      setEmailError("Email is required");
      isError = true;
    }

    if (!passwordValue.trim()) {
      setPasswordError("Password is required");
      isError = true;
    }

    if (isError) {
      return;
    }

    checkEmail(emailValue)
      .then(() => {
        setIsOnDataInputPhase(true);
      })
      .catch(() => {
        setError("Email already in use");
      });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isError = false;

    setError("");
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setSurnameError("");
    setLicenseNumberError("");
    setAvatarUrlError("");

    if (!nameValue.trim()) {
      setNameError("Name is required");
      isError = true;
    }

    if (!surnameValue.trim()) {
      setSurnameError("Surname is required");
      isError = true;
    }

    if (!licenseNumberValue.trim()) {
      setLicenseNumberError("License number is required");
      isError = true;
    }

    if (licenseNumberValue.length !== 8) {
      setLicenseNumberError("License number must be 8 characters long");
      isError = true;
    }

    const numbers = /^[0-9]+$/;

    if (!licenseNumberValue.match(numbers)) {
      setLicenseNumberError("License number must contain only numbers");
      isError = true;
    }

    const imageIsValid = await imageExists(avatarUrlValue);

    if (!!avatarUrlValue.trim()) {
      if (!imageIsValid) {
        setAvatarUrlError("Image does not exist");
        isError = true;
      }
    }

    if (isError) {
      return;
    }

    const registerData: UserRegisterData = {
      email: emailValue,
      password: passwordValue,
      name: nameValue,
      surname: surnameValue,
      licenseNumber: licenseNumberValue,
      avatarUrl: avatarUrlValue,
    };

    register(registerData)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      {isOnDataInputPhase ? (
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            label="Name"
            placeholder="Name"
            value={nameValue}
            onChange={setNameValue}
            error={nameError}
          />
          <Input
            label="Surname"
            placeholder="Surname"
            value={surnameValue}
            onChange={setSurnameValue}
            error={surnameError}
          />

          <Input
            label="License number"
            placeholder="License number"
            value={licenseNumberValue}
            onChange={setLicenseNumberValue}
            error={licenseNumberError}
          />

          <Input
            label="Avatar URL"
            placeholder="Avatar URL"
            value={avatarUrlValue}
            onChange={setAvatarUrlValue}
            error={avatarUrlError}
          />

          <div className={styles.buttonContainer}>
            <Button type="submit" title="Register" />
            <Button title="Login" to="/login" variant="outline" />
          </div>
        </form>
      ) : (
        <>
          <form className={styles.form} onSubmit={onFirstPhaseSubmit}>
            <Input
              label="Email"
              placeholder="Email"
              value={emailValue}
              onChange={setEmailValue}
              error={emailError}
            />
            <Input
              label="Password"
              placeholder="Password"
              value={passwordValue}
              onChange={setPasswordValue}
              error={passwordError}
              type="password"
            />

            <div className={styles.buttonContainer}>
              <Button type="submit" title="Continue" />
              <Button title="Login" to="/login" variant="outline" />
            </div>
            {error && (
              <div className={styles.errorContainer}>
                <p>{error}</p>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
};
