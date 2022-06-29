import React from "react";

function Login() {
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
        <button className="form-btn">LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
