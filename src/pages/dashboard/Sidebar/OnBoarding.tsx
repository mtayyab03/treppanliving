import React, { useState } from "react";
import "../../../styles/pages/sidebar/onBoarding/onBoardingProject.css";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

// screens
import ProjectDefine from "./onBoarding/ProjectDefine";
import FloorDefine from "./onBoarding/FloorDefine";
import UnitDefine from "./onBoarding/UnitDefine";
import AmenitiesDefine from "./onBoarding/AmenitiesDefine";
import UsersDefine from "./onBoarding/UsersDefine";

// Modal Component for Success Message
const SuccessModal = ({ isOpen }: any) => {
  const navigate = useNavigate(); // Use navigate hook

  const handleNavigateToDashboard = () => {
    navigate("/dashboard"); // Navigate to the dashboard route
  };
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <FaCheckCircle color="#7ec646" size={80} />
          <h2>Success!</h2>
          <p>You have successfully completed the onboarding process.</p>
          <button onClick={handleNavigateToDashboard}>Go to Dashboard</button>
        </div>
      </div>
    )
  );
};

const steps = [1, 2, 3, 4, 5];
const stepNames = ["Project", "Floor", "Unit", "Amenity", "Users"];

const OnBoarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === steps.length) {
      // Open success modal if the last step is reached
      setIsModalOpen(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Define the content for each step
  const renderStepContent = (step: any) => {
    switch (step) {
      case 1:
        return <ProjectDefine />;
      case 2:
        return <FloorDefine />;
      case 3:
        return <UnitDefine />;
      case 4:
        return <AmenitiesDefine />;
      case 5:
        return <UsersDefine />;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div className="onBoarding-main">
      <div className="progress-container">
        {steps.map((step, index) => (
          <div className="step-container" key={index}>
            <div className="step-container-name">
              <div className={`circle ${currentStep >= step ? "active" : ""}`}>
                {step}
              </div>
              <div
                className={`step-label ${currentStep >= step ? "active" : ""}`}
              >
                {stepNames[index]} {/* Display step name */}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`line ${currentStep > step ? "active" : ""}`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Dynamic content based on the step */}
      <div className="step-content">{renderStepContent(currentStep)}</div>

      <div className="button-container">
        <button onClick={handleBack} disabled={currentStep === 1}>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length + 1}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default OnBoarding;
