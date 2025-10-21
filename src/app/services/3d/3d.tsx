'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import Footer from '@/app/layouts/footer'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function Cgi() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        {/* Animasi Fade In Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
        <div className='mt-[73px] grid grid-cols-2 lg:p-30 md:p-10 p-4 items-center bg-[#757741] text-white'>
            <div className='lg:pr-20'>
            <h1 className='lg:text-5xl md:text-3xl text-lg font-semibold mb-4'>Bring your landscape vision to life with photorealistic CGI and cinematic animation.</h1>
            <Button className="lg:text-xl md:text-base rounded-full relative items-center bg-gradient-to-t from-[#f5f4ea] to-[#d3d2a5] hover:bg-gradient-to-b text-[#757741] font-bold lg:!p-7 md:!p-5 cursor-pointer">
                Start a Project
            <MoveRight strokeWidth={3}/>
            </Button>
            </div>
            <h1 className='lg:pl-50 md:pl-20 lg:text-xl md:text-base text-xs'>Our 3D visualisation and animation services help landscape professionals present unbuilt spaces with cinematic clarity. Whether you're designing a private estate, urban plaza, or commercial outdoor space, we create high-end visuals that support client presentations, planning approvals, marketing campaigns, and tender submissions.</h1>
        </div>
        </motion.div>
        <Runninglogo/>
        <div className='grid grid-cols-2'>
        <div className='bg-[#757741] text-white' data-aos="fade-right">
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold' data-aos="fade-down">Photorealistic CGI</h1>
        <div className='lg:px-30 md:px-10 px-4 grid md:grid-cols-2 md:gap-4 gap-2'>
            <div data-aos="fade-right" style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/hero.png')" }} className='relative bg-cover bg-center md:h-[20vh] h-[10vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/70 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-2xl md:text-lg text-sm font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Cinematic stills showing spatial layout, planting, and materials
                    </h1>
                </div>
            </div>
            <div data-aos="fade-left" style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png')" }} className='relative bg-cover bg-center md:h-[20vh] h-[10vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/70 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-2xl md:text-lg text-sm font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Season-specific visuals
                    </h1>
                </div>
            </div>
            <div data-aos="fade-right" style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/service.png')" }} className='relative bg-cover bg-center md:h-[20vh] h-[10vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/70 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-2xl md:text-lg text-sm font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Day/night lighting and atmospheric settings
                    </h1>
                </div>
            </div>
            <div data-aos="fade-left" style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png')" }} className='relative bg-cover bg-center md:h-[20vh] h-[10vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/70 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-2xl md:text-lg text-sm font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    High-resolution delivery for web, print, or council reports
                    </h1>
                </div>
            </div>
        </div>
        </div>
        <div data-aos="fade-left" className='bg-[#f5f4ea]'>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold' data-aos="fade-down"> Landscape Animation</h1>
        <div className='lg:px-30 md:px-10 px-4 lg:pb-15 md:pb-10 pb-4 grid md:grid-cols-2 md:gap-4 gap-2 bg-[#f5f4ea]'>
            <div data-aos="fade-right" style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/hero.png')" }} className='relative bg-cover bg-center md:h-[20vh] h-[10vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/70 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-2xl md:text-lg text-sm font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Cinematic flythroughs of gardens, estates, campuses, and public spaces
                    </h1>
                </div>
            </div>
            <div data-aos="fade-left" style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png')" }} className='relative bg-cover bg-center md:h-[20vh] h-[10vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/70 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-2xl md:text-lg text-sm font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Smooth transitions and storytelling-driven camera paths
                    </h1>
                </div>
            </div>
            <div data-aos="fade-right" style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/service.png')" }} className='relative bg-cover bg-center md:h-[20vh] h-[10vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/70 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-2xl md:text-lg text-sm font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Embedded branding, text, or music
                    </h1>
                </div>
            </div>
            <div data-aos="fade-left" style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png')" }} className='relative bg-cover bg-center md:h-[20vh] h-[10vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/70 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-2xl md:text-lg text-sm font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Formats optimised for Instagram, YouTube, and presentations
                    </h1>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4'>
        <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Ideal For :</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base text-xs grid md:grid-cols-2 gap-3'>
          <div className='flex relative items-center gap-3'>
            <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
            <p className='text-black'>Client presentations and design sign-off</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
            <p className='text-black'>Planning applications and stakeholder engagement</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
            <p className='text-black'>Estate, resort, and developer marketing</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
            <p className='text-black'>Council or competition visuals for public realm proposals</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
            <p className='text-black'>Portfolio upgrades and award submissions</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
            <p className='text-black'>Pre-sales or investor decks</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Why It Works</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base text-xs grid gap-3'>
            <p><span className='font-semibold'>Visualisation accelerates decision-making</span>. It eliminates ambiguity and sells your design with confidence — whether you're pitching to a private client or a city council.</p>
            <p>High-end <span className='font-semibold'>3D images</span> communicate planting intent, spatial hierarchy, and finish details, while cinematic <span className='font-semibold'>animations</span> bring the experience of your landscape to life — boosting clarity, trust, and buy-in.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
        <div className='lg:px-30 md:px-10 px-4 grid md:grid-cols-2 lg:py-15 md:py-10 py-4 lg:gap-8 md:gap-4 items-center bg-[#d3d2a5]' data-aos="fade-up">
            <div className='lg:pr-30 md:mb-0 mb-4'>
                <h1 className='lg:text-3xl md:text-xl text-lg font-semibold mb-4 text-center md:text-start'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-black md:mb-4'>Photorealistic CGI helps your clients, councils, and collaborators fully understand your design before it's built. From luxury garden projects to civic plazas and commercial streetscapes, our visuals communicate spatial intent, planting, and materiality with clarity — accelerating buy-in and streamlining decision-making across residential, commercial, and public sectors.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>1</h1>
                    <h1>Send us your sketch, CAD, or model</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>2</h1>
                    <h1>We align on scope, camera angles, and finishes</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>3</h1>
                    <h1>Drafts sent for review</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>4</h1>
                    <h1>Final CGI and/or animation delivered in high-res format</h1>
                </div>
            </div>
        </div>
        {/* <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:pb-15 md:pb-10 pb-4 font-semibold' data-aos="fade-up">Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-15 md:pb-10 pb-4'>
            <a href="" data-aos="fade-up">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Foxtera</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="" data-aos="fade-up">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="" data-aos="fade-up">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="" data-aos="fade-up">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div> */}
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 '>
                <h1 className='mb-4'>Want to see your landscape design <br /> in cinematic clarity?</h1>
                <a href="">
                <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-semibold lg:!p-7 md:!p-5 cursor-pointer">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
                </a>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cgi