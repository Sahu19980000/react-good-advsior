"use client";

import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { useRouter } from 'next/navigation'

const LoginPanel = (props) => {
  const router = useRouter();
  const [form, setForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [token, setToken] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const handleClose = () => {
    router.push('/');
    let ans = document.getElementsByClassName("login-container")[0];
    ans.style.display = "none";
  };

  const showForm = (data) => {
    setForm(data === "signup" ? false : true);
  };

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('userdata', JSON.stringify(userProfile));
    }
  }, [token, userProfile]);

  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => {
        setResponse(null);
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if response changes
    }
  }, [response]);

  const handleGetUserDetails = async (token) => {
    try {
      const res = await fetch(
        "https://dish.najmainternational.com/api/user/details",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(
          `HTTP error! status: ${res.status} - ${res.statusText}`
        );
      }

      const data = await res.json();
      setUserProfile(data);
    } catch (err) {
      setError(err.message);
    }
  }

  const handleLogin = async () => {
    try {
      const res = await fetch(
        'https://dish.najmainternational.com/api/user/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data.message);
      setToken(data.token);
      await handleGetUserDetails(data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async () => {
    try {
      const res = await fetch(
        "https://dish.najmainternational.com/api/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, username, phoneno, password_confirm }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="sign-left"></div>
          </div>
          <div className="col-lg-4">
            <div className="sign-right p-5">
              {response && (
                <Alert variant="success" onClose={() => setResponse(null)} dismissible>
                  {response}
                </Alert>
              )}
              {error && (
                <Alert variant="danger" onClose={() => setError(null)} dismissible>
                  {error}
                </Alert>
              )}
              <div className="cross-icon text-end">
                <button onClick={handleClose}>
                  <img src="../../images/icon/cross-icon.png" alt="Close" />
                </button>
              </div>
              {form ? (
                <div className="login-box">
                  <h5 className="heading mt-3 mb-3">Sign in to your account</h5>
                  <p className="mt-3 mb-3">
                    Hey, Enter your details to get sign into your account
                  </p>

                  <form>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">Enter email id</label>
                      <input
                        type="text"
                        placeholder="example@gmail.com"
                        className="sign-email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">Enter password</label>
                      <input
                        type="password"
                        placeholder="example:1234"
                        className="sign-password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                    <input
                      type="button"
                      value="Get Started"
                      className="sign-btn"
                      onClick={handleLogin}
                    />
                  </form>

                  <div className="mt-4 mb-3">
                    <p>
                      Don’t have an account?{" "}
                      <a href="#" onClick={() => showForm("signup")}>
                        Sign up now
                      </a>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="signup-box">
                  <h5 className="heading">Signup to your account</h5>
                  <p className="mt-3 mb-3">
                    Hey, Enter your details to get signup into your account
                  </p>

                  <form>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">Enter full name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="sign-email"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">Enter email id</label>
                      <input
                        type="text"
                        placeholder="example@gmail.com"
                        className="sign-email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">Enter phone no</label>
                      <input
                        type="text"
                        placeholder="example:+91000000"
                        className="sign-email"
                        onChange={(e) => setPhoneno(e.target.value)}
                        value={phoneno}
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">Enter password</label>
                      <input
                        type="password"
                        placeholder="example:1234"
                        className="sign-email"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                    <div className="mt-3 mb-3 p-2 login-form">
                      <label className="text-muted">Confirm password</label>
                      <input
                        type="password"
                        placeholder="example:1234"
                        className="sign-email"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        value={password_confirm}
                      />
                    </div>

                    <input
                      type="button"
                      className="signup-btn"
                      onClick={handleRegister}
                      value="Get Started"
                    />
                  </form>

                  <div className="mt-4 mb-3">
                    <p>
                      Please{" "}
                      <a href="#" onClick={() => showForm("login")}>
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
    </div>
  );
};

export default LoginPanel;
