'use client'
import Image from 'next/image';
import { useState } from 'react';

type TabsProps = {
    title: string;
    image: string;
    text: string;
    info: string[];
}

const tabsData = [
    {
        title: 'Moon',
        UrlImage: '/destination/moon.png',
        text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        info: ['384,400 km', '3 days'],
    },
    {
        title: 'Mars',
        UrlImage: '/destination/mars.png',
        text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        info: ['225 MIL. km', '9 months'],
    },
    {
        title: 'Europa',
        UrlImage: '/destination/europa.png',
        text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        info: ['628 MIL. km', '3 years'],
    },
    {
        title: 'Titan',
        UrlImage: '/destination/titan.png',
        text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        info: ['1.6 BIL. km', '7 years'],
    },
];



export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            {tabsData.map((tab, index) => (
                <div key={index} className={activeTab === index ? "" : "hidden"}>
                    <div className="flex flex-col items-center justify-center px-8 lg:flex-row lg:space-x-10">
                        <div className="w-full flex items-center justify-center mb-12">
                            <Image
                                className="drop-shadow-xl"
                                src={tab.UrlImage}
                                width={170}
                                height={170}
                                alt="Imagem hero"
                            />
                        </div>
                        <div className="w-4/5 flex flex-col items-center justify-center text-center lg:text-left">
                            <div className="flex justify-center items-center mb-8 space-x-8 ">
                                {tabsData.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`${activeTab === index ? "border-b-4 border-b-white" : ""
                                            } pb-2 transition-all duration-500 text-white uppercase font-barlow-condensed tracking-midllewider hover:border-b-4`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>
                            <div className='space-y-2 mb-10'>
                                <h2 className='font-bellefair text-6xl text-white uppercase'>
                                    {tab.title}
                                </h2>
                                <p className="text-sm md:text-base text-blue-sky">
                                    {tab.text}
                                </p>
                            </div>
                            <div className='flex flex-col md:space-x-20 border-t border-t-blue-sky w-full'>
                                <div className='mt-4'>
                                    <span className='font-barlow-condensed uppercase text-xs md:text-sm text-blue-sky tracking-midllewider'>
                                        Avg. Distance
                                    </span>
                                    <h4 className='font-bellefair uppercase text-2xl text-white mt-3'>
                                        {tab.info[0]}
                                    </h4>
                                </div>
                                <div className='mt-4'>
                                    <span className='font-barlow-condensed uppercase text-xs md:text-sm text-blue-sky tracking-midllewider'>
                                        Est. travel time
                                    </span>
                                    <h4 className='font-bellefair uppercase text-2xl text-white mt-3'>
                                        {tab.info[1]}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};