import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'

function Interactive() {
  return (
    <div>
        <Navbar/>
        <div className='mt-[90px] text-center lg:p-30 md:p-10 p-4 font-semibold bg-[#f5f4ea] text-black'>
            <h1 className='lg:text-5xl md:text-3xl text-xl mb-4'>Let clients explore your landscape design online <br /> from any device</h1>
            <p className='mb-4 text-lg'>Interactive project websites transform your landscape design <br /> into a digital experience your clients, stakeholders, and councils can explore at their own pace.</p>
            <Button className="lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#d3d2a5] text-[#757741] w-fit font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-white hover:text-[#757741]">
                Start a Project 
            <MoveRight strokeWidth={3}/>
            </Button>
        </div>
        <Runninglogo/>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold'>What's Included</h1>
        <div className='grid lg:grid-cols-4 grid-cols-2 lg:px-30 md:px-10 gap-4 font-semibold lg:text-xl text-lg'>
            <div className='bg-[#f5f4ea] p-5 text-center rounded-[15px]'>
                <h1>Custom-built interactive site</h1>
            </div>
            <div className='bg-[#f5f4ea] p-5 text-center rounded-[15px]'>
                <h1>Navigable 3D model or plan with hotspots</h1>
            </div>
            <div className='bg-[#f5f4ea] p-5 text-center rounded-[15px]'>
                <h1>Branded user interface and URL</h1>
            </div>
            <div className='bg-[#f5f4ea] p-5 text-center rounded-[15px]'>
                <h1>Multi-language toggle</h1>
            </div>
            <div className='bg-[#f5f4ea] p-5 text-center rounded-[15px] lg:col-span-4 md:col-span-2'>
                <h1>Embedded media: CGIs, animations, text, PDF downloads</h1>
            </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center'>
            <div className='lg:pr-30 md:mb-0 mb-4 '>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-4'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-gray-500 md:mb-4'>Interactive sites remove barriers between the viewer and your design — letting them explore with full control and spatial context. They're especially powerful for complex or high-value projects where traditional decks or PDFs feel static and limiting.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white'>1</h1>
                    <h1>We review your model, drawings, or concept</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white'>2</h1>
                    <h1>Our team builds the 3D model + interaction framework</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white'>3</h1>
                    <h1>You review key navigation and UI features</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-white'>4</h1>
                    <h1>We finalise and deliver a hosted site</h1>
                </div>
            </div>
        </div>
        <Accordion type="single" collapsible className='lg:px-30 md:px-10 px-4 lg:pb-15 md:pb-10 pb-4 border-b-1'>
        <AccordionItem value="item-1">
            <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold'>Why It Works?</AccordionTrigger>
            <AccordionContent className='lg:text-xl md:text-base'>
            Interactive sites remove barriers between the viewer and your design — letting them explore with full control and spatial context. They're especially powerful for complex or high-value projects where traditional decks or PDFs feel static and limiting.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold'>Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-15 md:pb-10 pb-4'>
            <a href="https://juansirgianto.github.io/Demo01/">
                <div>
                    <img src="/service.png" alt="" className="transition-transform duration-500 ease-in-out hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Demo01</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="https://juansirgianto.github.io/Demo02/">
                <div>
                    <img src="/hero.png" alt="" className="transition-transform duration-500 ease-in-out hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Demo02</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="https://juansirgianto.github.io/Demo03/">
                <div>
                    <img src="/hero2.png" alt="" className="transition-transform duration-500 ease-in-out hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Demo03</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="https://juansirgianto.github.io/MAIL/">
                <div>
                    <img src="/aerial.png" alt="" className="transition-transform duration-500 ease-in-out hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>MAIL</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div>
        <div style={{ backgroundImage: "url('/room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover'>
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