'use client'

import Image from 'next/image';
import { useState } from 'react';

interface TabData {
    title: string;
    UrlImage: string;
    text: string;
    info: string[];
}

interface TabsProps {
    tabsData: TabData[];
}

interface TabInfoProps {
    info: string[]
}

const TabInfo = ({ info }: TabInfoProps) => (
    <div className='flex flex-col justify-around border-t border-t-blue-sky/20 w-full mt-4 md:flex-row lg:justify-start lg:space-x-16'>
        {info.map((item, index) => (
            <div key={index} className='mt-4'>
                <span className='font-barlow-condensed uppercase text-xs md:text-sm text-blue-sky tracking-midllewider'>
                    {index === 0 ? 'Avg. Distance' : 'Est. travel time'}
                </span>
                <h4 className='font-bellefair uppercase text-3xl text-white mt-3'>{item}</h4>
            </div>
        ))}
    </div>
);

export const Tabs = ({ tabsData }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    const activeTabData = tabsData[activeTab];

    return (
        <>
            <div className='flex flex-col items-center justify-center px-8 lg:flex-row lg:space-x-10'>
                <div className='w-full flex items-center justify-center mb-12'>
                    <Image
                        className='drop-shadow-2xl md:w-3/5 lg:w-4/5'
                        src={activeTabData.UrlImage}
                        width={270}
                        height={270}
                        alt='Imagem hero'
                    />
                </div>
                <div className='md:w-4/5 flex flex-col items-center lg:items-start justify-center text-center lg:text-left'>
                    <div className='flex justify-center lg:justify-start items-center mb-8 space-x-8'>
                        {tabsData.map((tab, index) => (
                            <button
                                key={index}
                                className={`${activeTab === index ? 'border-b-4 border-b-white' : ''
                                    } pb-2 transition-all duration-500 text-white uppercase font-barlow-condensed tracking-midllewider hover:border-b-4`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    <div className='space-y-2 mb-10'>
                        <h2 className='font-bellefair text-6xl lg:text-8xl text-white uppercase'>
                            {activeTabData.title}
                        </h2>
                        <p className='text-base lg:text-lg leading-8 text-blue-sky'>
                            {activeTabData.text}
                        </p>
                    </div>
                    <TabInfo info={activeTabData.info} />
                </div>
            </div>
        </>
    );
};

