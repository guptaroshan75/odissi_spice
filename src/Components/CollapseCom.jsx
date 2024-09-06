import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Collapse } from 'react-collapse';

const CollapseCom = ({ open, menu, index }) => {
    const { allMenuLists } = useSelector(state => state?.menuCat);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const getMenuBySort = allMenuLists
        ?.filter(item => item?.menu_category[0] === menu?.id)
        ?.sort((a, b) => a?.menu_order - b?.menu_order);

    return (
        <Collapse isOpened={open === index} className='mt-5'>
            <div className={`border-dashed border-[1px] rounded-lg border-[#D2D2D2] mt-5
                bg-white ${open === index ? 'shadow-md rounded-b' : ''}`}
            >
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 
                    lg:p-6 md:p-6 sm:p-6 p-3"
                >
                    {getMenuBySort?.map((data) => (
                        <div className='border-dashed border-b-[1px] border-[#D2D2D2] lg:static md:static 
                            sm:static relative lg:pb-4 md:pb-4 sm:pb-4 pb-12' key={data?.id}
                        >
                            <div className="flex lg:items-start md:items-start sm:items-start items-center 
                                lg:justify-between md:justify-between sm:justify-between justify-center 
                                lg:flex-row md:flex-row sm:flex-row flex-col"
                            >
                                <p className='lg:text-[17px] md:text-[17px] sm:text-[17px] text-sm
                                   font-semibold text-black'
                                >
                                    {data?.title?.rendered}
                                </p>

                                <div className='bg-[#CC2228] pt-0.5 px-[7px] pb-0.5 rounded-lg lg:static 
                                    md:static sm:static absolute bottom-0 mb-3'
                                >
                                    <span className='text-white font-josefin'>
                                        {data?._price}
                                    </span>
                                </div>
                            </div>

                            <div className='text-sm font-josefin text-black lg:mx-0 md:mx-0 sm:mx-0 mx-auto w-fit 
                                lg:pt-1.5 md:pt-1.5 sm:pt-1.5 pt-2.5 lg:text-start md:text-start sm:text-start 
                                text-center lg:-mt-3 md:-mt-3 sm:-mt-3 mt-0' 
                                dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Collapse>
    )
}

export default CollapseCom