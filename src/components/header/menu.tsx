'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { links } from '../../app/links';
import { IoMdClose } from 'react-icons/io';


type MenuProps = {
    onClose: () => void;
};


export const Menu = ({ onClose }: MenuProps) => {
    const [animate, setAnimate] = useState(false);
    const [closing, setClosing] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setAnimate(true);
    }, []);

    const handleCloseClick = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
            setClosing(false);
        }, 500);
    };

    const getMenuLinkClass = (linkPath: string) => {
        return `ml-8 relative py-4 text-white tracking-wider uppercase font-barlow-condensed hover:border-r-4 transition-all duration-500 ${pathname === linkPath ? 'border-r-4 border-white' : 'border-gray-300'}`;
    };

    return (
        <nav
            className={`md:hidden backdrop-blur-md w-[80%] bg-gray-sky bg-opacity-20 h-screen absolute -top-10 right-0 z-50 ${animate ? (closing ? 'transition-transform duration-500 translate-x-full' : 'transition-transform duration-500 translate-x-0') : 'translate-x-full'
                }`}
        >
            <div className='mt-28 flex flex-col justify-center'>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.path}
                        className={getMenuLinkClass(link.path)}
                        onClick={handleCloseClick}
                    >
                        <span className="mr-2 font-bold">0{index}</span>
                        {link.name}
                    </Link>
                ))}
            </div>
            <button className="absolute top-12 right-6 text-white" onClick={handleCloseClick}>
                <IoMdClose size={34} />
            </button>
        </nav>
    )
}