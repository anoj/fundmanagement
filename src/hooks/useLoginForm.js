import { useState } from "react";

export default function useLoginForm() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("username" in fieldValues) {
      temp.username = fieldValues.username ? "" : "Username is required";
    }

    if ("password" in fieldValues) {
      temp.password = fieldValues.password
        ? fieldValues.password.length >= 6
          ? ""
          : "Password must be at least 6 characters"
        : "Password is required";
    }

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const resetForm = () => {
    setValues({ username: "", password: "" });
    setErrors({ username: "", password: "" });
  };

  return {
    values,
    errors,
    handleInputChange,
    validate,
    resetForm,
  };
}