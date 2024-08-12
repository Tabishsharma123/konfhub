/* eslint-disable react/prop-types */
export default function Hero({ eventData }) {
  return (
    <div>
      <div className="border  ">
        <h1 className="text-2xl font-bold mb-4">{eventData.name}</h1>
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
            Online
          </span>
          <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
            Paid
          </span>
        </div>
        <p className="text-sm mb-2">
          Event Live Link:{" "}
          <a href={eventData.event_live_link} className="text-blue-600">
            Open streaming website
          </a>
        </p>
        <p className="text-sm mb-4">
          Date: {new Date(eventData.start_date).toLocaleDateString()} -{" "}
          {new Date(eventData.end_date).toLocaleDateString()}{" "}
          {eventData.time_zone}
        </p>
        <div className="mb-4">
          <p className="font-bold text-sm">EVENT STARTS IN</p>
          <p className="text-2xl font-bold">3641D : 16H : 14M : 51S</p>
        </div>
      </div>
      <div className="p-2 mt-1">
        <button className="bg-black text-white w-full py-2 rounded mb-2">
          Buy Now
        </button>
      </div>
      <div className="space-x-2 mb-2">
        <button className="border border-black w-full py-2 rounded">
          Official Website
        </button>
      </div>
    </div>
    // </div>
  );
}
