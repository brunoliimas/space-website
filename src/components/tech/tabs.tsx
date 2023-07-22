'use client'
import Image from 'next/image';
import { useState } from 'react';

interface TabData {
    title: string;
    UrlImage: string;
    text: string;
    position: 'start' | 'center' | 'end';
}

interface TabsProps {
    tabsData: TabData[];
}

export const Tabs = ({ tabsData }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const activeTabData = tabsData[activeTab];

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className='h-full flex flex-col items-center justify-start lg:flex-row gap-x-10'>
            <div className={`w-full md:h-96 lg:h-auto md:overflow-hidden flex items-${activeTabData.position} justify-center mb-12 lg:order-3`}>
                <Image
                    className='w-full object-cover'
                    src={activeTabData.UrlImage}
                    width={170}
                    height={170}
                    alt={activeTabData.title}
                />
            </div>
            <div className='flex justify-center items-center mb-8 space-x-8 lg:space-x-0 lg:space-y-8 lg:flex-col lg:order-1'>
                {tabsData.map((tab, index) => (
                    <button
                        key={index}
                        className={`${activeTab === index ? 'bg-white text-sky-950' : ''
                            } w-10 h-10 rounded-full text-base transition-all duration-500 text-white uppercase font-bellefair tracking-midllewider border border-white border-opacity-20 hover:border-opacity-100 md:h-14 md:w-14 md:text-xl lg:h-20 lg:w-20 lg:text-2xl`}
                        onClick={() => handleTabClick(index)}
                    >
                        <span>{index + 1}</span>
                    </button>
                ))}
            </div>
            <div className='md:w-3/5 lg:w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left lg:order-2'>
                <div className='space-y-2'>
                    <h3 className='font-barlow-condensed text-blue-sky tracking-midllewider text-sm lg:text-lg'>THE TERMINOLOGY…</h3>
                    <h2 className='font-bellefair text-white uppercase text-3xl md:text-4xl lg:text-6xl'>
                        {activeTabData.title}
                    </h2>
                    <p className='text-base lg:text-lg leading-8 text-blue-sky'>
                        {activeTabData.text}
                    </p>
                </div>
            </div>
        </div>
    );
};
