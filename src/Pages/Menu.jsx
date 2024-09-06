import React, { Fragment, useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useSelector } from 'react-redux';
import CollapseCom from '../Components/CollapseCom';

const Menu = () => {
    const [open, setOpen] = useState(0);
    const { allMenus } = useSelector(state => state?.menuCat);

    const toggle = (index) => {
        if (open === index) { return setOpen(null) }
        setOpen(index)
    }

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
                        Menu
                    </h2>
                </div>
            </section>

            <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/about_bg.svg)` }}
                className='bg-cover bg-no-repeat bg-[70%]'
            >
                <div className="lg:px-16 md:px-12 sm:px-10 px-8 lg:py-16 md:py-12 sm:py-8 py-4 w-full">
                    {allMenus?.map((menu, index) => (
                        <div className="pt-5" key={index}>
                            <div className={`bg-white flex justify-between items-center px-4 py-2
                                cursor-pointer shadow-md ${open === index ? 'shadow-md' : 'rounded'}`}
                                onClick={() => toggle(index)}
                            >
                                <h3 className="text-lg font-bold text-black font-josefin mt-1">
                                    {menu?.name}
                                </h3>

                                <Fragment>
                                    {open === index ? (
                                        <div className='bg-[#cb2228] w-7 h-7 rounded-md flex items-center
                                            justify-center'
                                        >
                                            <MdOutlineKeyboardArrowDown size={28} className='text-white' />
                                        </div>
                                    ) : (
                                        <div className='bg-[#cb2228] w-7 h-7 rounded-md flex items-center
                                            justify-center'
                                        >
                                            <MdOutlineKeyboardArrowUp size={28} className='text-white' />
                                        </div>
                                    )}
                                </Fragment>
                            </div>

                            <CollapseCom open={open} index={index} menu={menu} />
                        </div>
                    ))}
                </div>
            </section>
        </Fragment>
    )
}

export default Menu