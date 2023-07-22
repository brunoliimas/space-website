'use client'
import { Button } from "@/components/home/button";


export default function Home() {
  return (
    <>
      <section className='w-full bg-hero-pattern-90 lg:bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className="h-full container flex flex-col items-center justify-between lg:justify-end pb-24 pt-40 md:pt-56 lg:flex-row lg:items-end lg:py-36">
          <div className="w-full px-6 md:w-2/3 lg:w-2/5 text-center lg:text-left">
            <h2 className="text-blue-sky text-lg font-barlow-condensed md:text-3xl tracking-midllewider">
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <h1
              className="text-white text-8xl py-4 md:text-9xl font-bellefair"
            >
              SPACE
            </h1>
            <p className="text-base lg:text-lg leading-6 text-blue-sky">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <Button />
          </div>
        </div>
      </section>
    </>
  )
}
