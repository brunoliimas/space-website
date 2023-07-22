
'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image"
const teamPeople = [
    {
        name: 'Douglas Hurley',
        office: 'Commander',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: '/crew/douglas.png',
    },
    {
        name: 'Mark Shuttleworth',
        office: 'Mission Specialist ',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image: '/crew/mark.png',
    },
    {
        name: 'Victor Glover',
        office: 'Pilot',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        image: '/crew/victor.png',
    },
    {
        name: 'Anousheh Ansari',
        office: 'Flight Engineer',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        image: '/crew/anousheh.png',
    },
]
export const Slider = () => {
    return (
        <Swiper
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full swiper-container"
        >
            {teamPeople.map((member, index) => (
                <SwiperSlide className="lg:p-0 h-full" key={index}>
                    <div className="md:flex md:flex-col lg:flex-row justify-between items-center lg:items-center h-full">
                        <div className="w-full md:w-4/5 border-b border-white/20 flex justify-center mb-8 md:mb-0 md:order-2 lg:w-1/2">
                            <Image
                                className="w-full lg:max-w-2xl"
                                src={member.image}
                                alt={member.name}
                                width={450}
                                height={580}
                            />
                        </div>
                        <div className="h-full flex flex-col items-center text-center lg:items-start lg:justify-center lg:text-left lg:w-1/2 pt-8 md:pt-0 md:w-3/4 md:order-1">
                            <h3 className="font-bellefair text-white/20 uppercase text-base mb-2 md:text-2xl lg:text-4xl">
                                {member.office}
                            </h3>
                            <h2 className="font-bellefair text-white uppercase text-2xl mb-4 md:text-4xl lg:text-6xl">
                                {member.name}
                            </h2>
                            <p className="text-base lg:text-lg leading-6 text-blue-sky">
                                {member.description}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};