import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("user@gmail.com"); // Default username
  const [password, setPassword] = useState("12345raja"); // Default password
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const base_url = "https://dish.najmainternational.com/api/user"; 

  const handleLogin = async () => {

    try {
      const res = await fetch(base_url+'/login',
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
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Submit</button>
      <h1>Hello Vite + React</h1>
      <h2>Start editing to see some magic happen!</h2>
      {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}
