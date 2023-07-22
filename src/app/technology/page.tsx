import { Title } from "@/components/ui/title"
import { links } from "@/app/links"
import { Tabs } from "@/components/tech/tabs"

interface TabData {
    title: string;
    UrlImage: string;
    text: string;
    position: 'start' | 'center' | 'end'; // Correção na definição do tipo
}

const tabsData: TabData[] = [
    {
        title: 'LAUNCH VEHICLE',
        UrlImage: '/tech/launch-vehicle.png',
        text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
        position: 'end'
    },
    {
        title: 'SPACEPORT',
        UrlImage: '/tech/spaceport.png',
        text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        position: 'end'
    },
    {
        title: 'SPACE CAPSULE',
        UrlImage: '/tech/space-capsule.png',
        text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
        position: 'center'
    },
];


export default function Technology() {
    return (
        <>
            <section className='h-screen w-full bg-tech-pattern bg-cover bg-no-repeat bg-center'>
                <div className="h-full container px-6 flex flex-col items-center pt-28 md:pt-44">
                    <Title description={links[3].description} index={links[3].index} />
                    <Tabs tabsData={tabsData} />
                </div>
            </section>
        </>
    )
}
