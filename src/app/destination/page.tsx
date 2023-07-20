import { Tabs } from "@/components/destination/tabs"
import { links } from "@/components/header/links"


type DestinationProps = {
    title: string
}

export default function Destination({ title }: DestinationProps) {
    return (
        <>
            <section className='h-screen w-full bg-destination-pattern bg-cover bg-no-repeat bg-center'>
                <div className="container h-full flex flex-col items-center pb-24 pt-28">
                    <div className="flex space-x-1 font-barlow-condensed tracking-wider text-base mb-8">
                        <span className="text-white opacity-20">{links[1].index}</span>
                        <h2 className="uppercase text-gray-sky">Pick your {links[1].name}</h2>
                    </div>
                    <Tabs />
                </div>
            </section>
        </>
    )
}
