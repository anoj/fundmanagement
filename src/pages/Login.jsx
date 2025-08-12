import React from "react";
import useLoginForm from "../hooks/useLoginForm";
import "./Login.css";

const Login = () => {
  const {
    values,
    errors,
    handleInputChange,
    validate,
    resetForm,
  } = useLoginForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform login logic here
      alert("Login successful!");
      resetForm();
    }
  };

  return (
    <div className="login-financial-bg">
      <div className="login-financial-container">
        <div className="login-financial-logo">
          <img src="/logo.svg" alt="Fund Management" />
          <h2>Fund Management Portal</h2>
        </div>
        <form className="login-financial-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleInputChange}
            className={errors.username ? "error" : ""}
          />
          {errors.username && <span className="form-error">{errors.username}</span>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleInputChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <span className="form-error">{errors.password}</span>}

          <button type="submit" className="login-financial-btn">Sign In</button>
        </form>
        <div className="login-financial-footer">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
