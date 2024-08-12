import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HostInfo from "./component/HostInfo";
import Header from "./component/Header";
import Herosub from "./component/Herosub";
import Navigation from "./component/Navigation";
import Ticket from "./component/Ticket";
import Speakers from "./component/Speakers";
import Workshops from "./component/Workshops";
import Eventsponsors from "./component/Eventsponsors";
import "./App.css";
import Hero from "./component/Hero.jsx";
import Login from "./component/Login.jsx";
import Signup from "./component/Signup.jsx";

function App() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        setError("Error fetching event data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-600">{error}</div>;
  if (!eventData)
    return <div className="text-center py-20">No event data available</div>;

  return (
    <Router>
      <Routes>
        {/* Login and Signup routes without header */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main event route with header */}
        <Route
          path="/"
          element={
            <>
              <Header logo={eventData.navbar_icon} />
              <main className="container mx-auto px-4 py-6 flex">
                <div className="w-2/3 pr-8 overflow-y-auto h-screen custom-scrollbar">
                  <Herosub imageUrl={eventData.event_poster_url} />
                  <Navigation />
                  <div className="mt-8" id="about">
                    <h2 className="text-2xl font-bold mb-4">ABOUT EVENT</h2>
                    <div className="flex">
                      <div className="w-full">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: eventData.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <Ticket />
                  <Speakers eventData={eventData} />
                  <Workshops eventData={eventData} />
                  <Eventsponsors eventData={eventData} />
                </div>
                <div className="w-1/3 sticky top-0 h-screen space-y-6">
                  <Hero eventData={eventData} />
                  <HostInfo
                    name={eventData.organiser_name}
                    image={eventData.organiser_image_url}
                    description={eventData.organiser_info}
                  />
                </div>
              </main>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
