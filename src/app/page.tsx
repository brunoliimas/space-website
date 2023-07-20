'use client'
import { motion } from 'framer-motion';
import { Button } from "@/components/home/button";


export default function Home() {
  return (
    <>
      <section className='h-screen w-full bg-hero-pattern-90 lg:bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className="h-full container flex flex-col items-center justify-between lg:justify-end pb-24 pt-40 md:pt-56 lg:flex-row lg:items-end lg:py-36">
          <div className="w-full px-6 md:w-2/3 lg:w-2/5 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 30 }}
              transition={{ease: "linear", duration: .2, delay: 0 }}
              className="text-blue-sky text-lg font-barlow-condensed md:text-3xl tracking-midllewider"
            >
              SO, YOU WANT TO TRAVEL TO
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 30 }}
              transition={{ease: "linear", duration: .2, delay: 0.2 }}
              className="text-white text-8xl py-4 md:text-9xl font-bellefair"
            >
              SPACE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 30 }}
              transition={{ease: "linear", duration: .2, delay: 0.4 }}
              className="text-blue-sky text-base md:text-[18px]"
            >
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ease: "linear", delay: .6, duration: .6 }}
            className="w-1/2 flex justify-center"
          >
            <Button />
          </motion.div>
        </div>
      </section>
    </>
  )
}
