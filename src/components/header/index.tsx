'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "./menu";
import { links } from './links';
import { FiMenu } from 'react-icons/fi';
import styles from './styles.module.css';



export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full my-10 fixed top-0 left-0 z-50">
            <div className="container px-6 md:pr-0 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/space-logo.svg"
                        width={48}
                        height={48}
                        alt="Space Tourism"
                    />
                </Link>
                <nav
                    className={
                        `hidden ${styles.nav} md:flex items-center bg-gray-sky bg-opacity-20 space-x-6 px-16 lg:space-x-12 pt-10 lg:px-32 before:hidden xl:before:block before:absolute before:top-1/2 before:left-[-65%] lg:before:w-9/12 before:h-[1px] before:bg-white`
                    }
                >
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`relative text-white tracking-wider uppercase font-barlow-condensed hover:border-b-4 pb-9 transition-all duration-500 ${pathname === link.path
                                ? "border-b-4 border-white"
                                : "border-gray-300"
                                }`}
                        >
                            <span className="mr-2 font-bold">0{index}</span>
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <button className={`text-white md:hidden ${menuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
                    <FiMenu size={34} />
                </button>
                {menuOpen && <Menu onClose={toggleMenu} />}
            </div>
        </header>
    );
}
