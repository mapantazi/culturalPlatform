import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import eventsData from "../data/events.json";

const PlanYourTripPage = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const { t, i18n } = useTranslation();
  const  isEn = i18n.language?.startsWith("en");

  const events = eventsData;
  
  const onSignUp = (event) => {
    setSelectedEvents((prevSelected) => {      
      if (prevSelected.every((e) => e.title !== event.title)) {
        return [...prevSelected, event];
      }
      return prevSelected;
    });
  };

  const onSignOut = (event) => {
    setSelectedEvents((prevSelected) =>
      prevSelected.filter((e) => e.title !== event.title)
    );
  }


  return (
      <div className="max-w-6xl mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold text-center mb-6">{t("plan.title")}</h1>      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">         
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden w-80 mx-auto flex flex-col h-87">
              {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
            )}
          
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {isEn ? (event.title_en || event.title) : event.title}
                </h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
                <p className="text-gray-600 text-sm">
                  {isEn ? (event.location_en || event.location) : event.location}
                </p>
              </div>
          
              <button
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 mt-4 self-start"
                onClick={() => onSignUp(event)}
              >
                {t("plan.sign_in")}
              </button>
            </div>
          </div>
          ))}
        </div>
    
        <div className="p-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">{t("plan.event")}</th>
                <th className="border border-gray-300 p-2">{t("plan.location")}</th>
                <th className="border border-gray-300 p-2">{t("plan.time")}</th>
                <th className="border border-gray-300 p-2">{t("plan.actions")}</th>
              </tr>
            </thead>
            <tbody>

              {selectedEvents.sort((a, b) => new Date(a.date) - new Date(b.date)).map((event, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2 text-center">
                      {isEn ? (event.title_en || event.title) : event.title}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {isEn ? (event.location_en || event.location) : event.location}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">{event.date}</td>
                    <td className="border border-gray-300 p-2 text-center">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => onSignOut(event)}
                    >
                      {t("plan.sign_out")}
                    </button>
                  </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PlanYourTripPage;
