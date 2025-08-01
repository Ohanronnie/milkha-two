import React, { useState } from "react";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
} from "../components/StepperForms/formSteps"; // Import all step components

const steps = [
  "About You",
  "Lifestyle",
  "Physical Appearance",
  "Marriage Plans",
  "Career & Education",
  "Interest & Hobbies",
  "Profile Upload",
];

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Optional mobile sidebar toggle

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
      case 5:
        return <Step6 />;
      case 6:
        return <Step7 />;
      default:
        return null;
    }
  };

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="md:w-64 w-full bg-white p-4 md:p-6 border-b md:border-r">
        <h2 className="text-xl font-bold mb-4 md:mb-6">Personal</h2>
        <ul className="grid grid-cols-2 md:block gap-4 text-xs md:text-sm">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center mb-2">
              <div
                className={`w-5 h-5 rounded-full mr-2 ${
                  index === currentStep
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200"
                } flex items-center justify-center text-[10px]`}
              >
                {index + 1}
              </div>
              <span
                className={`${
                  index === currentStep
                    ? "text-purple-700 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 md:px-8 py-6">
        <h1 className="text-lg md:text-xl font-bold text-purple-700 mb-4 md:mb-6">
          {currentStep + 1} of {steps.length} — {steps[currentStep]}
        </h1>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-6">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button
            disabled={currentStep === 0}
            onClick={prev}
            className={`px-6 py-2 rounded text-white w-full sm:w-auto ${
              currentStep === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            Previous
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              onClick={() => alert("Form submitted!")}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded w-full sm:w-auto"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={next}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded w-full sm:w-auto"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepperForm;
