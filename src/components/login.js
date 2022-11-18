import React, { useEffect, useState } from "react";

export default function Login() {
  // function App() {
  const [data, setData] = useState(null);
  let backEndUrl;

  if (process.env.NODE_ENV === "development") {
    backEndUrl = "http://localhost:3001";
  } else {
    backEndUrl = process.env.BACKEND_URL;
  }

  useEffect(() => {
    fetch(`${backEndUrl}/api`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, [backEndUrl]);

  return (
    <div style={{ height: "80vh" }}>
      <h1>LOGIN PAGE</h1>
      <div className="text-center">
        <h1 className="">Title</h1>
        <div className="App">
          <header className="App-header">
            <p>{!data ? "Loading... " : data}</p>
          </header>
        </div>
      </div>
    </div>
  );
}