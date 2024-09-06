import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeadphones } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { useSelector } from 'react-redux';

const Footer = () => {
    const { allFooterNav } = useSelector(state => state.navs);

    return (
        <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/footer_bg.svg)` }}
            className='bg-cover bg-no-repeat bg-[70%]'
        >
            <Link className='flex items-center justify-center lg:pt-16 md:pt-20 sm:pt-20 pt-24' to='/'>
                <img className="lg:w-[180px] md:w-[150px] w-28"
                    src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logo"
                />
            </Link>

            <div className="grid grid-cols-12 lg:px-16 md:px-12 sm:px-10 px-8 lg:py-14 md:py-10 sm:py-8 py-6">
                <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="flex flex-col justify-between">
                        <h4 className='text-[22px] font-medium text-white mb-6 font-josefin'>
                            Our Address
                        </h4>

                        <p className='text-[15px] font-normal font-josefin text-white leading-7'>
                            385/29 Moo 10 Thappaya Road, South Pattaya, Adjoining The Sun Xclusive, Nongprue
                            Banglamung Chonburi, Thailand 20150
                        </p>

                        <div className='flex items-center mt-10'>
                            <p className='font-medium text-lg text-white'>Follow Us On </p>
                            <Link to='https://www.facebook.com/people/Odissi-Spice-Indianfood/pfbid031Xyo7EKYQNiDLrsejUfjwZEokFWEgNo8N1RWz5YJkTKZYqSFiFgaWoCtSkQiA7XAl/?mibextid=ZbWKwL'>
                                <img className='ms-3' src={`${process.env.PUBLIC_URL}/assets/facebook.svg`} alt="Facebook" />
                            </Link>

                            <Link to='https://www.tiktok.com/@odissi.spice.indi?_t=8oSEZuiSyAL&_r=1'>
                                <img className='ms-3' src={`${process.env.PUBLIC_URL}/assets/tiktok.svg`} alt="Tiktok" />
                            </Link>

                            <Link to='#'>
                                <img className='ms-3' src={`${process.env.PUBLIC_URL}/assets/insta.svg`} alt="Insta" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:ps-6 md:ps-8
                    lg:pt-0 md:pt-0 sm:pt-10 pt-10"
                >
                    <h4 className='text-[22px] font-medium text-white mb-6 font-josefin'>
                        Quick Links
                    </h4>

                    <div className="flex flex-col text-start gap-3">
                        {allFooterNav?.map((footer, index) => (
                            <Link key={index} to={`/${footer?.title === 'Menu' ? 'main-menu'
                                : footer.title === 'Order Online' ? 'contactus' : footer.slug}`}
                                className="text-[17px] font-josefin font-normal text-white hover:opacity-70"
                            >
                                {footer?.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-4 md:col-span-12 sm:col-span-12 col-span-12 lg:pt-0 md:pt-12">
                    <h4 className='text-[22px] font-medium text-white mb-6 font-josefin lg:pt-0 md:pt-0 
                        sm:pt-10 pt-10'
                    >
                        Contact Us
                    </h4>

                    <div className='flex text-white items-center'>
                        <FaHeadphones size={20} className='cursor-pointer hover:opacity-70' />
                        
                        <Link to="tel:+66 88 628 0665" className='ms-2.5 text-white lg:text-[17px]
                            md:text-[17px] sm:text-[17px] text-sm'
                        >
                            +66 88 628 0665,
                        </Link>

                        <Link to="tel:+66 83 460 4368" className='ms-2.5 text-white lg:text-[17px]
                            md:text-[17px] sm:text-[17px] text-sm'
                        >
                            +66 83 460 4368
                        </Link>

                    </div>

                    <div className='flex text-white items-center mt-3'>
                        <TfiEmail size={20} className='cursor-pointer hover:opacity-70' />

                        <Link to="mailto:sjvkhospitality@gmail.com" className='ms-2.5 text-white text-[17px]'>
                            sjvkhospitality@gmail.com
                        </Link>
                    </div>

                    <div className='pt-6'>
                        <img src={`${process.env.PUBLIC_URL}/assets/Paytm.svg`} alt="Paytm"
                            className="w-[120px] rounded-[10px]"
                        />
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center lg:mt-12 md:mt-10 mt-8'>
                <p className='text-white font-josefin text-[15px] font-normal text-center'>
                    Copyright © 2024. All Reserved by Odissi Spice
                    <span> Design by </span>
                    <Link to="http://www.betasofttechnology.com/" className='text-[#cc2228]'>
                        Beta Soft Technology
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default Footer