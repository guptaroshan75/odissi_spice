import React, { Fragment } from 'react';
import Proposition from './Proposition';
import Features from './Features';
import Banner from '../Components/Banner';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';

const HomePage = () => {

    return (
        <Fragment>
            <Banner />
            <AboutUs />
            <Proposition />
            <Features />
            <Testimonials />
        </Fragment>
    )
}

export default HomePage