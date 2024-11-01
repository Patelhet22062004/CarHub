'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import royalImage from '../../../public/images/images/Review/Royals_Durga_1703848055.webp';
import sumonImage from '../../../public/images/images/Review/Sumon_Dey_1703847789.webp';
import ganeshImage from '../../../public/images/images/Review/Ganesh_Kaparaboina_1703844359.webp';
import kishanImage from '../../../public/images/images/Review/Kishan_Vaghela_1701938033.webp';
import shashiImage from '../../../public/images/images/Review/Shashi_Kumar_1701937959.webp';
import suryaImage from '../../../public/images/images/Review/Surya_Yadav_1701937885.webp';
import shashankImage from '../../../public/images/images/Review/Shashank_Bhole_1701937784.webp';
import mahiImage from '../../../public/images/images/Review/Mahi_Pawar_1693564541.webp';
import pruthviImage from '../../../public/images/images/Review/Pruthvi_Zala_1693564176.webp';

export default function App() {
    return (
        <section className='mx-auto flex my-10'>
            <Swiper 
                pagination={true} 
                modules={[Pagination]} 
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                }}>
                
                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6 my-[2px]">
                        <div className="flex items-center justify-center h-56">
                            <img src={royalImage} alt="Royals Durga Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">The diverse range of cars is impressive, my dream of owning a car has come true because of CARS24. Thank you!</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Royals Durga</p>
                        <p className="mt-2 text-center text-gray-500">Hyundai Grand i10</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center justify-center h-56">
                            <img src={sumonImage} alt="Sumon Dey Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">A big thank you to the entire team at CARS24 in helping me choose the charming Micra. Highly recommended. Thank you!</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Sumon Dey</p>
                        <p className="mt-2 text-center text-gray-500">Nissan Micra Active</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center justify-center h-56">
                            <img src={ganeshImage} alt="Ganesh Kaparaboina Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">Efficiently facilitated the loan process and streamlined the payment process, making the entire experience smooth. Thank you!</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Ganesh Kaparaboina</p>
                        <p className="mt-2 text-center text-gray-500">Volkswagen Polo</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center justify-center h-56">
                            <img src={kishanImage} alt="Kishan Vaghela Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">The wide range of cars available was impressive, and because of the finance team, I could easily buy a car. Thanks!</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Kishan Vaghela</p>
                        <p className="mt-2 text-center text-gray-500">Maruti Alto 800</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center justify-center h-56">
                            <img src={shashiImage} alt="Shashi Kumar Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">Offers top quality cars and provides amazing customer support. I will definitely recommend it to my friends. Thank you!</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Shashi Kumar</p>
                        <p className="mt-2 text-center text-gray-500">Jeep Compass</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center justify-center h-56">
                            <img src={suryaImage} alt="Surya Yadav Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">Helped me with the entire loan process because of which I got my dream car within a day. Really grateful to them. Thank you!</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Surya Yadav</p>
                        <p className="mt-2 text-center text-gray-500">MARUTI New Wagon-R</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center justify-center h-56">
                            <img src={shashankImage} alt="Shashank Bhole Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">Owing to CARS24's efficiency & transparency, I bought my first car within a day. Thank you for the great experience. Thank you!</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Shashank Bhole</p>
                        <p className="mt-2 text-center text-gray-500">Hyundai Creta</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center justify-center h-56">
                            <img src={mahiImage} alt="Mahi Pawar Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">Came here for a pre-owned car and found the best! The team's support exceeded my expectations. Extremely happy with my purchase.</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Mahi Pawar</p>
                        <p className="mt-2 text-center text-gray-500">Honda CRV</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center justify-center h-56">
                            <img src={pruthviImage} alt="Pruthvi Zala Testimonial" className="h-24 w-24 object-cover" />
                        </div>
                        <p className="mt-6 text-center text-gray-600">I had a smooth car buying experience. I was able to find a car that perfectly matched my requirements from a wide array of options.</p>
                        <p className="mt-4 text-center text-gray-800 font-semibold">Pruthvi Zala</p>
                        <p className="mt-2 text-center text-gray-500">Mahindra Thar</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}
