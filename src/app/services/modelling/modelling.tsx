'use client'

import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import React from 'react'

function Modelling() {
  return (
    <div>
        <Navbar/>
        {/* Animasi Fade In Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
        <div className='mt-[73px] grid md:grid-cols-2'>
            <div className='bg-[#757741] lg:h-[80vh] md:h-[60vh] lg:p-30 md:p-10 p-10 flex flex-col justify-center md:gap-8 gap-4 text-white'>
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold'>Precision-built 3D base models to support visualisation, design development, and interactivity.</h1>
                <h1 className='lg:text-xl md:text-base text-sm'>Our 3D terrain and design modelling service gives landscape professionals a clean, highly accurate digital foundation to work from — whether for internal concept development or as the technical base for photorealistic CGI, animation, or interactive platforms.</h1>
                <Button className="lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#d3d2a5] text-[#757741] w-fit font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-white hover:text-[#757741]">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
            </div>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className='lg:h-[80vh] md:h-[60vh] object-cover hidden md:flex' />
        </div>
        </motion.div>
        <Runninglogo/>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold' data-aos="fade-up">What's Included</h1>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:px-30 md:px-10 px-4 gap-4 lg:text-2xl text-sm'>
            <div className='bg-[#d3d2a5] rounded-full flex p-5' data-aos="fade-up">
                <h1 className='text-center m-auto'>Precision-built 3D models of existing or proposed sites</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full flex p-5' data-aos="fade-up">
                <h1 className='text-center m-auto'>Topography, hardscape, architecture, and planting placeholders</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full flex p-5' data-aos="fade-up">
                <h1 className='text-center m-auto'>Model formats compatible with 3ds Max, SketchUp, Rhino, Unreal Engine, and more</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full flex p-5' data-aos="fade-up">
                <h1 className='text-center m-auto'>Geometry and levels tailored to site plans, drone scans, or LIDAR</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full flex p-5' data-aos="fade-up">
                <h1 className='text-center m-auto'>Optional integration with photorealistic rendering, animation, or VR/AR</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full flex p-5' data-aos="fade-up">
                <h1 className='text-center m-auto'>Editable by your in-house team or ours</h1>
            </div>
        </div>
        <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-10 p-4 border-b-1' data-aos="fade-up">
              <AccordionItem value="item-1">
                <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Why It Matters :</AccordionTrigger>
                <AccordionContent className='lg:text-xl md:text-base text-xs grid md:grid-cols-2 gap-3'>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'><span className='font-semibold'>Foundation for everything else</span> — Our 3D models serve as the core for future renderings, walkthroughs, or site hubs</p>
                  </div>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'><span className='font-semibold'>Faster design workflows</span> — Import your base and build your design, fast</p>
                  </div>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'><span className='font-semibold'>Flexibility</span> — Use our models for internal sketching, detailed development, or public presentations</p>
                  </div>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'><span className='font-semibold'>Team-ready</span> — Files are clean, layered, and built for collaboration</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-10 p-4 border-b-1' data-aos="fade-up">
              <AccordionItem value="item-1">
                <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Ideal For :</AccordionTrigger>
                <AccordionContent className='lg:text-xl md:text-base text-xs grid md:grid-cols-2 gap-3'>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'>Large sites or sloped/complex terrain</p>
                  </div>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'>Estate and campus projects</p>
                  </div>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'>Urban realm or infrastructure masterplans</p>
                  </div>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'>Designers working from 2D plans needing a 3D base</p>
                  </div>
                  <div className='flex relative items-center gap-3'>
                    <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1.5 font-semibold rounded-full text-[#757741]'>2</p>
                    <p className='text-black'>Studios preparing for CGI, VR, or planning visuals</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        <div className='lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center bg-[#757741]' data-aos="fade-up">
            <div className='lg:pr-30 md:mb-0 mb-4'>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-4 text-center md:text-start text-white '>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-white md:mb-4'>Unlike static visuals, animation creates movement, emotion, and clarity — helping all stakeholders feel immersed in the experience of the future space. Especially valuable for large or spatially complex designs where flow and use matter.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#d3d2a5] text-[#757741] font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#f5f4ea] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-black font-semibold'>1</h1>
                    <h1>Send us site plans, drone data, or survey</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#f5f4ea] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-black font-semibold'>2</h1>
                    <h1>We build the 3D base model</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#f5f4ea] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-black font-semibold'>3</h1>
                    <h1>Review + edits</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#f5f4ea] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-black font-semibold'>4</h1>
                    <h1>Final file delivered in your preferred format — or passed to our visual team</h1>
                </div>
            </div>
        </div>
        {/* <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold' data-aos="fade-up">Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-15 md:pb-10 pb-4'>
            <a href="" data-aos="fade-up">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Foxtera</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="" data-aos="fade-up">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="" data-aos="fade-up">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="" data-aos="fade-up">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div> */}
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 '>
            <h1 className='mb-4'>Need a 3D model that forms <br /> the foundation of your next design?</h1>
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

export default Modelling