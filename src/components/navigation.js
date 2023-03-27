import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'
import classNames from 'classnames';

import Search from '@components/Search';

const searchIndices = [{ name: `Pages`, title: `Pages` }]

export default function() {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const mobileMenuClass = classNames(styles.mobileMenuNav, {
    [styles.mobileMenuNavExpanded]: showMobileMenu,
  });

  const navigationWrapperClass = classNames(styles.navigationWrapper, {
    [styles.navigationWrapperExpanded]: showMobileMenu,
  })

  const handleMobileMenuClick = () => {
    console.log('clicked it', showMobileMenu)
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <div className={navigationWrapperClass}>

      <nav role="navigation" className={classNames("wrapper", styles.navigationContainer)}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}>
              <Link to="/">Joe Geringer</Link>
            </li>
            <li className={styles.mobileMenu}>
              <div className={styles.mobileMenuButton} onClick={() => handleMobileMenuClick() }>
                <div className={styles.hamburgerMenu}><span></span><span></span><span></span></div>
              </div>
            </li>
          </ul>
          <ul className={mobileMenuClass}>
            <li onClick={() => handleMobileMenuClick() } className={styles.closeButton}>
              <div className={classNames(styles.hamburgerMenu, styles.hamburgerMenuClose)}><span></span><span></span><span></span></div>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/blog/" onClick={() => handleMobileMenuClick() }>Journal</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/kitchen" onClick={() => handleMobileMenuClick() }>Kitchen</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/pizzas" onClick={() => handleMobileMenuClick() }>Chicago Pizzas</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/resume" onClick={() => handleMobileMenuClick() }>Resume</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/contact" onClick={() => handleMobileMenuClick() }>Contact</Link>
            </li>
            <li className={styles.navigationItem}>
              <Search indices={searchIndices} />
            </li>
          </ul>
        </nav>
      </div>
  );
}
