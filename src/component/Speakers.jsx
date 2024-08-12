/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Speakers = ({ eventData }) => {
  if (!eventData || !eventData.has_speakers) {
    return null;
  }

  // Mock data for speakers (since the API doesn't provide this)
  const speakers = [
    {
      name: "Bruce Wayne",
      designation: "Chairman",
      company: "Wayne Enterprises",
      image_url:
        "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
    },
    {
      name: "Dark Knight",
      designation: "Batman",
      company: "Gotham",
      image_url:
        "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
    },
  ];

  return (
    <div className="mt-8" id="speakers">
      <h2 className="text-2xl font-bold mb-4 uppercase">
        {eventData.speaker_section_title}
      </h2>
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{
          __html: eventData.speaker_section_description,
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {speakers.map((speaker) => (
          <div key={speaker.name} className="bg-white rounded-lg  p-6 border">
            <div className="flex items-start mb-4">
              <img
                src={speaker.image_url}
                alt={speaker.name}
                className="w-16 h-16 rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{speaker.name}</h3>
                <p className="text-gray-600">{speaker.designation}</p>
                <p className="text-blue-500">{speaker.company}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
