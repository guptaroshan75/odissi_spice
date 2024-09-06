import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';

const Testimonials = () => {
    const { isLoading, allTestimonials } = useSelector(state => state?.testimonial);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="bg-[#0b1315] relative lg:h-[440px] md:h-[350px] mt-6">
            <div className="grid grid-cols-12">
                <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12">
                    <img src={`${process.env.PUBLIC_URL}/assets/test_img.svg`} alt='test_image'
                        className='lg:absolute lg:-top-7 lg:w-[355px] md:absolute md:-top-3 md:w-[270px]
                        sm:w-full sm:-top-8 sm:relative sm:mx-auto lg:px-0 md:px-0 sm:px-10 px-8
                        w-full -top-8 relative mx-auto'
                    />
                </div>

                <div className="lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12">
                    <h4 className='font-cursive text-white font-normal text-[40px] lg:pt-8 md:pt-5 pt-0
                        text-center'
                    >
                        Customer
                    </h4>

                    <h2 className='font-josefin text-3xl text-center font-bold lg:pt-3 pt-0 text-white'>
                        Testimonials
                    </h2>

                    {isLoading ? (
                        <div className="flex justify-center mt-3 text-[#CC2228]">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <Carousel responsive={responsive} showDots={true} keyBoardControl={true} 
                            autoPlay={true} infinite={true} className='carousel_testimonials'
                        >
                            {allTestimonials?.map((testimonial) => (
                                <div key={testimonial?.id}>
                                    <div className='font-cursive lg:leading-10 lg:text-[33px] md:text-[28px]
                                        sm:text-[33px] text-center font-normal text-white lg:px-16 md:px-14
                                        sm:px-14 px-8 text-[24px] md:leading-10 sm:leading-10 leading-7'
                                    >
                                        <div dangerouslySetInnerHTML=
                                            {{ __html: testimonial?.content?.rendered }}
                                        />
                                    </div>

                                    <h3 className='text-xl uppercase font-josefin font-semibold 
                                        text-[#C9AB81] text-center pt-5 md:pt-4'
                                    >
                                        {testimonial?.title?.rendered}
                                    </h3>
                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Testimonials;