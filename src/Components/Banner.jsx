import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner.svg)` }}
            className='bg-cover bg-no-repeat lg:bg-[70%] md:bg-[0%] sm:bg-[40%] bg-[50%]'
        >
            <div className='lg:px-16 md:px-12 sm:px-10 px-8 lg:pt-[225px] md:pt-[210px] 
                sm:pt-44 pt-40 lg:text-start lg:pb-20 md:pb-16 sm:pb-14 pb-12
                md:text-start sm:text-start text-center' data-aos="zoom-in" data-aos-duration="2000"
            >
                <div className='flex items-center lg:justify-start md:justify-start 
                    sm:justify-start justify-center flex-col sm:flex-row md:flex-row lg:flex-row
                    lg:mb-6 md:mt-6 sm:mt-6 mt-6'
                >
                    <h4 className='lg:text-6xl md:text-6xl text-5xl text-white font-cursive'>
                        Odissi Spice
                    </h4>
                    <div className="border-b-[1px] border-[#a3a3a3] md:w-60 lg:w-60 w-48 ms-4 
                        lg:mt-0 md:mt-0 sm:mt-3 mt-3">
                    </div>
                </div>

                <div>
                    <h1 className='uppercase text-white font-bold lg:text-[50px] md:text-4xl sm:text-4xl
                        text-[26px] mt-3 font-josefin lg:leading-[50px]'
                    >
                        Welcome to our
                    </h1>
                    <h1 className='uppercase text-[#FE0024] font-bold lg:text-[50px] md:text-4xl sm:text-4xl
                        text-[26px] font-josefin lg:leading-[60px] md:leading-[50px] sm:leading-[40px]
                        leading-[35px] mb-12'
                    >
                        Indian food Hub
                    </h1>
                </div>

                <Link to='/about-us' className="bg-[#cb2228] text-white font-medium px-7 rounded-[30px]
                    text-[15px] hover:bg-white hover:text-[#cb2228] py-3"
                >
                    Read More
                </Link>
            </div>
        </section>
    )
}

export default Banner