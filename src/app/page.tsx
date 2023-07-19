import { Button } from "@/components/home/button"


export default function Home() {
  return (
    <>
      <section className='h-screen w-full bg-hero-pattern-90 lg:bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className="h-full container flex flex-col items-center pb-24 pt-40 lg:flex-row lg:items-end justify-between lg:py-36">
          <div className="w-1/2">
            <h2 className="text-blue-sky font-barlow-condensed text-3xl tracking-midllewider">SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className="text-white text-6xl md:text-9xl font-bellefair">SPACE</h1>
            <p  className="text-blue-sky text-[18px] max-w-[500px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="w-1/2 flex justify-center">
            <Button />
          </div>
        </div>
      </section>
    </>
  )
}
