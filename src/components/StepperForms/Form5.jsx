import React from "react";

const CareerEducationForm = () => {
  const qualifications = ["High School", "Bachelor's", "Master's", "PhD"];
  const fieldsOfWork = ["Healthcare", "Education", "Engineering", "IT"];
  const occupations = ["Government", "Private", "Freelance", "Business"];
  const locations = ["Abu Dhabi", "Dubai", "Sharjah"];
  const financialStatus = ["Excellent", "Good", "Average", "Below Average"];
  const incomeRanges = ["< $1000", "$1000 - $3000", "$3000 - $6000", "$6000+"];

  const languages = [
    "Arabic",
    "English",
    "French",
    "Turkish",
    "Persian",
    "Other",
  ];
  const partnerOptions = ["Yes", "No", "No Preference"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold text-purple-700 mb-6">
        Tell us about your Career & Education
      </h2>

      {/* Self Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Academic Qualification */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Academic Qualification
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option value="">Select qualification</option>
            {qualifications.map((q) => (
              <option key={q}>{q}</option>
            ))}
          </select>
        </div>

        {/* Field of Work */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Field of Work
          </label>
          <select className="w-full border px-3 py-2 rounded">
            {fieldsOfWork.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Work Location */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Work Location (Emirate)
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option value="">Select work location</option>
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Occupation */}
        <div>
          <label className="block mb-1 text-sm font-medium">Occupation</label>
          <select className="w-full border px-3 py-2 rounded">
            {occupations.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        {/* Financial Status */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Financial Status
          </label>
          <select className="w-full border px-3 py-2 rounded">
            {financialStatus.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Monthly Income */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Monthly Income
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Select income range</option>
            {incomeRanges.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-10">
        <label className="block mb-2 text-sm font-medium">
          Languages you Know
        </label>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              {lang}
            </label>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-purple-200" />
      <h3 className="text-sm font-bold uppercase text-purple-600 mb-4">
        Your Partner Preferences
      </h3>

      {/* Partner Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Academic Qualification */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Preferred Academic Qualification
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option value="">Select qualification</option>
            {qualifications.map((q) => (
              <option key={q}>{q}</option>
            ))}
          </select>
        </div>

        {/* Field of Work */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Preferred Field of Work
          </label>
          <select className="w-full border px-3 py-2 rounded">
            {fieldsOfWork.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Work Location */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Preferred Work Location (Emirate)
          </label>
          <select className="w-full border px-3 py-2 rounded">
            <option value="">Select work location</option>
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Occupation */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Preferred Occupation
          </label>
          <select className="w-full border px-3 py-2 rounded">
            {occupations.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Similar Financial Status */}
      <div className="mt-8">
        <label className="block mb-2 text-sm font-medium">
          Should your partner have a similar financial status?
        </label>
        <div className="flex gap-6">
          {partnerOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input type="radio" name="partnerFinancialStatus" />
              {opt}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerEducationForm;
