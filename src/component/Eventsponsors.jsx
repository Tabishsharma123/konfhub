/* eslint-disable react/prop-types */
const Eventsponsors = ({ eventData }) => {
  if (!eventData || !eventData.has_sponsors) {
    return null;
  }

  // Mock data for sponsors (since the API doesn't provide this)
  const sponsors = [
    {
      image_url:
        "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1200&q=75",
    },
  ];

  return (
    <div className="mt-8" id="sponsors">
      <h2 className="text-2xl font-bold mb-4 uppercase">
        {eventData.sponsor_section_title}
      </h2>
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{
          __html: eventData.sponsor_section_description,
        }}
      />
      <div className="flex flex-wrap gap-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg border border-gray-300"
            style={{ width: "200px", height: "120px" }} // Set a rectangular size
          >
            <img
              src={sponsor.image_url}
              alt="Sponsor"
              className="absolute inset-0 w-full h-full object-contain" // Scale image to fit the container
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 ">
          <p className="w-full my-4 border-t border-gray-300">
            SPONSOR <br></br>
            CATEGORY
          </p>
          <div
            className="relative bg-white rounded-lg border border-gray-300 mt-6"
            style={{ width: "200px", height: "120px" }} // Set a rectangular size
          >
            <img
              src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
              alt="Sponsor"
              className="absolute inset-0 w-full h-full object-contain" // Scale image to fit the container
            />
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Eventsponsors;
