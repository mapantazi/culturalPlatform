import React, {useEffect, useState} from "react";
import { useTranslation  } from "react-i18next";
import eventsData from "../data/events.json";

const Activities = () => {
    const { t, i18n } = useTranslation(); 
    const isEn = i18n.language?.startsWith("en");

  const events = eventsData;

  return (                                                                                             
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        {t("activities.upcoming_events")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img
              src={event.image}
              alt={
                isEn 
                ? (event.title_en || event.title) 
                : event.title
              }
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {isEn 
                ? (event.title_en || event.title) 
                : event.title
                }
              </h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-600">
                {isEn 
                ? (event.location_en || event.location) 
                :event.location}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                {isEn 
                ? (event.description_en || event.description) 
                : event.description
                }
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
