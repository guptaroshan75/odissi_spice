import React from 'react'
import { useSelector } from 'react-redux';

const Proposition = () => {
    const { allSpecialProposition } = useSelector(state => state.proposition)

    const rawHtml = allSpecialProposition?.[0]?.title?.rendered || '';
    const highlightText = (htmlString, textToHighlight) => {
        const regex = new RegExp(`(${textToHighlight})`, 'gi');
        return htmlString.replace(regex, `<div class='text-[#CC2228] pt-3
            lg:text-3xl md:text-2xl sm:text-3xl text-[23px]'>$1</div>`);
    };
    const highlightedHtml = highlightText(rawHtml, 'ODISSI SPICE');

    return (
        <section className='bg-cover bg-no-repeat bg-[70%] lg:pt-[75px] md:pt-12 sm:pt-10 pt-8 mb-14'
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/propostion_bg.svg)` }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='bg-white lg:ps-6 md:ps-6 sm:px-10 px-8 lg:pt-5 pt-0 m-auto'>
                    <h4 className='font-cursive text-[#CC2228] font-normal text-[40px]'>
                        {allSpecialProposition?.[0]?._designation}
                    </h4>

                    <h3 className='font-josefin text-3xl font-bold pt-2.5'>
                        <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
                    </h3>

                    <div className='lg:text-sm md:text-sm sm:text-sm text-xs font-sans prepostion pt-3.5 pb-3'
                        dangerouslySetInnerHTML={{ __html: allSpecialProposition?.[0]?.content?.rendered }}
                    />
                </div>

                <img src={`${process.env.PUBLIC_URL}/assets/propostion_img.svg`} alt="propostion_img"
                    className='lg:pt-0 md:pt-0 sm:pt-5 pt-5 lg:px-0 md:px-0 sm:px-10 px-8'
                />
            </div>
        </section>
    )
}

export default Proposition