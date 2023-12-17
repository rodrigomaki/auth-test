import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClick = (role: string[]) => {
    auth.authenticate(role);
    navigate("/home");
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick(["admin"])}>Login as Admin</button>
      </div>
      <div>
        <button onClick={() => handleClick(["user"])}>Login as User</button>
      </div>
      <div>
        <button onClick={() => handleClick(["products"])}>
          Login as Product
        </button>
      </div>
    </>
  );
};

export default Login;
