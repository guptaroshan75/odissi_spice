import React, { Fragment, useEffect, useState } from 'react'
import './App.css';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Menu from './Pages/Menu';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';
import PreHeader from './Components/PreHeader';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import PreFooter from './Components/PreFooter';
import Footer from './Components/Footer';
import { useDispatch } from 'react-redux';
import { getAllMenu, getAllMenuList } from './redux/features/menuSlice';
import { getAllTestimonials } from './redux/features/testimonialsSlice';
import { getAllSpecialProposition } from './redux/features/propositionSlice';
import { getAllFooterMenu, getAllNav } from './redux/features/navSlice';
import { getAllMedia } from './redux/features/mediaSlice';

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNav())
        dispatch(getAllMenu());
        dispatch(getAllMenuList());
        dispatch(getAllTestimonials());
        dispatch(getAllSpecialProposition());
        dispatch(getAllMedia());
        dispatch(getAllFooterMenu())
    }, [dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            const isLargeScreen = window.innerWidth >= 768; 
            if (isLargeScreen) {
                setIsScrolled(window.scrollY > 0);
            } else {
                setIsScrolled(false); 
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <PreHeader isScrolled={isScrolled} />
            <Navbar isScrolled={isScrolled} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/main-menu' element={<Menu />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contactus' element={<ContactUs />} />
            </Routes>
            <PreFooter />
            <Footer />
        </Fragment>
    )
}

export default App