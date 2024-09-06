import React, { Fragment, useEffect, useState } from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { ImMobile } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { contactUs_Post } from '../redux/features/contactSlice';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', message: ''
    });
    const [formStatus, setFormStatus] = useState(null);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        const phonePattern = /^[0-9]{10}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.name) newErrors.name = "Please fill out this field.";
        if (!formData.phone) {
            newErrors.phone = "Please enter a telephone number.";
        } else if (!phonePattern.test(formData.phone)) {
            newErrors.phone = "Please enter a valid 10-digit phone number.";
        }
        if (!formData.email) {
            newErrors.email = "Please fill out this field.";
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setFormStatus({
                success: false,
                message: 'One or more fields have an error. Please check and try again.'
            });
            return;
        }

        setErrors({});
        setFormStatus(null);
        const form_data = {
            'your-name': formData.name, 'phone': formData.phone,
            'your-email': formData.email, 'your-message': formData.message
        }
        try {
            const response = await dispatch(contactUs_Post(form_data));
            console.log(response?.payload);
            if (response.payload && response?.payload?.status === 'error') {
                setFormStatus(errors.message || response?.payload?.message);
            }
            if (response.payload && response?.payload?.status === 'success') {
                setFormStatus(response?.payload);
                setFormData({ name: '', phone: '', email: '', message: '' });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Fragment>
            <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/menu_banner.svg)` }}
                className='bg-cover bg-no-repeat bg-[50%]'
            >
                <div className='lg:px-16 md:px-12 sm:px-10 px-4 lg:pt-[225px] md:pt-[210px] sm:pt-44
                    pt-44 lg:pb-20 md:pb-16 sm:pb-14 pb-12'
                >
                    <h2 className='text-white text-3xl font-bold mt-3 font-josefin text-center'>
                        Contact Us
                    </h2>
                </div>
            </section>

            <section style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/about_bg.svg)` }}
                className='bg-cover bg-no-repeat'
            >
                <div className='lg:px-16 md:px-12 sm:px-10 px-4 lg:pt-16 md:pt-12 sm:pt-8 pt-4'>
                    <div className="grid grid-cols-12 lg:gap-12 md:gap-10 gap-0">
                        <div className="lg:col-span-7 md:col-span-6 sm:col-span-12 col-span-12">
                            <h4 className='font-cursive text-[#CC2228] font-normal text-[40px]'>
                                Get In Touch
                            </h4>

                            <h2 className='font-josefin text-3xl font-bold pt-2 mb-2'>
                                Contact Us Today For
                                <strong className='text-[#CC2228]'> ODISSI SPICE</strong>
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <input name="name" type="name" placeholder="Name" autoComplete='name'
                                    className="w-full font-josefin rounded-md text-[#A4A4A4] mt-6 text-sm
                                    pt-3 pb-2.5 px-3 placeholder:text-[#A4A4A4] focus:outline-none"
                                    value={formData?.name} onChange={handleChange}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}

                                <input name="phone" type="number" autoComplete='phone' placeholder="Phone Number"
                                    className="w-full font-josefin rounded-md text-[#A4A4A4] mt-6 text-sm
                                    pt-3 pb-2.5 px-3 placeholder:text-[#A4A4A4] focus:outline-none"
                                    value={formData?.phone} onChange={handleChange}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}

                                <input name="email" type="email" placeholder="Email" autoComplete='email'
                                    className="w-full font-josefin rounded-md text-[#A4A4A4] mt-6 text-sm
                                    pt-3 pb-2.5 px-3 placeholder:text-[#A4A4A4] focus:outline-none"
                                    value={formData?.email} onChange={handleChange}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

                                <textarea id="message" name="message" placeholder="Message" maxLength='280'
                                    cols='40' rows='4' autoComplete='message' className="w-full font-josefin 
                                    rounded-md text-[#A4A4A4] text-sm mt-6 pt-3 pb-2.5 px-3 
                                    placeholder:text-[#A4A4A4] focus:outline-none border focus:border-[#3e3e3e]
                                    focus:text-[#3e3e3e] focus:ring-0 border-transparent"
                                    value={formData?.message} onChange={handleChange}
                                ></textarea>

                                <button type="submit" className="bg-[#cb2228] text-white font-medium py-2.5 
                                    rounded-[30px] text-[15px] hover:text-white hover:bg-black px-7 
                                    uppercase mt-6 mb-6 mx-auto flex"
                                >
                                    Submit
                                </button>

                                {formStatus && (
                                    <div className={`mt-6 bg-[#2d3c4b] font-josefin pt-1.5 pb-1 text-center
                                        ${formStatus.status === 'success' ?
                                            'text-white border-2 border-[#46b450]' :
                                            'text-[#dc3232] border-2 border-[#ffb900]'}`
                                    }
                                    >
                                        {formStatus.message}
                                    </div>
                                )}
                            </form>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className='shadow-3xl pt-4 pb-3 lg:px-0 md:px-0 sm:px-0 px-4 rounded-md'>
                                <div className='flex items-center'>
                                    <FaLocationArrow size={30} className='text-[#cc2228] w-[12%]' />

                                    <div className='w-[88%]'>
                                        <h3 className='lg:text-xl md:text-base text-black font-bold 
                                            font-josefin ms-3'
                                        >
                                            385/29 Moo 10 Thappaya Road, South Pattaya, Adjoining The Sun
                                            Xclusive, Nongprue Banglamung Chonburi, Thailand 20150
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className='shadow-3xl pt-4 pb-3 lg:px-0 md:px-0 sm:px-0 px-4 rounded-md'>
                                <div className='flex items-center'>
                                    <FaEnvelopeOpenText size={30} className='text-[#cc2228] w-[12%]' />

                                    <div className='w-[88%]'>
                                        <h3 className='lg:text-xl md:text-base text-black font-bold 
                                            font-josefin ms-3'
                                        >
                                            <Link to="mailto:sjvkhospitality@gmail.com">
                                                sjvkhospitality@gmail.com
                                            </Link>
                                        </h3>
                                        <h3 className='lg:text-xl md:text-base text-black font-bold 
                                            font-josefin ms-3'
                                        >
                                            <Link to="mailto:kbmahanta@hotmail.com">
                                                kbmahanta@hotmail.com
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className='shadow-3xl pt-4 pb-3 lg:px-0 md:px-0 sm:px-0 px-4 rounded-md'>
                                <div className='flex items-center'>
                                    <ImMobile size={30} className='text-[#cc2228] w-[12%]' />

                                    <div className='w-[88%]'>
                                        <h3 className='lg:text-xl md:text-base text-black font-bold
                                            font-josefin ms-3'
                                        >
                                            <Link to="tel:+66 88 628 0665">
                                                +66 88 628 0665,
                                            </Link>
                                        </h3>
                                        <h3 className='lg:text-xl md:text-base text-black font-bold 
                                            font-josefin ms-3'
                                        >
                                            <Link to="tel:+66 83 460 4368">
                                                +66 83 460 4368
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <img src={`${process.env.PUBLIC_URL}/assets/contact_img.svg`} alt="contact_img"
                                className='rounded-lg mt-6 lg:mx-0 md:mx-0 mx-auto'
                            />
                        </div>
                    </div>
                </div>

                <img src={`${process.env.PUBLIC_URL}/assets/about-left_img.svg`} alt="About_Image1"
                    className='w-[117px] relative lg:mt-0 md:mt-0 sm:mt-4 mt-5'
                />
            </section>
        </Fragment>
    )
}

export default ContactUs