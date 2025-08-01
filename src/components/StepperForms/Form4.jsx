import React from "react";

const MarriagePlansForm = () => {
  const yesNoOptions = ["Yes", "No"];
  const partnerOptions = ["Yes", "No", "No Preference"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold text-purple-700 mb-6">
        Tell us about your Marriage Plans
      </h2>

      {/* User Marriage Preferences */}
      <div className="space-y-6 mb-8">
        {/* Type of Marriage */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Type of Marriage
          </label>
          <div className="flex gap-6">
            {["Traditional", "External"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="typeOfMarriage" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Scholarship abroad */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Do you have a scholarship and wish to marry and take your spouse
            abroad?
          </label>
          <div className="flex gap-6">
            {yesNoOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="scholarship" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Polygamy */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Do you wish for polygamy?
          </label>
          <div className="flex gap-6">
            {yesNoOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="polygamy" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Children */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Do you wish to have children?
          </label>
          <div className="flex gap-6">
            {yesNoOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="haveChildren" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-purple-200" />
      <h3 className="text-sm font-bold uppercase text-purple-600 mb-4">
        Your Partner Preferences
      </h3>

      {/* Partner Expectations */}
      <div className="space-y-6">
        {/* Relocation */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Should your partner be willing to relocate with you?
          </label>
          <div className="flex gap-6">
            {partnerOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="relocate" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Polygamy */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Should your partner be open to polygamy?
          </label>
          <div className="flex gap-6">
            {partnerOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="partnerPolygamy" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Wants Children */}
        <div>
          <label className="block mb-2 font-medium text-sm">
            Do you want a partner who wants children?
          </label>
          <div className="flex gap-6">
            {partnerOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="radio" name="partnerChildren" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarriagePlansForm;
