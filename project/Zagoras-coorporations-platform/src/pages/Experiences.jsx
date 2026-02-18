import React from 'react';
import { useTranslation } from 'react-i18next';

const Experiences = () => {
  const { t, i18n } = useTranslation();
  const reviews = t("experiences.reviews", {returnObjects: true})
  const userImg = "photos/user/default-user.jpg";

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-6">{t("experiences.title")}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={review.image || userImg}
            alt={review.title || review}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{review.title}</h3>
            <h3 className="text-xl text-gray-600">{review.review}</h3>
            <p className="text-gray-600">{review.date} - {review.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Experiences;