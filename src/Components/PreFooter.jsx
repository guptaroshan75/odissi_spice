import React from 'react'
import { Link } from 'react-router-dom'

const PreFooter = () => {
    return (
        <section className='lg:mt-20 lg:mb-12 md:mt-16 md:mb-12 my-10 lg:mx-16 md:mx-12 sm:mx-10 mx-8
            lg:text-start md:text-center sm:text-ceneter text-center bg_footer'
        >
            <div className='lg:ps-16 lg:py-16 md:py-12 py-8'>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-6 pb-6">
                    <div>
                        <h3 className='text-3xl font-josefin text-white font-bold mb-3 lg:text-start 
                            md:text-center'
                        >
                            Book your table
                            <strong className='text-[#CC2228]'> NOW!</strong>
                        </h3>

                        <p className='font-josefin text-[15px] font-normal leading-8 text-white lg:w-11/12 
                            md:w-9/12 w-11/12 lg:text-start md:text-center lg:mx-0 mx-auto mb-8'
                        >
                            Rationally encounter consequences that are extremely painful again is there are
                            anyone who loves other greater Pleasures
                        </p>

                        <Link to='/contactus' className="bg-[#cb2228] text-white font-medium px-7 mt-7
                            text-[15px] hover:bg-white hover:text-[#cb2228] py-3 font-sans rounded-[30px]"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>

                <img className='lg:hidden block mx-auto mt-5'
                    src={`${process.env.PUBLIC_URL}/assets/add-right.svg`} alt="Add-right" 
                />
            </div>
        </section>
    )
}

export default PreFooter