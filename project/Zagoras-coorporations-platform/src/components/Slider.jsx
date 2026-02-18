import React, { useState, useEffect, useRef } from 'react';
import {  useTranslation } from 'react-i18next';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


export const Slider = () => {
    const { t, i18n } = useTranslation();

    const slides = [
        {   url: 'photos/slider/womens.jpg',  titleKey: "slider.womens" },
        {   url: 'photos/slider/zagorin.jpg', titleKey: "slider.zagorin" },
        {   url: 'photos/slider/bibliothiki.jpg', titleKey: "slider.bibliothiki" },
        {   url: 'photos/slider/projectZ.jpg', titleKey: "slider.projectZ" },
        {   url: 'photos/slider/zagorin-apples1.jpg', titleKey: "slider.zagorin-apples1" },
        {   url: 'photos/slider/magazaki.jpg', titleKey: "slider.magazaki" }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);

      const timeoutRef = useRef(null);

      useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex(prev => (prev + 1) % slides.length);
        }, 6000);                                                    // change after 6 sec
        return () => clearTimeout(timeoutRef.current);
      }, [currentIndex, slides.length]);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

  return (
    <div className='max-w-[1200px] h-[700px] w-full m-auto px-2 relative group'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
    ></div>
    {/* Text on top of the image */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-[1150px] bg-black/50 text-white p-4 font-bold text-xl font-serif">
          <h2 className="text-3xl font-bold">
            {t(slides[currentIndex].titleKey)}
          </h2>
      </div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className={`text-2xl cursor-pointer ${
            slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-400'
          }`}
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
);
}
