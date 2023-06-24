import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [loginData, setLoginData] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const token = sessionStorage.getItem("token");
    // const page_link = sessionStorage.getItem("page_link");
    // if (page_link == "undefined" && token) {
    //   return navigate("/login");
    // }
    // if (token && page_link) {
    //   return navigate("/hii");
    // }
  }, []);

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    setFormErrors({});

    let formIsValid = true;

    const errors = {};

    if (!loginData.email) {
      formIsValid = false;
      errors["error_email"] = true;
    }

    if (!loginData.password) {
      formIsValid = false;
      errors["error_password"] = true;
    }

    if (!loginData.email || !loginData.password) {
      formIsValid = false;
      errors["error_noEntry"] = true;
    }

    if (!formIsValid) {
      return setFormErrors(errors);
    }

    setTimeout(() => {
      navigate("/basic");
    }, 1000);

    const newLogin = {
      email: loginData.email,
      password: loginData.password,
    };

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/user/login`, newLogin)
      .then((response) => {
        sessionStorage.setItem("page_link", response.data.page_link);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user_id", response.data.user_id);
        console.log(response.data);
      })
      .catch((error) => {
        // setFormErrors(error.response.data);
      });
  };

  return (
    <>
      <div className="setup-header">
        <h2 className="hero__heading">Sign In</h2>
      </div>

      <div className="login">
        <h2 className="login__title">Your Login details</h2>
        <p className="login__subtitle">
          Don’t have an account yet?
          <Link to="/join">
            <p className="login__subtitle--cta">SIGN UP</p>{" "}
          </Link>
        </p>

        <div className="login__form">
          <form onSubmit={handleLogin}>
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

            <button className="login__button">SIGN IN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
