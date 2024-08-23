import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import SocialMedia from './components/SocialMedia/SocialMedia';
import AlbumCarousel from './components/AlbumCarousel/AlbumCarousel';
import VideoBanner from './components/VideoBanner/VideoBanner';
import TourSection from './components/TourSection/TourSection';
import BackToTop from './components/BackToTop/BackToTop';

export default function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <VideoBanner />
            <SocialMedia />
            <TourSection id="tour" />
            <AlbumCarousel />
            <SocialMedia />
            <BackToTop />
        </div>
    );
}
