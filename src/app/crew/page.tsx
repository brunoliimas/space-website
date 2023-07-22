import { Slider } from "@/components/crew/slider"
import { links } from "@/app/links"
import { Title } from "@/components/ui/title"

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
            <section className='h-screen w-full bg-crew-pattern bg-cover bg-no-repeat bg-center'>
                <div className="h-full container px-6 flex flex-col items-center pt-28 md:pt-44">
                    <Title description={links[2].description} index={links[2].index} />
                    <Slider />
                </div>
            </section>
        </>
    )
}
