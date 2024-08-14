/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const TicketCard = ({
  type,
  description,
  venue,
  additionalDetails,
  availableUntil,
  price,
  onAddTicket,
  quantity,
  onRemoveTicket,
}) => {
  return (
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
        {quantity > 0 ? (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onRemoveTicket(type)}
              className="bg-white text-black border border-black py-1 px-2 rounded-full h-8 w-8 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => onAddTicket(type)}
              className="bg-white text-black border border-black py-1 px-2 rounded-full h-8 w-8 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddTicket(type)}
            className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

const TicketRegistration = () => {
  const navigate = useNavigate();
  const [selectedTickets, setSelectedTickets] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [openSections, setOpenSections] = useState({
    uncategorized: true,
    category1: false,
    category2: true,
  });

  const allTickets = {
    uncategorized: [
      {
        type: "Free Ticket",
        description:
          "This is a ticket description. This is a free ticket. This ticket is uncategorised.",
        venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        additionalDetails: "This is additional venue details.",
        availableUntil: "31st Aug 2034, 06:00 PM IST",
        price: "FREE",
      },
      {
        type: "Paid Ticket",
        description:
          "This is a ticket description. This is a paid ticket. This ticket is uncategorised.",
        venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        additionalDetails: "This is additional venue details.",
        availableUntil: "31st Aug 2034, 06:00 PM IST",
        price: "₹1,000",
      },
      {
        type: "Donation Ticket",
        description:
          "This is a ticket description. This is a donation ticket. This ticket is uncategorised.",
        venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        additionalDetails: "This is additional venue details.",
        availableUntil: "31st Aug 2034, 06:00 PM IST",
        price: "Min ₹10 - Max ₹1,000",
      },
      {
        type: "Ticket With Coupon",
        description:
          "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
        venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        additionalDetails: "This is additional venue details.",
        availableUntil: "31st Aug 2034, 06:00 PM IST",
        price: "₹1,000",
      },
    ],
    category1: [
      {
        type: "Free Ticket in Category1",
        description:
          "This is a ticket description. This is a free ticket. This ticket is categorized.",
        venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        additionalDetails: "This is additional venue details.",
        availableUntil: "31st Aug 2034, 06:00 PM IST",
        price: "FREE",
      },
      {
        type: "Paid Ticket in Category1",
        description:
          "This is a ticket description. This is a paid ticket. This ticket is categorised.",
        venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        additionalDetails: "This is additional venue details.",
        availableUntil: "31st Aug 2034, 06:00 PM IST",
        price: "₹1,000",
      },
    ],
    category2: [
      {
        type: "Free Ticket in Category2",
        description:
          "This is a ticket description. This is a free ticket. This ticket is categorised.",
        venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        additionalDetails: "This is additional venue details.",
        availableUntil: "31st Aug 2034, 06:00 PM IST",
        price: "FREE",
      },
      {
        type: "Paid Ticket in Category2",
        description:
          "This is a ticket description. This is a paid ticket. This ticket is categorised.",
        venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        additionalDetails: "This is additional venue details.",
        availableUntil: "31st Aug 2034, 06:00 PM IST",
        price: "₹1,000",
      },
    ],
  };

  const handleAddTicket = (ticketType) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [ticketType]: (prev[ticketType] || 0) + 1,
    }));
  };

  const handleRemoveTicket = (ticketType) => {
    setSelectedTickets((prev) => {
      const newQuantity = (prev[ticketType] || 0) - 1;
      if (newQuantity <= 0) {
        const { [ticketType]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [ticketType]: newQuantity };
    });
  };

  const proceedToCheckout = () => {
    if (Object.keys(selectedTickets).length > 0) {
      navigate("/checkout", { state: { selectedTickets } });
    } else {
      alert("Please select at least one ticket to proceed.");
    }
  };

  const filteredTickets = Object.entries(allTickets).reduce(
    (acc, [category, tickets]) => {
      acc[category] = tickets.filter((ticket) =>
        ticket.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return acc;
    },
    {}
  );

  const toggleSection = (sectionKey) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [sectionKey]: !prevSections[sectionKey],
    }));
  };

  const renderTickets = (tickets) => {
    return tickets.map((ticket, index) => (
      <TicketCard
        key={index}
        {...ticket}
        onAddTicket={handleAddTicket}
        onRemoveTicket={handleRemoveTicket}
        quantity={selectedTickets[ticket.type] || 0}
      />
    ));
  };

  const totalAmount = Object.entries(selectedTickets).reduce(
    (total, [type, quantity]) => {
      const ticket = Object.values(allTickets)
        .flat()
        .find((t) => t.type === type);
      if (ticket && ticket.price !== "FREE") {
        return total + parseInt(ticket.price.replace(/[^0-9]/g, "")) * quantity;
      }
      return total;
    },
    0
  );

  return (
    <div className="flex border">
      {/* Ticket Section */}
      <div className="flex-1 p-8">
        <button
          onClick={() => navigate("/")}
          className="text-lg bg-gray-100 text-gray-600 rounded-full p-1.5 hover:bg-gray-200 transition duration-200 mb-4"
        >
          <FaArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-4">
          KonfHub Frontend Evaluation Task
        </h1>
        <p className="text-gray-600 mb-4">
          31st Jul, 2034 at 6:00 AM IST to 31st Aug, 2034 at 6:00 PM IST
        </p>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for tickets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="bg-gray-100 py-8" id="tickets">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">TICKETS</h2>

            {/* Uncategorized Tickets */}
            {renderTickets(filteredTickets.uncategorized)}

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
                  {renderTickets(filteredTickets.category1)}
                </div>
              )}
            </div>

            {/* Category 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">
                  This is also a category. But with a little longer name. Also
                  note, this category expanded by default.
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
                    content to make the description look longer.
                  </p>
                  {renderTickets(filteredTickets.category2)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Summary */}
      <div className="w-80 p-8 bg-gray-100 h-screen sticky top-0">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Ticket Summary</h2>
          {Object.keys(selectedTickets).length === 0 ? (
            <div className="text-center">
              <div className="text-gray-400 mb-4 ">
                <BsCart size={80} />
              </div>
              <p className="text-gray-600">You haven't selected any ticket.</p>
              <p className="text-gray-600">
                Select a ticket to see the ticket summary.
              </p>
            </div>
          ) : (
            <>
              {Object.entries(selectedTickets).map(([type, quantity]) => (
                <div
                  key={type}
                  className="flex justify-between items-center mb-2"
                >
                  <span>{type}</span>
                  <span>x {quantity}</span>
                  <span>
                    {
                      allTickets.uncategorized.find((t) => t.type === type)
                        ?.price
                    }
                  </span>
                </div>
              ))}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center font-semibold">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>
            </>
          )}
          <button
            onClick={proceedToCheckout}
            className={`w-full mt-4 py-2 px-4 rounded-md ${
              Object.keys(selectedTickets).length > 0
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition duration-300`}
            disabled={Object.keys(selectedTickets).length === 0}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketRegistration;
