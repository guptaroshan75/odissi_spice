import React, { Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const AboutUs = () => {
    const { pathname } = useLocation();
    const showHeading = pathname === "/about-us";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Fragment>
            <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/menu_banner.svg)` }}
                className='bg-cover bg-no-repeat bg-[50%]'
            >
                {showHeading && (
                    <div className='lg:px-16 md:px-12 sm:px-10 px-8 lg:pt-[225px] md:pt-[210px] sm:pt-44
                        pt-44 lg:pb-20 md:pb-16 sm:pb-14 pb-12'
                    >
                        <h2 className='text-white text-3xl font-bold mt-3 font-josefin text-center'>
                            About Us
                        </h2>
                    </div>
                )}
            </section>

            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/about_bg.svg)` }}
                className='bg-cover bg-no-repeat bg-[70%]'
            >
                <div className='lg:px-16 md:px-12 sm:px-10 px-8 lg:py-12 md:py-8 py-7 pb-6'>
                    <div className="grid grid-cols-12">
                        <div className="lg:col-span-4 md:col-span-12 sm:col-span-12 col-span-12">
                            <img src={`${process.env.PUBLIC_URL}/assets/about_img.svg`} alt="About_Image1"
                                className="w-auto mx-auto mb-3"
                            />
                        </div>

                        <div className="lg:col-span-8  sm:col-span-12 col-span-12 lg:ps-[30px] ps-0">
                            <h4 className='font-cursive text-[#CC2228] font-normal text-[40px] lg:pt-8
                                md:pt-7 pt-6'
                            >
                                About Us
                            </h4>

                            <h2 className='font-josefin lg:text-3xl md:text-3xl sm:text-3xl text-[17px] 
                                font-bold pt-2'
                            >
                                The “<strong className='text-[#CC2228]'>ODISSI SPICE</strong>
                                ” celebrates the food of “home cooks” “street vendors”& Flavors of India.
                            </h2>

                            {showHeading ? (
                                <div className="lg:col-span-8 sm:col-span-12 col-span-12">
                                    <div className='lg:pt-8 md:pt-8 sm:pt-5 pt-4'>
                                        <p className='text-sm font-sans leading-7'>
                                            Mr. K. B. MAHANTA an accomplished Entrepreneur and influential
                                            figure in Hospitality industry, serves as a beacon of
                                            inspiration for young generation everywhere. Overcoming various
                                            challenges, he achieved remarkable success as a Director ,
                                            Dreamers Paradise Hotel & Resort and Partner of Regenta Central
                                            and Virasat Restaurant.
                                        </p>

                                        <p className='text-sm font-sans leading-7 mt-5'>
                                            Additionally, he holds the position of Vice President of Indian
                                            community Pattaya
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-12 md:text-start sm:text-start text-center">
                                    <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 
                                        lg:order-1 md:order-1 sm:order-1 order-2"
                                    >
                                        <div className='lg:pt-9 md:pt-9 sm:pt-6 pt-5'>
                                            <p className='text-sm font-sans leading-7'>
                                                Mr. K. B. MAHANTA an accomplished Entrepreneur and influential
                                                figure in Hospitality industry, serves as a beacon of
                                                inspiration for young generation everywhere. Overcoming various
                                                challenges, he achieved remarkable success as a Director ,
                                                Dreamers Paradise Hotel & Resort and Partner of Regenta Central
                                                and Virasat Restaurant.
                                            </p>

                                            <p className='text-sm font-sans leading-7 mt-5 mb-10'>
                                                Additionally, he holds the position of Vice President of
                                                Indian community Pattaya
                                            </p>

                                            <Link to='/about-us' className="bg-[#cb2228] text-white 
                                                px-7 rounded-[30px] text-[15px] hover:bg-white font-medium
                                                hover:text-[#cb2228] py-2"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 
                                        lg:order-2 md:order-2 sm:order-2 order-1"
                                    >
                                        <img src={`${process.env.PUBLIC_URL}/assets/about_img2.svg`}
                                            alt="About_Image1"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <img src={`${process.env.PUBLIC_URL}/assets/about-left_img.svg`} alt="About_Image1"
                    className='w-[117px] relative'
                />
            </div>
        </Fragment>
    )
}

export default AboutUs