import React from 'react';
import { useTranslation } from 'react-i18next';
import { Slider } from '../components/Slider';



const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-100 text-gray-800 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        {t("home.title")}
      </h1>
      <p className="text-center text-xl italic mb-8">
        {t("home.quote")}
      </p>
      <div className="bg-gray-50 rounded-2xl shadow-md p-4 md:p-6 max-w-6xl mx-auto">
        <Slider />
      </div>
    </div>
  );
};

export default Home;