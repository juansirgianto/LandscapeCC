'use client'

import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import React from 'react'

function Interactive() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        {/* Animasi Fade In Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
        <div className='mt-[73px] text-center lg:p-30 md:p-10 p-10 font-semibold bg-[#757741] text-white'>
            <h1 className='lg:text-5xl md:text-3xl text-xl mb-4'>Turn your site plan into an immersive <br /> interactive experience for stakeholders.</h1>
            <p className='mb-4 lg:text-lg md:text-base text-sm lg:px-50'>Our Interactive Masterplan service transforms your landscape or public realm scheme into a fully explorable digital experience — powered by Unreal Engine. These bespoke platforms are ideal for presenting large-scale or phased projects to councils, clients, investors, or the public.</p>
            <Button className="lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#d3d2a5] text-[#757741] w-fit font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-white hover:text-[#757741]">
                Start a Project 
            <MoveRight strokeWidth={3}/>
            </Button>
        </div>
        </motion.div>
        <Runninglogo/>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold' data-aos="fade-up">What's Included</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:px-30 md:px-10 px-4 md:gap-4 gap-2 font-semibold lg:text-xl md:text-lg text-base'>
            <div className='bg-[#d3d2a5] md:p-5 p-2 text-center rounded-[15px]' data-aos="fade-up">
                <h1 className='m-auto'>Branded, interactive interface custom-built in Unreal Engine</h1>
            </div>
            <div className='bg-[#d3d2a5] md:p-5 p-2 flex text-center rounded-[15px]' data-aos="fade-up">
                <h1 className='m-auto'>Clickable zones across site plans or 3D models</h1>
            </div>
            <div className='bg-[#d3d2a5] md:p-5 p-2 flex text-center rounded-[15px]' data-aos="fade-up">
                <h1 className='m-auto'>Embedded CGIs, animations, video, or PDFs</h1>
            </div>
            <div className='bg-[#d3d2a5] md:p-5 p-2 flex text-center rounded-[15px]' data-aos="fade-up">
                <h1 className='m-auto'>Toggle controls for materials, layouts, lighting states, or design variations</h1>
            </div>
            <div className='bg-[#d3d2a5] md:p-5 p-2 flex text-center rounded-[15px]' data-aos="fade-up">
                <h1 className='m-auto'>Voiceover, navigation guides, or embedded project info</h1>
            </div>
            <div className='bg-[#d3d2a5] md:p-5 p-2 flex text-center rounded-[15px]' data-aos="fade-up">
                <h1 className='m-auto'>Desktop, laptop, or touchscreen compatible</h1>
            </div>
            <div className='bg-[#d3d2a5] md:p-5 p-2 flex text-center rounded-[15px] lg:col-span-3 md:col-span-2' data-aos="fade-up">
                <h1 className='m-auto'>Optional VR or AR integration on request</h1>
            </div>
        </div>
        <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-10 p-4 border-b-1' data-aos="fade-up">
            <AccordionItem value="item-1">
            <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Ideal For :</AccordionTrigger>
            <AccordionContent className='lg:text-xl md:text-base text-xs grid md:grid-cols-2 gap-3'>
                <div className='flex relative items-center gap-3'>
                <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                <p className='text-black'>Large estates, campuses, or multi-phase public realm projects</p>
                </div>
                <div className='flex relative items-center gap-3'>
                <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                <p className='text-black'>Council or community engagement presentations</p>
                </div>
                <div className='flex relative items-center gap-3'>
                <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                <p className='text-black'>Masterplanning review meetings or funding proposals</p>
                </div>
                <div className='flex relative items-center gap-3'>
                <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                <p className='text-black'>Sales suites or stakeholder roadshows</p>
                </div>
                <div className='flex relative items-center gap-3'>
                <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                <p className='text-black'>Landscape studios working on design competitions or urban proposals</p>
                </div>
            </AccordionContent>
            </AccordionItem>
        </Accordion>
        <div className='lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 lg:my-15 md:my-10 my-4 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center bg-[#f5f4ea]'>
            <div className='lg:pr-30 md:mb-0 mb-4 '>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-4 text-center md:text-start'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-black md:mb-4'>Interactive sites remove barriers between the viewer and your design — letting them explore with full control and spatial context. They're especially powerful for complex or high-value projects where traditional decks or PDFs feel static and limiting.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white font-semibold'>1</h1>
                    <h1>We review your model, drawings, or concept</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white font-semibold'>2</h1>
                    <h1>Our team builds the 3D model + interaction framework</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white font-semibold'>3</h1>
                    <h1>You review key navigation and UI features</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white font-semibold'>4</h1>
                    <h1>We finalise and deliver a hosted site</h1>
                </div>
            </div>
        </div>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:pb-15 md:pb-10 pb-4 font-semibold'>Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-15 md:pb-10 pb-4'>
            <a href="https://juansirgianto.github.io/Demo01/">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Demo01</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="https://juansirgianto.github.io/Demo02/">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Demo02</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="https://juansirgianto.github.io/Demo03/">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Demo03</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="https://juansirgianto.github.io/MAIL/">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/master1.jpeg" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>MAIL</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover'>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold md:top-2/3 top-1/2 -translate-y-1/2 '>
            <h1 className='mb-4'>Bring your landscape to life <br /> with an interactive walkthrough.</h1>
            <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-[#757741] font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Start a Project 
            <MoveRight strokeWidth={3}/>
            </Button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Interactive