import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ isScrolled }) => {
    const { allNav } = useSelector(state => state.navs);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Fragment>
            <nav className={`z-50 w-full ${isScrolled ? 'fixed bg-[#000000CC] md:mt-0' :
                'absolute md:mt-12'} md:fixed`}
            >
                <div className="mx-auto lg:px-16 md:px-12 sm:px-10 px-8">
                    <div className=" flex items-center justify-between" data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        <div className="absolute inset-y-0 right-0 flex items-center md:hidden top-32 w-full">
                            <button type="button" className="relative flex items-center rounded py-2 px-4 mt-1
                                justify-between text-white bg-[#6E1222] w-full lg:mt-0 md:mt-6 sm:mt-5"
                                onClick={toggleMenu}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="text-white font-josefin pt-1">Select Page</span>

                                {isMenuOpen ? (
                                    <RxCross2 size={30} />
                                ) : (
                                    <RiMenuLine size={30} />
                                )}
                            </button>
                        </div>

                        <div className="flex items-center justify-center md:items-stretch md:justify-start">
                            <div className="hidden md:block">
                                <div className="flex lg:space-x-16 md:space-x-8">
                                    {allNav?.slice(0, 3)?.map((nav, index) => (
                                        <div key={index}>
                                            <Link to={`/${nav?.title === 'Home' ? ''
                                                : nav.title === 'Menu' ? 'main-menu' : nav.slug}`}
                                                className=" font-normal text-white uppercase 
                                                hover:opacity-70 text-sm"
                                            >
                                                {nav?.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center md:items-stretch md:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to='/' className="">
                                    <img className={`w-auto ${isScrolled ? 'h-[82px]' :
                                        'lg:h-[150px] md:h-32 sm:h-28 h-24'}`
                                    } src={`assets/logo.svg`} alt='logo'
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center md:items-stretch md:justify-start">
                            <div className="hidden md:block">
                                <div className="flex lg:space-x-16 md:space-x-8">
                                    {allNav?.slice(3, 6)?.map((nav, index) => (
                                        <div key={index}>
                                            <Link to={`/${nav?.title === 'Order now' ? 'contactus'
                                                : nav.slug}`} className={`${nav?.title === 'Order now' ?
                                                    'bg-[#cb2228] text-white font-medium lg:px-7 md:px-4 uppercase rounded-[30px] text-[15px] hover:bg-white hover:text-[#cb2228] lg:py-3 md:py-2' :
                                                    'text-sm font-normal text-white uppercase hover:opacity-70'}`}
                                            >
                                                {nav?.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`md:hidden relative sm:top-14 top-16
                    ${isMenuOpen ? 'block bg-white md:mx-12 sm:mx-10 mx-8' : 'hidden'}`}
                >
                    <div className="px-2 py-3 border-t-4 border-[#cc2228]">
                        {allNav?.map((nav, index) => (
                            <div className="px-3 pt-[10px]" key={index}>
                                <Link to={`/${nav?.title === 'Home' ? '' : nav.title === 'Menu' ?
                                    'main-menu' : nav.slug}`} className="block rounded-md text-base 
                                    font-bold font-josefin" aria-current="page"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {nav?.title}
                                </Link>

                                <div className="border-b-[1px] border-[#00000008] pt-2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar