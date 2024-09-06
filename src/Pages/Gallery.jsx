import React, { Fragment, useEffect, useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import GalleryTestimonials from '../Components/GalleryTestimonials';

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { allMedia } = useSelector(state => state.media)
    const filterMedia = allMedia?.filter(media => media?.title?.rendered === 'Odissi Spice Image Gallery') || [];

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePrevImage = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNextImage = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, filterMedia.length - 1));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Fragment>
            <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/menu_banner.svg)` }}
                className='bg-cover bg-no-repeat bg-[50%]'
            >
                <div className='lg:px-16 md:px-12 sm:px-10 px-8 lg:pt-[225px] md:pt-[210px] sm:pt-44
                    pt-44 lg:pb-20 md:pb-16 sm:pb-14 pb-12'
                >
                    <h2 className='text-white text-3xl font-bold mt-3 font-josefin text-center'>
                        Gallery
                    </h2>
                </div>
            </section>

            <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/about_bg.svg)` }}
                className='bg-cover bg-no-repeat'
            >
                <div className='lg:px-16 md:px-12 sm:px-10 px-8 lg:py-16 md:py-12 sm:py-10 py-8'>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-6">
                        {allMedia?.filter((media) => media?.title?.rendered === 'Odissi Spice Image Gallery')
                            ?.map((data, index) => (
                                <div to={data?.source_url} className="relative inline-block group"
                                    title={data?.title?.rendered} key={data?.id}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img src={data?.source_url} alt={data?.title?.rendered} className='h-[265px]
                                        w-[330px] object-cover border-white border-2 rounded-[20px] mx-auto
                                        transition-opacity duration-300 ease-in-out group-hover:bg-[#ffffffde]'
                                    />

                                    <div className='absolute inset-0 flex items-center justify-center opacity-0
                                        group-hover:opacity-100 transition-opacity duration-300 ease-in-out
                                        rounded-[20px] bg-[#ffffffde] '
                                    >
                                        <AiFillPlusCircle size={35} className='text-[#cc2228]' />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

            </section>

            <GalleryTestimonials isModalOpen={isModalOpen} currentIndex={currentIndex}
                onCloseModal={handleCloseModal} onPrevImage={handlePrevImage} onNextImage={handleNextImage}
            />
        </Fragment >
    )
}

export default Gallery