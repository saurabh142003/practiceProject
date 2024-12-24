import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaVenusMars } from "react-icons/fa";

const Card = () => {
  const [userData, setUserData] = useState(null);

  async function apiCall() {
    try {
      const url = "https://randomuser.me/api/?page=1&results=1&seed=abc";
      const result = await fetch(url);
      const data = await result.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-2xl p-6 flex flex-col md:flex-row">
        {/* Left Section: Image */}
        {userData && (
          <div className="flex justify-center items-center mb-4 md:mb-0 md:mr-6">
            <div className="relative w-36 h-36">
              <img
                src={userData.picture.large}
                alt="User"
                className="w-full h-full object-cover rounded-full border-4 border-transparent"
                style={{
                  background: "linear-gradient(to right, #6b46c1, #e53e3e)",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        )}

        {/* Right Section: Details */}
        {userData && (
          <div className="w-full">
            {/* Full Name with Title */}
            <h2
              className="text-3xl font-extrabold text-gray-800 tracking-wide mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {userData.name.title} {userData.name.first} {userData.name.last}
            </h2>

            {/* Gender */}
            <p className="text-gray-700 flex items-center mb-2">
              <FaVenusMars className="mr-2 text-purple-500" />
              <span className="font-semibold">Gender:</span>{" "}
              {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)}
            </p>

            {/* Phone */}
            <p className="text-gray-700 flex items-center mb-2">
              <FaPhoneAlt className="mr-2 text-green-500" />
              <span className="font-semibold">Phone:</span> {userData.phone}
            </p>

            {/* Email */}
            <p className="text-gray-700 flex items-center mb-2">
              <FaEnvelope className="mr-2 text-blue-500" />
              <span className="font-semibold">Email:</span> {userData.email}
            </p>

            {/* Address */}
            <p className="text-gray-700 flex items-start mb-2">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              <span className="font-semibold">Address:</span>{" "}
              {userData.location.city}, {userData.location.state},{" "}
              {userData.location.country}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
