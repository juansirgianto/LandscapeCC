'use client'

import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'

function Vr() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='mt-[73px] grid md:grid-cols-2'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/garden.jpg" alt="" className='lg:h-[80vh] md:h-[60vh] object-cover hidden md:flex' data-aos="fade-right"/>
            <div className='bg-[#757741] lg:h-[80vh] md:h-[60vh] lg:p-30 md:p-10 p-10 flex flex-col justify-center md:gap-8 gap-4 text-white' data-aos="fade-left">
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold'>Step into your unbuilt landscape with immersive VR & AR visualisation.</h1>
                <h1 className='lg:text-xl md:text-base text-sm'>Our VR and AR services allow landscape professionals to present, refine, and sell their designs in real time — with immersive tools that go far beyond static visuals. From 360° virtual tours to fully interactive VR environments and mobile AR masterplans, we help you lead with clarity and innovation at every project stage.</h1>
                <Button className="lg:text-xl md:text-base text-sm rounded-full relative items-center bg-gradient-to-t from-[#f5f4ea] to-[#d3d2a5] hover:bg-gradient-to-b text-[#757741] w-fit font-bold lg:!p-7 md:!p-5 cursor-pointer">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
            </div>
        </div>
        <Runninglogo/>
        <div className='grid md:grid-cols-2'>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/compressed_909CC_CSC_Rev1_CAM-B-Photo.jpg')" }} className='relative lg:pb-15 md:pb-10 pb-4 bg-cover bg-center lg:px-30 md:px-10 px-4' data-aos="fade-right">
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className='relative'>
        <h1 className='text-center text-white lg:text-5xl md:text-3xl text-xl lg:pt-15 md:pt-10 pt-4 font-semibold' data-aos="fade-up">VR Options :</h1>
        <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
        <AccordionItem value="item-1">
            <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer text-white'>Static VR (360° Virtual Tours)</AccordionTrigger>
            <AccordionContent className='lg:text-xl md:text-base text-xs '>
            <div className='grid lg:grid-cols-2 lg:gap-4 gap-2 md:mb-5 mb-2 text-center'>
                <div className='bg-[#d3d2a5] text-[#757741] lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-right">
                    <h1 className='lg:text-xl md:text-base text-xs font-semibold'>Node-based tours with click-through hotspots</h1>
                </div>
                <div className='bg-[#d3d2a5] text-[#757741] lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-left">
                    <h1 className='lg:text-xl md:text-base text-xs font-semibold'>Ideal for presenting gardens, resort zones, and exterior spaces</h1>
                </div>
                <div className='bg-[#d3d2a5] text-[#757741] lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-right">
                    <h1 className='lg:text-xl md:text-base text-xs font-semibold'>Can be viewed on desktop, tablet, or headset</h1>
                </div>
                <div className='bg-[#d3d2a5] text-[#757741] lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-left">
                    <h1 className='lg:text-xl md:text-base text-xs font-semibold'>Great for client presentations and pre-sales experiences</h1>
                </div>
            </div>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
        <AccordionItem value="item-1">
            <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer text-white'>Interactive / Free-Roam VR (Unreal Engine)</AccordionTrigger>
            <AccordionContent className='lg:text-xl md:text-base text-xs'>
            <div className='grid lg:grid-cols-2 lg:gap-4 gap-2 md:mb-5 mb-2 text-center'>
            <div className='bg-[#757741] text-white lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-right">
                <h1 className='lg:text-xl md:text-base text-xs font-semibold'>Walkable, explorable 3D environments</h1>
            </div>
            <div className='bg-[#757741] text-white lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-left">
                <h1 className='lg:text-xl md:text-base text-xs font-semibold'>Toggle between design options (planting, furniture, layouts)</h1>
            </div>
            <div className='bg-[#757741] text-white lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-right">
                <h1 className='lg:text-xl md:text-base text-xs font-semibold'>Embedded labels, sound, or interactive zones</h1>
            </div>
            <div className='bg-[#757741] text-white lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-left">
                <h1 className='lg:text-xl md:text-base text-xs font-semibold'>Ideal for design development, upselling, and immersive reviews</h1>
            </div>
            <div className='bg-[#757741] text-white lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center lg:col-span-2' data-aos="fade-up">
                <h1 className='lg:text-2xl md:text-lg text-sm md:mx-auto font-semibold'>Deployed for headset, desktop, or live screen walkthroughs</h1>
            </div>
        </div>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        </div>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/compressed_1187CC_CSC_REV8_13-Photo.jpg')" }} className='relative lg:pb-15 md:pb-10 pb-4 bg-cover bg-center lg:px-30 md:px-10 px-4' data-aos="fade-left">
            <div className="absolute inset-0 bg-black/70 z-0" />
            <div className='relative'>
                <h1 className='text-center text-white lg:text-5xl md:text-3xl text-xl lg:pt-15 md:pt-10 pt-4 font-semibold' data-aos="fade-up">AR Options :</h1>
                <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer text-white'>Augmented Reality Masterplans</AccordionTrigger>
                    <AccordionContent className='lg:text-xl md:text-base text-xs '>
                    <div className='grid lg:grid-cols-2 lg:gap-4 gap-2 md:mb-5 mb-2 text-center'>
                        <div className='bg-[#d3d2a5] text-[#757741] lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-right">
                            <h1 className='lg:text-2xl md:text-lg text-sm md:mx-auto font-semibold'>Touch-based overlays of your site plan</h1>
                        </div>
                        <div className='bg-[#d3d2a5] text-[#757741] lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-left">
                            <h1 className='lg:text-2xl md:text-lg text-sm md:mx-auto font-semibold'>Clickable zones with embedded images, text, and toggles</h1>
                        </div>
                        <div className='bg-[#d3d2a5] text-[#757741] lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-right">
                            <h1 className='lg:text-2xl md:text-lg text-sm md:mx-auto font-semibold'>Launch via QR or URL — no app install required</h1>
                        </div>
                        <div className='bg-[#d3d2a5] text-[#757741] lg:py-5 md:py-3 py-2 lg:px-10 md:px-6 px-4 rounded-[15px] flex justify-between items-center' data-aos="fade-left">
                            <h1 className='lg:text-2xl md:text-lg text-sm md:mx-auto font-semibold'>Perfect for council engagement, on-site exploration, or client previews</h1>
                        </div>
                    </div>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </div>
        </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 lg:mb-15 md:mb-10 mb-4 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center bg-[#f5f4ea]'>
            <div className='lg:pr-30 md:mb-0 mb-4 '>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-4 text-center md:text-start'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-black md:mb-4'>These tools go beyond visuals — they build understanding. VR lets people walk through space as if it's already built. AR masterplans turn drawings into layered, explorable presentations. Together, they dramatically improve communication, buy-in, and clarity across client, contractor, and council teams.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base text-sm rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-gradient-to-b">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-gradient-to-r from-[#757741] to-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>1</h1>
                    <h1 className='text-white'>Send us your model, plan, or layout sketch</h1>
                </div>
                <div className='flex bg-gradient-to-r from-[#757741] to-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>2</h1>
                    <h1 className='text-white'>We develop the AR/VR experience to match scope and device</h1>
                </div>
                <div className='flex bg-gradient-to-r from-[#757741] to-[#d3d2a5]  px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>3</h1>
                    <h1 className='text-white'>You review camera flow, toggles, and key content</h1>
                </div>
                <div className='flex bg-gradient-to-r from-[#757741] to-[#d3d2a5]  px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>4</h1>
                    <h1 className='text-white'>We deliver a browser link, headset-ready file, or QR code</h1>
                </div>
            </div>
        </div>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:pb-15 md:pb-10 pb-4 font-semibold'>Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-15 md:pb-10 pb-4'>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Foxtera</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover'>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold md:top-2/3 top-1/2 -translate-y-1/2 '>
            <h1 className='mb-4'>Want to present your landscape in <br /> immersive AR or VR?</h1>
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

export default Vr