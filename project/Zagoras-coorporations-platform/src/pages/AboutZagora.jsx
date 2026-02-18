import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutZagora = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 px-4 py-8 max-w-4xl mx-auto">
      
      <h1 className = "text-3xl font-bold text-center mb-6"> 🌿 {t("about_zagora.title")} 🍎</h1>

      <p className = "mb-4 leading-relaxed text-lg">{t("about_zagora.paragraph1")}</p>     
      <p className = "mb-4 leading-relaxed text-lg">{t("about_zagora.paragraph2")}</p>    
      <p className = "mb-4 leading-relaxed text-lg">{t("about_zagora.paragraph3")}</p>

      <h2 className = "text-2xl font-semibold mt-10 mb-2"> ℹ️ {t("about_zagora.quick_facts_title")}</h2>
      <ul className = "list-disc list-inside ml-4 text-base mb-6">
        {t("about_zagora.quick_facts", { returnObjects: true }).map((facts, idx) => (
          <li key={idx}>{facts}</li>
        ))}
      </ul>
    
    </div>
  );
};

export default AboutZagora;