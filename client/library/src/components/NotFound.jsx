import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <h2>Oops! Page not found.</h2>
      <p>The page you are looking for doesn't exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default NotFound;