import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "react-multi-carousel/lib/styles.css";
import { FaXmark } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const GalleryTestimonials = ({ isModalOpen, currentIndex, onCloseModal, onPrevImage, onNextImage }) => {
    const { allMedia } = useSelector(state => state.media)

    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);

        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen])

    const filteredMedia = allMedia?.filter(media => media?.title?.rendered ===
        'Odissi Spice Image Gallery') || [];
    return (
        <Fragment>
            {isModalOpen && (
                <div onClick={onCloseModal} className='fixed inset-0 bg-black bg-opacity-75 flex 
                    items-center justify-center z-50'
                >
                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-4 z-50
                        opacity-50 hover:opacity-100 cursor-pointer' disabled={currentIndex === 0}
                        onClick={(e) => { e.stopPropagation(); onPrevImage() }}
                    >
                        <MdOutlineArrowBackIos size={30} />
                    </div>

                    <div className='relative mt-10' data-aos="zoom-in" data-aos-duration="1000">
                        <button className='absolute -top-10 right-0 text-white text-2xl z-50
                            opacity-50 hover:opacity-100 cursor-pointer' onClick={onCloseModal}
                        >
                            <FaXmark size={30} />
                        </button>

                        <div className='flex justify-center'>
                            <img src={filteredMedia[currentIndex]?.source_url} className='lg:h-[500px]
                                md:h-[500px] sm:h-[470px] h-[410px] cursor-pointer object-cover'
                                alt={filteredMedia[currentIndex]?.title?.rendered}
                            />
                        </div>

                        <div className='flex justify-between items-center'>
                            <h3 className='font-josefin font-semibold text-[#f3f3f3] text-start 
                                lg:text-lg md:text-lg sm:text-lg text-base'
                            >
                                {filteredMedia[currentIndex]?.title?.rendered}
                            </h3>
                            {filteredMedia.length > 0 && (
                                <div className="text-[#f3f3f3] font-josefin lg:text-lg md:text-lg sm:text-lg 
                                    text-base"
                                >
                                    {currentIndex + 1} of {filteredMedia.length}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-4 z-50
                        opacity-50 hover:opacity-100 cursor-pointer'
                        disabled={currentIndex === filteredMedia.length - 1}
                        onClick={(e) => { e.stopPropagation(); onNextImage() }}
                    >
                        <MdOutlineArrowForwardIos size={30} />
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default GalleryTestimonials