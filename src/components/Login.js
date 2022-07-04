import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleLogin = () => {
    dispatch(authActions.login());
  };
  console.log(isLoggedIn);
  return (
    <div className="form-container">
      <div className="inputs">
        <h1>LOGIN</h1>
        <div className="input-container">
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="form-btn" onClick={handleLogin}>
          LOGIN
        </button>
        <p>New user? Sign up here</p>
      </div>
    </div>
  );
}

export default Login;
