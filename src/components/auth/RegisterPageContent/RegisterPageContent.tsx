import { useNavigate } from "react-router-dom";
import { register } from "../../../api/auth";

export const RegisterPageContent = () => {
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await register(email?.toString() || "", password?.toString() || "");

      navigate("/login");
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
};
