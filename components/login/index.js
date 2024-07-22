"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';

const LoginPanel = (props) => {
  const [email, setEmail] = useState("user@gmail.com"); // Default username
  const [password, setPassword] = useState("12345raja"); // Default password
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [username, Setfullname] = useState("himanshu");
  const [phoneno, Setphoneno] = useState("7651974806");
  const [password_confirm, Setcpassword] = useState("12345raja");

  const handleLogin = async () => {
    alert();
    try {
      const res = await fetch(
        "https://dish.najmainternational.com/api/user/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            // username,
            // phoneno,
            // password_confirm,
          }),
        }
      );

      // if (!res.ok) {
      //   throw new Error(
      //     HTTP error! status: ${res.status} - ${res.statusText}
      //   );
      // }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
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
        <label className="text-muted">enter password </label>
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
      <button onClick={handleLogin}>Submit</button>
      <h1>Hello Vite + React</h1>
      <h2>Start editing to see some magic happen!</h2>
      {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default LoginPanel;
