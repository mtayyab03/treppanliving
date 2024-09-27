import React, { useState } from "react";
import "../../styles/pages/auth/ForgetPassword.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import leaf from "../../assets/images/leaf.png";
import mainsplash from "../../assets/images/mainsplash.png";

// components
import MainButton from "../../components/common/MainButton";

const OTPScreen: React.FC = () => {
  const [otp, setOTP] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOTP(e.target.value); // Update OTP state
  };

  const handleConfirmClick = () => {
    // You can add OTP validation logic here if needed
    if (otp) {
      navigate("/dashboard/OnBoarding"); // Navigate to dashboard on button click
    } else {
      setErrorMessage("Please enter a valid OTP"); // Set error message if OTP is empty
    }
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <img src={mainsplash} alt="mainsplash" className="splash-container" />
      </div>
      <div className="login-area">
        <img src={leaf} alt="leaf" className="leaf-logo" />
        <div className="login-text">Verify</div>
        <div className="logo-second">Your code was sent to you via email</div>
        <div className="auth-container">
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="auth-main">
            <input
              className="input-field"
              type="email"
              placeholder="OTP"
              value={otp}
              onChange={handleOTPChange} // Use handleOTPChange for input change
            />
            <div className="seconds">44s</div>
          </div>
          <div className="resend-container">
            <a href="#" className="forgot-password">
              Resend code
            </a>
          </div>
          <MainButton onClick={handleConfirmClick} name="Confirm" />
        </div>
      </div>
    </div>
  );
};

export default OTPScreen;
