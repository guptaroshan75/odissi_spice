import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
    return (
        <section className='text-center lg:pt-12 pt-0 pb-16 md:pb-12 bg-contain bg-no-repeat relative'>
            <h4 className='font-cursive text-[#CC2228] font-normal text-[40px]'>Special  Features</h4>
            <h2 className='font-josefin text-3xl font-bold pt-2'>Our Speciality</h2>

            <div className='justify-end items-end absolute right-0 top-0 z-[-1] hidden lg:block md:block'>
                <img src={`${process.env.PUBLIC_URL}/features/feature_bg.svg`} alt="feature_bg"
                    className='lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px]'
                />
            </div>

            <div className="grid grid-cols-12 pt-8">
                <div className="lg:col-span-3 md:col-span-4 sm:col-span-12 col-span-12">
                    <div className='bg-cover bg-no-repeat lg:h-[524px] md:h-[360px] h-[410px] w-full bg-center'
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/features/feature_img1.svg)` }}
                    >
                        <Link to='/main-menu' className='flex justify-between lg:px-9 md:px-7 px-9 pt-8'>
                            <h2 className='font-medium text-xl text-white text-start leading-8 font-josefin'>
                                Classic Indian Available
                            </h2>
                            <img src={`${process.env.PUBLIC_URL}/features/arrow.svg`} alt="arrow"
                                className='w-8 h-8 rounded'
                            />
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-6 md:col-span-4 sm:col-span-12 col-span-12">
                    <div className='bg-cover bg-no-repeat lg:h-[524px] md:h-[360px] h-[410px] w-full bg-center'
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/features/feature_img2.svg)` }}
                    >
                        <Link to='/main-menu' className='flex justify-between lg:px-24 md:px-4 px-7 pt-8'>
                            <div className='flex flex-col'>
                                <h2 className='font-medium text-xl text-white text-start leading-8 
                                    font-josefin'
                                >
                                    Classic Continental
                                </h2>

                                <span className='font-medium text-xl text-white text-start font-josefin'>
                                    Available
                                </span>
                            </div>

                            <img src={`${process.env.PUBLIC_URL}/features/arrow.svg`} alt="arrow"
                                className='w-8 h-8 rounded'
                            />
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-3 md:col-span-4 sm:col-span-12 col-span-12">
                    <div className='bg-cover bg-no-repeat lg:h-[524px] md:h-[360px] h-[410px] bg-center'
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/features/feature_img3.svg)` }}
                    >
                        <Link to='/main-menu' className='flex justify-between lg:px-9 md:px-7 px-9 pt-8'>
                            <h2 className='font-medium text-xl text-white text-start leading-8 font-josefin'>
                                Classic  Chinese Available
                            </h2>
                            <img src={`${process.env.PUBLIC_URL}/features/arrow.svg`} alt="arrow"
                                className='w-8 h-8 rounded'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features