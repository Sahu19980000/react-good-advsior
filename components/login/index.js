"use client";
import axios from "axios";
import React, { useState } from "react";

const LoginPanel = (props) => {
  const [form, Setform] = useState(true);
  const [email, setEmail] = useState("user@gmail.com"); // Default username
  const [password, setPassword] = useState("12345raja"); // Default password
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [username, Setfullname] = useState("himanshu");
  const [phoneno, Setphoneno] = useState("7651974806");
  const [password_confirm, Setcpassword] = useState("12345raja");

  const handleClose = () => {
    let ans = document.getElementsByClassName("login-container")[0];

    console.log(ans);
    ans.style.display = "none";
  };

  const show_form = (data) => {
    if (data == "signup") {
      Setform(false);
    } else {
      Setform(true);
    }
  };

  const get_login = async () => {
    try {
      const res = await fetch(
        "https://dish.najmainternational.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      setError(err.message);
    }
  };

  const get_register = async () => {
    try {
      const res = await fetch(
        "https://dish.najmainternational.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="sign-left"></div>
          </div>
          <div className="col-lg-4">
            <div className="sign-right p-5">
              <div className="cross-icon text-end">
                <button onClick={handleClose}>
                  <img src="../../images/icon/cross-icon.png" alt="Close" />
                </button>
              </div>
              {form ? (
                <div className="login-box">
                  <h5 className="heading mt-3 mb-3">Sign in to your account</h5>
                  <p className="mt-3 mb-3">
                    Hey, Enter your details to get sign into your account{" "}
                  </p>

                  <form>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">enter email id</label>
                      <input
                        type="text"
                        placeholder="example@gmail.com"
                        className="sign-email"
                        value={email}
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">enter password </label>
                      <input
                        type="text"
                        placeholder="example:1234"
                        className="sign-password"
                        value={password}
                      />
                    </div>
                    <input
                      type="button"
                      value="Get Started"
                      className="sign-btn"
                      onClick={get_login}
                    ></input>
                    <h3 style={{ color: "green" }}></h3>
                    {response && (
                      <div>Response: {JSON.stringify(response)}</div>
                    )}
                    {error && <div>Error: {error}</div>}
                  </form>

                  <div className="mt-4 mb-3">
                    <p>
                      Don’t have an account?{" "}
                      <a href="#" onClick={() => show_form("signup")}>
                        Sign up now
                      </a>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}

              {form ? (
                ""
              ) : (
                <div className="signup-box">
                  <h5 className="heading mt-3 mb-3">
                    Sigup in to your account
                  </h5>
                  <p className="mt-3 mb-3">
                    Hey, Enter your details to get signup into your account{" "}
                  </p>

                  <form>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">enter full name </label>
                      <input
                        type="text"
                        placeholder="enter your name"
                        className="sign-email"
                        onChange={(e) => {
                          Setfullname(e.target.value);
                        }}
                        value={username}
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">enter email id</label>
                      <input
                        type="text"
                        placeholder="example@gmail.com"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                        className="sign-email"
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">enter phone no </label>
                      <input
                        type="text"
                        placeholder="example:+91000000"
                        onChange={(e) => {
                          Setphoneno(e.target.value);
                        }}
                        value={phoneno}
                        className="sign-email"
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">enter password </label>
                      <input
                        type="text"
                        placeholder="example:1234"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                        className="sign-email"
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">
                        enter Confirm password{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="example:1234"
                        onChange={(e) => {
                          Setcpassword(e.target.value);
                        }}
                        value={password_confirm}
                        className="sign-email"
                      />
                    </div>

                    <input type="buttton" className="signup-btn" onClick={get_register} value='get Started' />
                      
                  </form>

                  <div className="mt-4 mb-3">
                    <p>
                      please{" "}
                      <a href="#" onClick={() => show_form("login")}>
                        login now
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPanel;
