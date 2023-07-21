import { Slider } from "@/components/crew/slider"
import { links } from "@/components/header/links"

const teamPeople = [
    {
        name: 'Douglas Hurley',
        office: 'Commander',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: '/crew/douglas.png',
    },
    {
        name: 'Mark Richard Shuttleworth',
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

export default function Crew() {
    return (
        <>
            <section className='w-full bg-crew-pattern bg-cover bg-no-repeat bg-center'>
                <div className="h-full container flex flex-col items-center justify-between lg:justify-end pb-24 pt-40 md:pt-56 lg:flex-row lg:items-end lg:py-36">
                    <div className="w-full flex justify-center md:justify-start space-x-1 font-barlow-condensed tracking-wider text-base mb-8">
                        <span className="text-white opacity-20">{links[2].index}</span>
                        <h2 className="uppercase text-gray-sky">Meet your {links[2].name}</h2>
                    </div>
                    <Slider />
                </div>
            </section>
        </>
    )
}
