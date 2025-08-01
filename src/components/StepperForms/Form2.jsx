import React from "react";

const LifestyleForm = () => {
  const yesNoOptions = ["Yes", "No"];
  const partnerOptions = ["Yes", "No", "No Preference"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold text-purple-700 mb-6">
        Tell us about your Lifestyle
      </h2>

      {/* Self Questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          "Are you a smoker?",
          "Are you veiled?",
          "Do you drink alcohol?",
          "Do you have pets at home?",
          "Do you suffer from allergies?",
          "Do you have any disabilities?",
        ].map((question, i) => (
          <div key={i}>
            <label className="block mb-2 font-medium text-sm">{question}</label>
            <div className="flex gap-6">
              {yesNoOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="radio" name={question} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t border-purple-200 my-6" />
      <h3 className="text-sm font-bold uppercase text-purple-600 mb-4">
        Your Partner Preferences
      </h3>

      {/* Partner Preferences */}
      <div className="space-y-6">
        {[
          "Should your partner be a smoker?",
          "Should your partner be veiled?",
          "Are you open to a partner who drinks alcohol?",
        ].map((question, i) => (
          <div key={i}>
            <label className="block mb-2 font-medium text-sm">{question}</label>
            <div className="flex gap-6">
              {partnerOptions.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="radio" name={question} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleForm;
