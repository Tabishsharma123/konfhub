/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const WorkshopModal = ({ workshop, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg md:max-w-2xl mx-4 md:mx-0">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl md:text-2xl font-bold">{workshop.title}</h2>
          <button onClick={onClose} className="text-xl md:text-2xl">
            &times;
          </button>
        </div>
        <p className="text-gray-600 mb-2">
          {new Date(workshop.date).toLocaleString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "Asia/Kolkata",
          })}{" "}
          (IST)
        </p>
        <a
          href={workshop.url}
          className="text-blue-500 hover:underline mb-4 block"
        >
          {workshop.url}
        </a>
        <p className="mb-6">{workshop.description}</p>
        {workshop.speaker && (
          <>
            <h3 className="text-lg md:text-xl font-bold mb-4">SPEAKERS</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src={workshop.speaker.image}
                  alt={workshop.speaker.name}
                  className="w-16 h-16 rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                <div className="text-center md:text-left">
                  <h4 className="font-bold">{workshop.speaker.name}</h4>
                  <p className="text-gray-600">{workshop.speaker.role}</p>
                  <p className="text-gray-600">{workshop.speaker.company}</p>
                  <div className="flex justify-center md:justify-start mt-2">
                    {["facebook", "twitter", "linkedin", "instagram"].map(
                      (social) => (
                        <a
                          key={social}
                          href="#"
                          className="mr-2 text-gray-400 hover:text-gray-600"
                        >
                          <i className={`fab fa-${social}`}></i>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkshopModal;
