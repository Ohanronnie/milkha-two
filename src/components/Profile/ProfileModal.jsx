import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaChevronDown, FaHeart, FaStar } from "react-icons/fa";

const Section = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-purple-100 rounded-xl px-4 py-3 mb-3">
      <button
        className="flex justify-between items-center w-full text-purple-800 font-semibold"
        onClick={() => setOpen(!open)}
      >
        {title}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="mt-2 text-sm text-gray-700">{children}</div>}
    </div>
  );
};

const FullProfileModal = ({ profile, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Delay class toggle to trigger animation
    setTimeout(() => setShow(true), 20);
  }, []);

  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Sliding Panel */}
      <div
        className={`relative bg-white w-full max-w-md h-full shadow-xl transform transition-transform duration-300 ease-in-out ${
          show ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Scrollable Container */}
        <div className="overflow-y-auto h-full pb-16">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black z-10"
          >
            ✕
          </button>

          {/* Header */}
          <div className="flex flex-col items-center p-6 pt-10">
            <div className="relative mb-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="rounded-2xl w-40 h-48 object-cover shadow-md"
              />
              <span className="absolute top-2 right-[-10px] bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
                75% COMPATIBLE
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {profile.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {profile.age} YRS |{" "}
              <FaMapMarkerAlt className="inline mr-1 text-purple-500" />
              {profile.location}
            </p>

            <div className="flex gap-3 mb-4">
              <button className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-pink-200">
                <FaHeart /> Like
              </button>
              <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-blue-200">
                <FaStar /> Shortlisted
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-10">
            <Section title="About Khalid" defaultOpen>
              I’m passionate about exploring new cultures and staying active. I
              want to meet someone to fall in love with me for who I really am.
            </Section>

            <Section title="Interests">
              <div className="flex flex-wrap gap-2">
                {["Fitness", "Travel", "Reading", "Photography", "Cooking"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-white text-purple-700 border border-purple-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </Section>

            <Section title="Personal Information">
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <strong>Religion:</strong> Islam
                </p>
                <p>
                  <strong>Marital Status:</strong> Never Married
                </p>
                <p>
                  <strong>Occupation:</strong> Entrepreneur
                </p>
              </div>
            </Section>

            <Section title="Looking For ...">
              <p>
                Someone with similar values and lifestyle who is ready for a
                long-term relationship.
              </p>
            </Section>

            {/* Spacer for scroll */}
            <div className="h-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProfileModal;
