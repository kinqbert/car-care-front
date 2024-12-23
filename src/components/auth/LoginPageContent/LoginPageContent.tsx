import { useLocation, useNavigate, useParams } from "react-router-dom";
import { login } from "../../../api/auth";
import { getCurrentUser } from "../../../api/user";
import { useUserStore } from "../../../store/useUserStore";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { useAuthStore } from "../../../store/useAuthStore";
import { validateEmail } from "../../../utils/validateEmail";

export default function LoginPageContent() {
  const navigate = useNavigate();

  const setUser = useUserStore((state) => state.setUser);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const isAuth = useAuthStore((state) => state.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/garage");
    }
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);

  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isRegisterSuccess = queryParams.get("success") === "true";

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isError = false;

    setIsLoading(true);

    setError("");
    setEmailError("");
    setPasswordError("");

    if (!emailValue) {
      setEmailError("Email is required");
      isError = true;
    }

    if (!validateEmail(emailValue)) {
      setEmailError("Email is not valid");
      isError = true;
    }

    if (!passwordValue) {
      setPasswordError("Password is required");
      isError = true;
    }

    if (isError) {
      setIsLoading(false);

      return;
    }

    try {
      const response = await login(emailValue, passwordValue);

      localStorage.setItem("refresh-token", response.refreshToken);
      localStorage.setItem("access-token", response.accessToken);

      const userInfo = await getCurrentUser();

      setIsAuth(true);

      setUser(userInfo);

      navigate("/garage");
    } catch (error) {
      const errorMessage = (error as any).response.data.message;

      setError(errorMessage);
    } finally {
      setIsFirstRender(false);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={onSubmit}>
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
          <Button title="Login" type="submit" isLoading={isLoading} />
          <Button title="Register" to="/register" variant="outline" />
        </div>

        {error && (
          <div className={styles.errorContainer}>
            <p>{error}</p>
          </div>
        )}
        {isRegisterSuccess && isFirstRender && (
          <div className={styles.successContainer}>
            <p>Successfully registered!</p>
          </div>
        )}
      </form>
    </div>
  );
}
