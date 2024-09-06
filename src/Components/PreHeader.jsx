import React, { useEffect } from 'react'
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PreHeader = ({ isScrolled }) => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section className={`bg-[#00000069] fixed w-full lg:px-16 md:px-12 py-2 justify-between items-center 
            ${isScrolled ? 'hidden' : 'hidden md:flex'}`}
        >
            <div className='flex items-center'>
                <div className='flex'>
                    <img className='w-4' src={`${process.env.PUBLIC_URL}/assets/location.svg`} alt='location' />
                    <p className='pl-5 text-white text-[13px] font-sans' data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        Nongprue Banglamung Chonburi, Thailand 20150
                    </p>
                </div>

                <div className='flex ml-5'>
                    <img className='w-4' src={`${process.env.PUBLIC_URL}/assets/phone_icon.svg`} alt='location' />
                    <Link to="tel:+66 88 628 0665" className='ms-2 text-white text-[13px]'
                        data-aos="zoom-in" data-aos-duration="2000"
                    >
                        +66 88 628 0665,
                    </Link>

                    <Link to="tel:+66 83 460 4368" className='ms-2 text-white text-[13px]'
                        data-aos="zoom-in" data-aos-duration="2000"
                    >
                        +66 83 460 4368
                    </Link>
                </div>
            </div>

            <div className='flex space-x-4 text-white'>
                <Link to='https://www.facebook.com/people/Odissi-Spice-Indianfood/pfbid031Xyo7EKYQNiDLrsejUfjwZEokFWEgNo8N1RWz5YJkTKZYqSFiFgaWoCtSkQiA7XAl/?mibextid=ZbWKwL'>
                    <FaFacebookF size={15} className='cursor-pointer hover:opacity-70' />
                </Link>

                <Link to='https://www.tiktok.com/@odissi.spice.indi?_t=8oSEZuiSyAL&_r=1'>
                    <FaTiktok size={15} className='cursor-pointer hover:opacity-70' />
                </Link>

                <Link to='#'>
                    <FaInstagram size={15} className='cursor-pointer hover:opacity-70' />
                </Link>
            </div>
        </section>
    )

}

export default PreHeader