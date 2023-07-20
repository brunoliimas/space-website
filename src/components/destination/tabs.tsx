'use client'
import Image from 'next/image';
import { useState } from 'react';

type TabData = {
    title: string;
    UrlImage: string;
    text: string;
    info: string[];
};

type TabsProps = {
    tabsData: TabData[];
};

const TabInfo: React.FC<{ info: string[] }> = ({ info }) => (
    <div className='flex flex-col md:flex-row justify-around border-t border-t-blue-sky/20 w-full mt-4'>
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

    return (
        <>
            <div className='flex justify-center items-center mb-8 space-x-8'>
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
            {tabsData.map((tab, index) => (
                <div key={index} className={activeTab === index ? '' : 'hidden'}>
                    <div className='flex flex-col items-center justify-center px-8 lg:flex-row lg:space-x-10'>
                        <div className='w-full flex items-center justify-center mb-12'>
                            <Image
                                className='drop-shadow-xl'
                                src={tab.UrlImage}
                                width={170}
                                height={170}
                                alt='Imagem hero'
                            />
                        </div>
                        <div className='w-4/5 flex flex-col items-center justify-center text-center lg:text-left'>
                            <div className='space-y-2 mb-10'>
                                <h2 className='font-bellefair text-6xl text-white uppercase'>{tab.title}</h2>
                                <p className='text-sm md:text-base text-blue-sky min-h-24'>{tab.text}</p>
                            </div>
                            <TabInfo info={tab.info} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};