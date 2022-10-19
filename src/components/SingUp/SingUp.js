import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "../SingUp/SingUp.css";

const SingUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const confirm = form.confirm.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(confirm, email, password);

    if (password.length < 6) {
      setError("Need Password should be six carecture or more");
      return;
    }
    if (password !== confirm) {
      setError("Your password dose not Match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);
        form.reset();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sing Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>

        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>

        <input
          className="btn-submit"
          type="submit"
          value="Sing Up"
          name="submit"
        />
      </form>
      <p className="singUpAccount">
        Already Have An Account?{" "}
        <Link to="/singup" className="createNewAccount">
          Login
        </Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SingUp;
