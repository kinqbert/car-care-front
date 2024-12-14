import { useNavigate } from "react-router-dom";
import { login } from "../../../api/auth";

export default function LoginPageContent() {
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await login(
        email?.toString() || "",
        password?.toString() || ""
      );

      localStorage.setItem("refresh-token", response.refreshToken);
      localStorage.setItem("access-token", response.accessToken);
      navigate("/garage"); // Redirect to the dashboard
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
