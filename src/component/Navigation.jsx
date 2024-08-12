import { useState } from "react";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("about");

  const tabClasses = (tab) =>
    `px-4 py-2 mx-4  ${
      activeTab === tab ? "border-b-2 border-black font-bold" : ""
    } text-gray-600 hover:bg-gray-300 transition-colors`;

  return (
    <nav className="flex border-b mt-6">
      <a
        href="#about"
        className={tabClasses("about")}
        onClick={() => setActiveTab("about")}
      >
        About
      </a>
      <a
        href="#tickets"
        className={tabClasses("tickets")}
        onClick={() => setActiveTab("tickets")}
      >
        Tickets
      </a>
      <a
        href="#speakers"
        className={tabClasses("speakers")}
        onClick={() => setActiveTab("speakers")}
      >
        This is speaker section
      </a>
      <a
        href="#workshops"
        className={tabClasses("workshops")}
        onClick={() => setActiveTab("workshops")}
      >
        This is workshop section
      </a>
      <a
        href="#sponsors"
        className={tabClasses("sponsors")}
        onClick={() => setActiveTab("sponsors")}
      >
        This is event sponsors
      </a>
    </nav>
  );
}
