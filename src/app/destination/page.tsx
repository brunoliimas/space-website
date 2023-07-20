import { Tabs } from "@/components/destination/tabs"


export default function Destination() {
    return (
        <>
            <section className='h-screen w-full bg-destination-pattern bg-cover bg-no-repeat bg-center'>
                <div className="container h-full flex items-center pb-24 pt-60">
                    <Tabs />
                </div>
            </section>
        </>
    )
}
