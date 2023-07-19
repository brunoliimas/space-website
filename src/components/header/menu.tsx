'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from './links';
import { IoMdClose } from 'react-icons/io';
import styles from './styles.module.css';


type MenuProps = {
    onClose: () => void;
};


export const Menu = ({ onClose }: MenuProps) => {
    const pathname = usePathname();

    const handleLinkClick = () => {
        onClose();
    };

    return (
        <nav
            className={`md:hidden ${styles.nav} w-[80%] bg-gray-sky bg-opacity-20 h-screen absolute -top-10 right-0 z-50`}
        >
            <div className='mt-28 flex flex-col justify-center'>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.path}
                        className={`ml-8 relative py-4 text-white tracking-wider uppercase font-barlow-condensed hover:border-r-4 transition-all duration-500 ${pathname === link.path
                            ? "border-r-4 border-white"
                            : "border-gray-300"
                            }`}
                        onClick={handleLinkClick}
                    >
                        <span className="mr-2 font-bold">0{index}</span>
                        {link.name}
                    </Link>
                ))}
            </div>
            <button className="absolute top-12 right-6 text-white" onClick={onClose}>
                <IoMdClose size={34} />
            </button>
        </nav>
    )
}