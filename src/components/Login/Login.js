import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "../Login/Login.css";

const Login = () => {
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User", user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLoginSubmit} action="">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input
          className="btn-submit"
          type="submit"
          value="Login"
          name="submit"
        />
      </form>
      <p className="singUpAccount">
        New to Ema-john?{" "}
        <Link to="/singup" className="createNewAccount">
          Create New Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
