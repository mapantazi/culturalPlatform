import React from 'react'
import { FaGripLinesVertical } from "react-icons/fa";
import "./NavBar.css"
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export const NavBar = () => {
  const { t } = useTranslation();

  return (

    <div className="navBar">
        {/* Logo Image */}
        <img 
        src="photos/icon/icon-mountain.png"
        alt="Zagoras Logo" 
        style={{ width: '50px', height: '50px', marginRight: '10px' }} 
        />               
      
        <div>Zagoras Cooperations</div>  
        <FaGripLinesVertical /> 
        
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : undefined}>{t("nav.home")}</NavLink>
        <NavLink to="/about-Zagora" className={({isActive}) => isActive ? 'active' : undefined}>{t("nav.about")}</NavLink>
        <NavLink to="/activities" className={({isActive}) => isActive ? 'active' : undefined}>{t("nav.activities")}</NavLink>
        <NavLink to="/map" className={({isActive}) => isActive ? 'active' : undefined}>{t("nav.map")}</NavLink>
        <NavLink to="/plan-your-trip" className={({isActive}) => isActive ? 'active' : undefined}>{t("nav.plan")}</NavLink>
        <NavLink to="/experiences" className={({isActive}) => isActive ? 'active' : undefined}>{t("nav.experiences")}</NavLink>

        <div className="language-switcher">
          <button onClick={() => i18n.changeLanguage('el')}>GR</button>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>
    </div>
  )
}
