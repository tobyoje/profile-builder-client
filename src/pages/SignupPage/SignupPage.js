import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.scss";
import { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [signUpData, setSignUpData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (!signUpData.email) {
      formIsValid = false;
      errors["error_email"] = true;
    }

    if (!signUpData.password) {
      formIsValid = false;
      errors["error_password"] = true;
    }

    if (!signUpData.confirmPassword) {
      formIsValid = false;
      errors["error_confirmPassword"] = true;
    }

    if (signUpData.password != signUpData.confirmPassword) {
      formIsValid = false;
      errors["error_wrongPasswordMatch"] = true;
    }
    // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (!signUpData.email.match(mailformat)) {
    //   formIsValid = false;
    //   errors["error_emailFormat"] = true;
    // }

    if (
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword
    ) {
      formIsValid = false;
      errors["error_noEntry"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    setTimeout(() => {
      navigate("/login");
    }, 1000);

    const newUser = {
      email: signUpData.email,
      password: signUpData.password,
    };

    axios
      .post("http://localhost:8080/api/user/register", newUser)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <div className="setup-header">
        <h2 className="hero__heading">Sign Up</h2>
      </div>

      <div className="signup">
        <h2 className="signup__title">Create your account</h2>
        <p className="signup__subtitle">Already have an account? SIGN UP</p>

        <div className="signup__form">
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={(event) => handleChange(event)}
              className={`input ${
                formErrors.error_email ? "input--error" : ""
              }`}
            />
            {formErrors.error_email && (
              <p className="form-error">This field is required</p>
            )}
            {formErrors.error_emailFormat && (
              <p className="form-error">Email is not valid</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => handleChange(event)}
              className={`input ${
                formErrors.error_password ? "input--error" : ""
              }`}
            />
            {formErrors.error_password && (
              <p className="form-error">This field is required</p>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(event) => handleChange(event)}
              className={`input ${
                formErrors.error_confirmPassword ? "input--error" : ""
              }`}
            />
            {formErrors.error_password && (
              <p className="form-error">This field is required</p>
            )}
            <button className="signup__button">CREATE ACCOUNT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
