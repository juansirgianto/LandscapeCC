'use client'

import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ChartLine, Clock3, FileCheck2, MoveRight, SquarePen, Trees } from 'lucide-react'
import React from 'react'

function Landscape() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='mt-[73px] grid md:grid-cols-2'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/10/2017CC_MCY_REV3_15-Photo.png" alt="" className='lg:h-[70vh] md:h-[60vh] object-cover hidden md:flex' data-aos="fade-right"/>
            <div className='bg-[#d3d2a5] lg:h-[70vh] md:h-[60vh] lg:p-30 p-10 flex flex-col justify-center md:gap-8 gap-4 text-black' data-aos="fade-left">
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold'>Fast, clear 2D drawings to support your landscape design workflow.</h1>
                <h1 className='lg:text-xl md:text-base text-sm'>Our 2D drafting service supports landscape architects, garden designers, and design-build firms by translating sketches and concepts into precise, presentation- or submission-ready drawings. Whether you're preparing a planting plan, a council submission, or a full tender documentation pack, we deliver clear, structured outputs tailored to your workflow.</h1>
                <Button className="lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#757741] hover:bg-[#757741]/70 text-white w-fit font-bold lg:!p-7 md:!p-5 cursor-pointer">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
            </div>
        </div>
        <div className='flex flex-col md:flex-row lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 justify-between'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_2347CC_HLLA_REV9_Scene-24_8.png" alt="" className='object-cover md:w-[35%] md:h-[50vh] h-[20vh] rounded-[15px]' data-aos="fade-right"/>
            <div className='md:w-[60%] flex flex-col justify-between'>
                <h1 className='lg:text-4xl md:text-2xl text-xl font-semibold py-4 md:py-0 text-center md:text-start' data-aos="fade-up">Why It Works :</h1>
                <div className='grid grid-cols-2 gap-5'>
                    <div data-aos="fade-right">
                        <Clock3 className='bg-[#d3d2a5] text-[#757741] p-2 lg:w-10 w-8 lg:h-10 h-8 rounded-md'/>
                        <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Time-saving</h1>
                        <h1 className='lg:text-lg md:text-base text-sm'>offload drawing production while staying focused on design</h1>
                    </div>
                    <div data-aos="fade-left">
                        <ChartLine className='bg-[#d3d2a5] text-[#757741] p-2 lg:w-10 w-8 lg:h-10 h-8 rounded-md'/>
                        <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Highly accurate</h1>
                        <h1 className='lg:text-lg md:text-base text-sm'>we match your style, scale, and documentation standards</h1>
                    </div>
                    <div data-aos="fade-right">
                        <FileCheck2 className='bg-[#d3d2a5] text-[#757741] p-2 lg:w-10 w-8 lg:h-10 h-8 rounded-md'/>
                        <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Council-ready</h1>
                        <h1 className='lg:text-lg md:text-base text-sm'>outputs suitable for planning, review, and approval</h1>
                    </div>
                    <div data-aos="fade-left">
                        <SquarePen className='bg-[#d3d2a5] text-[#757741] p-2 lg:w-10 w-8 lg:h-10 h-8 rounded-md'/>
                        <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Flexible formats</h1>
                        <h1 className='lg:text-lg md:text-base text-sm'>editable, layered files ready for internal revisions</h1>
                    </div>
                </div>
            </div>
        </div>
        <Runninglogo/>
        <div className='lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 lg:mt-15 md:mt-10 mt-4 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center bg-[#f5f4ea]' data-aos="fade-up">
            <div className='lg:pr-30 md:mb-0 mb-4 '>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-4 text-center md:text-start' data-aos="fade-up">Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-black md:mb-4' data-aos="fade-up">Interactive sites remove barriers between the viewer and your design - letting them explore with full control and spatial context. They're especially powerful for complex or high-value projects where traditional decks or PDFs feel static and limiting.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base text-sm rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-semibold lg:!p-7 md:!p-5 cursor-pointer" data-aos="fade-up">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white font-semibold'>1</h1>
                    <h1>Send a sketch, model, or reference plan</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white font-semibold'>2</h1>
                    <h1>We confirm scope, file format, and style preferences</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white font-semibold'>3</h1>
                    <h1>Draft version delivered for feedback</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white font-semibold'>4</h1>
                    <h1>Final 2D pack supplied as PDF, DWG, or PSD</h1>
                </div>
            </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4'>
            <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
                <AccordionItem value="item-1">
                <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>What's Included :</AccordionTrigger>
                <AccordionContent className='lg:text-xl md:text-base text-xs flex flex-col gap-3'>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Site layout plans with pathways, levels, and planting zones</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Detailed planting plans with species labels and quantity tables</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Lighting, irrigation, and drainage overlays</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Construction annotations, material keys, and reference graphics</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Final files as layered PDF, DWG, or PSD (on request)</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Council-ready drawing packs structured to regional standards</p>
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
                        <p className='text-black'>Estate and garden planting plans</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Landscape planning and permit submissions</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Design-build teams needing drawing support</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Urban and commercial site plans</p>
                    </div>
                    <div className='flex relative items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'>Fast concept-to-pack conversion workflows</p>
                    </div>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/1577CC_PWGD_POOL_REV-01-Photo.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 '>
            <h1 className='mb-4 font-bold'>Need fast, flexible 2D plans <br />for your next landscape project?</h1>
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

export default Landscape