import { Tabs } from "@/components/destination/tabs"
import { links } from "@/components/header/links"

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

export default function Destination() {
    return (
        <>
            <section className='lg:h-screen w-full bg-destination-pattern bg-cover bg-no-repeat bg-center'>
                <div className="container px-6 h-full flex flex-col items-center pb-28 pt-28 md:pt-44">
                    <div className="w-full flex justify-center md:justify-start space-x-1 font-barlow-condensed tracking-wider text-base mb-8">
                        <span className="text-white opacity-20">{links[1].index}</span>
                        <h2 className="uppercase text-gray-sky">Pick your {links[1].name}</h2>
                    </div>
                    <Tabs tabsData={tabsData} />
                </div>
            </section>
        </>
    )
}
