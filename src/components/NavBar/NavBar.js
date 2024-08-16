import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.NavBar} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.NavBarContainer}>
        {isMobile ? (
          <div className={styles.Hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <ul className={styles.NavList}>
            <a href="#tour"><li>Tour</li></a>
            <a href="#newmusic"><li>New Music</li></a>
            <a href="#store"><li>Store</li></a>
            <a href="#videos"><li>Videos</li></a>
            <a href="#ourmission"><li>Our Mission</li></a>
          </ul>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <div className={styles.MobileMenu}>
          <ul className={styles.MobileNavList}>
            <a href="#tour" onClick={toggleMenu}><li>Tour</li></a>
            <a href="#newmusic" onClick={toggleMenu}><li>New Music</li></a>
            <a href="#store" onClick={toggleMenu}><li>Store</li></a>
            <a href="#videos" onClick={toggleMenu}><li>Videos</li></a>
            <a href="#ourmission" onClick={toggleMenu}><li>Our Mission</li></a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
