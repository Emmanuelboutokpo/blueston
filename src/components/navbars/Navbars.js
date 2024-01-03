import React, {useContext, useState} from 'react';
import './navbars.css' 
import { NavLink, Link, useLocation} from "react-router-dom";
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BsHeart} from "react-icons/bs";
import { AuthContext } from '../../context/authContext';

const Navbars = ({cartLength, favoriteLength}) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { currentUser, handleLogout } = useContext(AuthContext);

  const isActiveLink = (linkPath) => {
    return location.pathname === linkPath;
  };



  return (
    <nav className="navigation">
  <div className="logo">
    <NavLink to="/" className='logoTitle'>AZ-EBOOKS</NavLink>
  </div>
  <ul className="navigation-menu-main">
     <li>
       <NavLink aria-current="page"  className={isActiveLink('/') ? 'navigation-menu-active' : ''} to="/">Accueil</NavLink>
     </li>
     <li>
       <NavLink to="/shop"  className={isActiveLink('/shop') ? 'navigation-menu-active' : ''}>Catalogue</NavLink>
     </li>
     <li> 
      <NavLink to="/about" className={isActiveLink('/about') ? 'navigation-menu-active' : ''}>A propos</NavLink>
     </li>
     <li>
      <NavLink to="/contact" className={isActiveLink('/contact') ? 'navigation-menu-active' : ''}>Contact</NavLink>
     </li>
     <li>
      <NavLink to="/create-pin" className={isActiveLink('/create-pin') ? 'navigation-menu-active' : ''}>Ecrire un article</NavLink>
     </li>
    { <li>
      <NavLink to="/audiobook" className={isActiveLink('/create-pin') ? 'navigation-menu-active' : ''}>Audio</NavLink>
     </li>}
  </ul>
  <div className="searchbar">
    <span role="img" aria-label="search" className="anticon anticon-search searchbar-icon">
      <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" /></svg>
      </span>
      <input className="search-input searchbar-input" placeholder="Search product..." type="text"  />
  </div>
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
            <Link className="badge" to="/cart">
              <span role="img" aria-label="shopping" className="anticon anticon-shopping" style={{ fontSize: '2.4rem' }}>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="shopping" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z" />
                </svg>
              </span>
              <span className="badge-count">{cartLength}</span>
            </Link>
            <Link className="badge" to="/favorite" style={{ marginLeft: '1.5rem' }}>
              <span role="img" aria-label="shopping" className="anticon anticon-shopping" style={{ fontSize: '2.4rem' }}>
                 <BsHeart />
              </span>
              <span className="badge-count">{favoriteLength}</span>
            </Link>
        </li>
        <li className="navigation-action">
         {(currentUser !== null) ? <button className="button button-small" onClick={handleLogout}>Deconnexion</button> : <Link className="button button-small" to="/signin">Se connecter</Link> }
           
        </li>
      </ul>
      
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX className='x-icon' onClick={() => setToggle(false)} />

            <ul>
              {['Accueil', 'Ecrire un Ebook', 'Catégories', "S'inscrire", 'Se connecter', 'Ecrire un article'].map((item) => (
                <li key={item}>
                  <Link to={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbars
