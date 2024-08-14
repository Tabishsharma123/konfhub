/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import WorkshopModal from "./WorkshopModal";

const Workshops = ({ eventData }) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  if (!eventData || !eventData.has_workshops) {
    return null;
  }

  // Mock data for workshops (since the API doesn't provide this)
  const workshops = [
    {
      title: "How to make more money",
      date: "2024-06-11T10:00:00",
      image_url:
        "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75",
      speaker_image:
        "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
      url: "#",
      description: "Detailed description of the workshop.",
      speaker: {
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
        name: "John Doe",
        role: "Lead Developer",
        company: "Tech Corp",
      },
    },
    {
      title: "How to fight crime",
      date: "2034-06-01T10:00:00",
      image_url:
        "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75",
      speaker_image:
        "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      url: "#",
      description: "Detailed description of the workshop.",
      speaker: {
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
        name: "John Doe",
        role: "Lead Developer",
        company: "Tech Corp",
      },
    },
    {
      title: "This is a workshop connected to a ticket",
      date: "2034-06-01T10:00:00",
      image_url:
        "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75",
      speaker_image:
        "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      url: "#",
      description: "Detailed description of the workshop.",
      speaker: {
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
        name: "John Doe",
        role: "Lead Developer",
        company: "Tech Corp",
      },
    },
  ];

  return (
    <div className="mt-8" id="workshops">
      <h2 className="text-2xl font-bold mb-4 uppercase">
        {eventData.workshop_section_title}
      </h2>
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{
          __html: eventData.workshop_section_description,
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <div
            key={workshop.title}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={workshop.image_url}
              alt={workshop.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{workshop.title}</h3>
              <p className="text-gray-600 mb-4">
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
              <div className="flex items-center mb-4">
                <img
                  src={workshop.speaker_image}
                  alt="Speaker"
                  className="w-8 h-8 rounded-full mr-2"
                />
              </div>
              <button
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
                onClick={() => setSelectedWorkshop(workshop)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedWorkshop && (
        <WorkshopModal
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </div>
  );
};

export default Workshops;
