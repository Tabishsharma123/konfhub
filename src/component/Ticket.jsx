/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Make sure to install react-icons

const TicketCard = ({
  type,
  description,
  venue,
  additionalDetails,
  availableUntil,
  price,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-xl font-bold mb-2">{type}</h3>
    <p className="text-gray-600 mb-2">{description}</p>
    <div className="flex items-start mb-2">
      <FaMapMarkerAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
      <p className="text-blue-500">{venue}</p>
    </div>
    <p className="text-gray-600 mb-4">{additionalDetails}</p>
    <div className="bg-gray-100 text-gray-700 py-2 px-3 rounded inline-block mb-4">
      Available Till: {availableUntil}
    </div>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold">{price}</span>
      <button
        onClick={() => onselect({ type, price })}
        className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300"
      >
        {price === "FREE" ? "Register" : "Register"}
      </button>
    </div>
  </div>
);

const Ticket = () => {
  const [openSections, setOpenSections] = useState({}); // State to track open sections

  const toggleSection = (sectionKey) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [sectionKey]: !prevSections[sectionKey],
    }));
  };

  return (
    <div className="bg-gray-100 py-8" id="tickets">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">TICKETS</h2>

        {/* Uncategorised Tickets */}
        <TicketCard
          type="Free Ticket"
          description="This is a ticket description. This is a free ticket. This ticket is uncategorised."
          venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
          additionalDetails="This is additional venue details."
          availableUntil="31st Aug 2034, 06:00 PM IST"
          price="FREE"
        />
        <TicketCard
          type="Paid Ticket"
          description="This is a ticket description. This is a paid ticket. This ticket is uncategorised."
          venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
          additionalDetails="This is additional venue details."
          availableUntil="31st Aug 2034, 06:00 PM IST"
          price="₹1,000"
        />
        <TicketCard
          type="Donation Ticket"
          description="This is a ticket description. This is a donation ticket. This ticket is uncategorised."
          venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
          additionalDetails="This is additional venue details."
          availableUntil="31st Aug 2034, 06:00 PM IST"
          price="Min ₹10 - Max ₹1,000"
        />
        <TicketCard
          type="Ticket With Coupon"
          description="This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off."
          venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
          additionalDetails="This is additional venue details."
          availableUntil="31st Aug 2034, 06:00 PM IST"
          price="₹1,000"
        />

        {/* Category 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">This is a category</h2>
            <button
              onClick={() => toggleSection("category1")}
              className="text-lg bg-gray-100 text-gray-600 rounded-full p-1.5 hover:bg-gray-200 transition duration-200"
            >
              {openSections["category1"] ? "▲" : "▼"}
            </button>
          </div>

          {openSections["category1"] && (
            <div className="mt-4">
              <p className="text-gray-600 text-sm mb-2">
                This is category description. This category is collapsed by
                default.
              </p>
              <TicketCard
                type="Free Ticket in Category1"
                description="This is a ticket description. This is a free ticket. This ticket is categorized."
                venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
                additionalDetails="This is additional venue details."
                availableUntil="31st Aug 2034, 06:00 PM IST"
                price="FREE"
              />
              <TicketCard
                type="Paid Ticket in Category1"
                description="This is a ticket description. This is a paid ticket. This ticket is categorised."
                venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
                additionalDetails="This is additional venue details."
                availableUntil="31st Aug 2034, 06:00 PM IST"
                price="₹1,000"
              />
              {/* Add more TicketCard components as needed */}
            </div>
          )}
        </div>

        {/* Category 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">
              This is also a category. But with a little longer name. Also note,
              this category expanded by default.
            </h2>
            <button
              onClick={() => toggleSection("category2")}
              className="text-lg bg-gray-100 text-gray-600 rounded-full p-1.5 hover:bg-gray-200 transition duration-200"
            >
              {openSections["category2"] ? "▲" : "▼"}
            </button>
          </div>

          {openSections["category2"] && (
            <div className="mt-4">
              <p className="text-gray-600 text-sm mb-2">
                This is category description. This category is expanded by
                default. This is a little longer description. Adding more
                content to make the description look longer. Adding more content
                to make the description look longer. Adding more content to make
                the description look longer. Adding more content to make the
                description look longer. Adding more content to make the
                description look longer. Adding more content to make the
                description look longer.
              </p>
              <TicketCard
                type="Free Ticket in Category2"
                description="This is a ticket description. This is a free ticket. This ticket is categorised."
                venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
                additionalDetails="This is additional venue details."
                availableUntil="31st Aug 2034, 06:00 PM IST"
                price="FREE"
              />
              <TicketCard
                type="Paid Ticket in Category2"
                description="This is a ticket description. This is a paid ticket. This ticket is categorised."
                venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
                additionalDetails="This is additional venue details."
                availableUntil="31st Aug 2034, 06:00 PM IST"
                price="₹1,000"
              />
              {/* Add more TicketCard components as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
