/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

const TicketCard = ({
  type,
  description,
  venue,
  additionalDetails,
  availableUntil,
  price,
  handleAddTicket,
  handleRemoveTicket,
  selectedTickets,
}) => {
  const isSelected = selectedTickets.some(
    (t) => t.type === type && t.price === price
  );

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
        {isSelected ? (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleRemoveTicket({ type, price })}
              className="bg-white text-black border border-black py-1 px-2 rounded-full h-11 w-11 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
            >
              -
            </button>
            <button
              onClick={() => handleAddTicket({ type, price })}
              className="bg-white text-black border border-black py-1 px-2 rounded-full h-11 w-11 flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleAddTicket({ type, price })}
            className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

const TicketRegistration = ({ tickets = [] }) => {
  const navigate = useNavigate();
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openSections, setOpenSections] = useState({});

  const handleAddTicket = (ticket) => {
    setSelectedTickets((prevTickets) => {
      const existingTicket = prevTickets.find(
        (t) => t.type === ticket.type && t.price === ticket.price
      );
      if (existingTicket) {
        return prevTickets.map((t) =>
          t.type === ticket.type && t.price === ticket.price
            ? { ...t, quantity: t.quantity + 1 }
            : t
        );
      } else {
        return [...prevTickets, { ...ticket, quantity: 1 }];
      }
    });
  };

  const handleRemoveTicket = (ticket) => {
    setSelectedTickets((prevTickets) =>
      prevTickets
        .map((t) =>
          t.type === ticket.type && t.price === ticket.price
            ? { ...t, quantity: t.quantity - 1 }
            : t
        )
        .filter((t) => t.quantity > 0)
    );
  };

  const proceedToCheckout = () => {
    if (selectedTickets.length > 0) {
      navigate("/checkout", { state: { selectedTickets } });
    } else {
      alert("Please select at least one ticket to proceed.");
    }
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSection = (sectionKey) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [sectionKey]: !prevSections[sectionKey],
    }));
  };

  return (
    <div className="flex">
      {/* Middle - Ticket Section */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Ticket Registration</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="bg-gray-100 py-8" id="tickets">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">TICKETS</h2>
            {filteredTickets.length > 0 &&
              filteredTickets.map((ticket, index) => (
                <TicketCard
                  key={index}
                  type={ticket.type}
                  description={ticket.description}
                  venue={ticket.venue}
                  additionalDetails={ticket.additionalDetails}
                  availableUntil={ticket.availableUntil}
                  price={ticket.price}
                  handleAddTicket={handleAddTicket}
                  handleRemoveTicket={handleRemoveTicket}
                  selectedTickets={selectedTickets}
                />
              ))}

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
                  {/* Example Ticket Cards for Category 1 */}
                  <TicketCard
                    type="Free Ticket in Category1"
                    description="This is a ticket description. This is a free ticket. This ticket is categorized."
                    venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
                    additionalDetails="This is additional venue details."
                    availableUntil="31st Aug 2034, 06:00 PM IST"
                    price="FREE"
                    handleAddTicket={handleAddTicket}
                    handleRemoveTicket={handleRemoveTicket}
                    selectedTickets={selectedTickets}
                  />
                  <TicketCard
                    type="Paid Ticket in Category1"
                    description="This is a ticket description. This is a paid ticket. This ticket is categorised."
                    venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
                    additionalDetails="This is additional venue details."
                    availableUntil="31st Aug 2034, 06:00 PM IST"
                    price="₹1,000"
                    handleAddTicket={handleAddTicket}
                    handleRemoveTicket={handleRemoveTicket}
                    selectedTickets={selectedTickets}
                  />
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
                    content to make the description look longer. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer.
                  </p>
                  {/* Example Ticket Cards for Category 2 */}
                  <TicketCard
                    type="Free Ticket in Category2"
                    description="This is a ticket description. This is a free ticket. This ticket is categorised."
                    venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
                    additionalDetails="This is additional venue details."
                    availableUntil="31st Aug 2034, 06:00 PM IST"
                    price="FREE"
                    handleAddTicket={handleAddTicket}
                    handleRemoveTicket={handleRemoveTicket}
                    selectedTickets={selectedTickets}
                  />
                  <TicketCard
                    type="Paid Ticket in Category2"
                    description="This is a ticket description. This is a paid ticket. This ticket is categorised."
                    venue="KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India"
                    additionalDetails="This is additional venue details."
                    availableUntil="31st Aug 2034, 06:00 PM IST"
                    price="₹1,000"
                    handleAddTicket={handleAddTicket}
                    handleRemoveTicket={handleRemoveTicket}
                    selectedTickets={selectedTickets}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Cart */}
      <div className="w-80 p-8 bg-gray-200 h-screen sticky top-0">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {selectedTickets.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md">
            {selectedTickets.map((ticket, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <span>
                  {ticket.type} - {ticket.price} (x{ticket.quantity})
                </span>
                <button
                  onClick={() => handleRemoveTicket(ticket)}
                  className="bg-gray-300 text-black py-1 px-2 rounded-md hover:bg-gray-400 transition duration-300"
                >
                  -
                </button>
              </div>
            ))}
            <button
              onClick={proceedToCheckout}
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketRegistration;
