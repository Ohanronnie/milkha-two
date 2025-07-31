import { FaCheckCircle } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import Profile from "../../assets/Profile.png";

export default function ProfileCard() {
  return (
    <div className="min-h-[60vh]">
      <div className="w-full lg:px-12 lg:bg-gradient-to-b from-purple-400 h-[160px]  relative to-white rounded-lg lg:shadow-md">
        <div className=" mx-auto flex  md:flex-row items-center absolute lg:-bottom-36 gap-6 ">
          {/* Profile Picture */}
          <div className="relative ">
            <img
              src={Profile} // Replace with actual path to image
              alt="Odrea Azur"
              className="w-60 h-60 rounded-xl object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
              <FiEdit2 className="text-gray-700 w-4 h-4" />
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 lg:mt-36">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">Odrea Azur</h2>
              <FaCheckCircle className="text-blue-500" />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <div className="flex flex-col">
                <span className="uppercase text-xs text-gray-400">Gender</span>
                <span>Male</span>
              </div>
              <div className="flex flex-col">
                <span className="uppercase text-xs text-gray-400">Age</span>
                <span>27 Years</span>
              </div>
              <div className="flex flex-col relative">
                <span className="uppercase text-xs text-gray-400">
                  Location
                </span>
                <span className="flex items-center gap-1">
                  Abu Dhabi, UAE
                  <FiEdit2 className="text-gray-500 w-3 h-3 ml-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
