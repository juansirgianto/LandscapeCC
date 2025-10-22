'use client'

import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'

function SiteHub() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/poly.png')" }} className='relative bg-cover bg-center lg:h-[60vh] md:h-[50vh] h-[20vh] lg:px-50 px-10 mt-[73px]'>
        <div className="absolute inset-0 bg-black/70 z-0" />
            <div className='relative text-white top-1/2 -translate-y-1/2 flex gap-5'>
                <div className='md:w-[50%] my-auto text-center md:text-start'>
                    <h1 className='lg:text-5xl md:text-3xl mb-5'>One interactive platform to present, explore, and approve your landscape design.</h1>
                    <Button className="lg:text-xl md:text-lg text-sm rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-semibold lg:!p-7 md:!p-5 cursor-pointer">
                        Explore Services 
                    <MoveRight strokeWidth={3}/>
                    </Button>
                </div>
                <div className='w-[50%] my-auto lg:text-lg md:text-sm hidden md:flex md:flex-col'>
                    <h1 className='mb-5'>Site Hub is our custom-built digital platform that transforms your landscape proposal into a centralised, interactive presentation experience.</h1>
                    <h1>Built for landscape architects, urban designers, and public realm consultants, Site Hub brings together all of your project materials — plans, visuals, phasing, animations, and layout options — into a single, intuitive interface. Councils, collaborators, and clients can review everything in one place, at their own pace, and from any device.</h1>
                </div>
            </div>
        </div>
        <div className='flex lg:h-[40vh] h-[30vh]'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/compressed_1506CC_CSC_REV2_ALT1_10-Photo.jpg" alt="" className='w-1/3 hidden lg:flex object-cover' data-aos="fade-right"/>
            <div className='lg:w-1/3 w-1/2 flex bg-[#f5f4ea]' data-aos="fade-up">
                <h1 className='m-auto lg:text-3xl md:text-2xl text-xl'>What's Included :</h1>
            </div>
            <div className='lg:w-1/3 w-1/2 bg-[#757741] flex px-5' data-aos="fade-left">
            <div className='flex flex-col gap-2 my-auto'>
                <div className='flex bg-gradient-to-tr from-[#f5f4ea] to-[#d3d2a5] px-4 py-2 md:rounded-full rounded-md items-center gap-5 lg:text-xl md:text-base text-xs' data-aos="fade-left">
                    <h1 className='m-auto text-center'>Send us site plans, drone data, or survey</h1>
                </div>
                <div className='flex bg-gradient-to-tr from-[#f5f4ea] to-[#d3d2a5] px-4 py-2 md:rounded-full rounded-md items-center gap-5 lg:text-xl md:text-base text-xs' data-aos="fade-left">
                    <h1 className='m-auto text-center'>We build the 3D base model</h1>
                </div>
                <div className='flex bg-gradient-to-tr from-[#f5f4ea] to-[#d3d2a5] px-4 py-2 md:rounded-full rounded-md items-center gap-5 lg:text-xl md:text-base text-xs' data-aos="fade-left">
                    <h1 className='m-auto text-center'>Review + edits</h1>
                </div>
                <div className='flex bg-gradient-to-tr from-[#f5f4ea] to-[#d3d2a5] px-4 py-2 md:rounded-full rounded-md items-center gap-5 lg:text-xl md:text-base text-xs' data-aos="fade-left">
                    <h1 className='m-auto text-center'>Final file delivered in your preferred format - or passed to our visual team</h1>
                </div>
            </div>
            </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4'>
            <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
                <AccordionItem value="item-1">
                <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Why It Works :</AccordionTrigger>
                <AccordionContent className='lg:text-xl md:text-base text-xs flex flex-col gap-3'>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-semibold'>Reduces friction</span> - no more juggling PDFs, slide decks, and videos</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-semibold'>Improves clarity</span> - makes complex information easy to absorb</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-semibold'>Boosts engagement</span> - clients and councils stay focused and impressed</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-semibold'>Future-proofs your studio</span> - shows you're leading with tech, not playing catch-up</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-semibold'>Adaptable across project types</span> - from intimate gardens to civic masterplans</p>
                    </div>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
                <AccordionItem value="item-1">
                <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Ideal For :</AccordionTrigger>
                <AccordionContent className='lg:text-xl md:text-base text-xs flex flex-col gap-3'>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Council submissions and design consultations</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Masterplan and public realm proposals</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Stakeholder presentations and exhibitions</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Estate and campus landscape projects</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Developer presentations or sales toolkits</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Multi-phase or layout-option-rich designs</p>
                    </div>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div className='lg:px-30 md:px-10 px-4 grid md:grid-cols-2 lg:py-15 md:py-10 py-4 lg:gap-8 md:gap-4 items-center bg-[#d3d2a5]' data-aos="fade-up">
            <div className='lg:pr-30 md:mb-0 mb-4'>
                <h1 className='lg:text-3xl md:text-xl text-lg font-semibold mb-4 text-center md:text-start'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-black md:mb-4'>Photorealistic CGI helps your clients, councils, and collaborators fully understand your design before it's built. From luxury garden projects to civic plazas and commercial streetscapes, our visuals communicate spatial intent, planting, and materiality with clarity - accelerating buy-in and streamlining decision-making across residential, commercial, and public sectors.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>1</h1>
                    <h1>Share your visuals, plans, layout variations, or phasing details</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>2</h1>
                    <h1>We design and develop a branded, interactive platform using Unreal Engine or web-based tools</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>3</h1>
                    <h1>You review and refine interface content</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>4</h1>
                    <h1>We deliver a final Site Hub via a live link or downloadable package</h1>
                </div>
            </div>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/1577CC_PWGD_POOL_REV-01-Photo.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 '>
            <h1 className='mb-4 font-light'><span className='font-bold'>Ready to unify your project content into one interactive destination?</span> <br />
            Let's build a Site Hub for your next landscape or public realm proposal.</h1>
            <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-bold lg:!p-7 md:!p-5 cursor-pointer">
                Start a Project 
            <MoveRight strokeWidth={3}/>
            </Button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SiteHub