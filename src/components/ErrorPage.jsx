import React from "react";
import "../components/Styles/ErrorPage.css"
import errorImg from "../assets/5203299.jpg"; // Make sure this path is correct
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-box">
        <img src={errorImg} alt="Error Illustration" className="error-image" />
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
            <Link to="/">Go To Home</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
