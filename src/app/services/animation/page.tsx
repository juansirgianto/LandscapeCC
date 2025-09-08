import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'

function Animation() {
  return (
    <div>
        <Navbar/>
        <div className='mt-[90px] grid grid-cols-2'>
            <div className='bg-[#757741] h-[80vh] p-30 flex flex-col justify-center gap-8 text-white'>
                <h1 className='lg:text-5xl font-semibold'>Let your clients walk through the space before it's built</h1>
                <h1 className='lg:text-xl'>Our landscape animation services transform your designs into immersive, cinematic motion clips — helping clients, councils, and collaborators visualise space as it evolves. Whether you're pitching a private garden, public realm upgrade, or commercial outdoor project, animation provides a persuasive storytelling tool for both emotion and clarity.</h1>
                <Button className="lg:text-xl md:text-base rounded-full relative items-center bg-[#d3d2a5] text-[#757741] w-fit font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-white hover:text-[#757741]">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
            </div>
            <img src="/service.png" alt="" className='h-[80vh]' />
        </div>
        <Runninglogo/>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold'>What's Included</h1>
        <div className='grid grid-cols-2 lg:px-30 md:px-10 px-4 gap-4 lg:text-2xl'>
            <div className='bg-[#d3d2a5] rounded-full p-2'>
                <h1 className='text-center'>Cinematic flythrough or walkthrough clips (10s - 2m)</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full p-2'>
                <h1 className='text-center'>Day/night lighting transitions</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full p-2'>
                <h1 className='text-center'>Animated planting sequences and phasing overlays</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full p-2'>
                <h1 className='text-center'>Custom sound, text labels, or voiceover options</h1>
            </div>
            <div className='bg-[#d3d2a5] rounded-full p-2 col-span-2'>
                <h1 className='text-center'>Delivered in MP4, web-optimised or presentation formats</h1>
            </div>
        </div>
        <div className='lg:px-30 md:p-10 p-4 lg:py-15 grid grid-cols-2 items-center'>
            <h1 className='lg:text-3xl md:text-xl text-base font-semibold'>Why It Works?</h1>
            <h1 className='lg:text-xl md:text-base'>Unlike static visuals, animation creates movement, emotion, and clarity — helping all stakeholders feel immersed in the experience of the future space. Especially valuable for large or spatially complex designs where flow and use matter.</h1>
        </div>
        <div className='lg:px-30 md:px-10 px-4 lg:pb-15 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center'>
            <div className='lg:pr-30 md:mb-0 mb-4'>
                <h1 className='lg:text-3xl md:text-xl text-base font-semibold mb-4'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-xs text-gray-500 mb-4'>Photorealistic CGI helps your clients, councils, and collaborators fully understand your design before it's built. From luxury garden projects to civic plazas and commercial streetscapes, our visuals communicate spatial intent, planting, and materiality with clarity — accelerating buy-in and streamlining decision-making across residential, commercial, and public sectors.</h1>
                <Button className="lg:text-xl md:text-base rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-xs'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white'>1</h1>
                    <h1>Send us your sketch, CAD, or concept</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-xs'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white'>2</h1>
                    <h1>We confirm camera angles + model detail</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-xs'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white'>3</h1>
                    <h1>Draft render review + client feedback</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-xs'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white'>4</h1>
                    <h1>Final delivery in high-res format</h1>
                </div>
            </div>
        </div>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:pb-8 md:pb-6 pb-4 font-semibold'>Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-8 md:pb-6 pb-4'>
            <a href="">
                <div>
                    <img src="/service.png" alt="" className="transition-transform duration-500 ease-in-out hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Foxtera</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="/hero.png" alt="" className="transition-transform duration-500 ease-in-out hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="/hero2.png" alt="" className="transition-transform duration-500 ease-in-out hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="/service.png" alt="" className="transition-transform duration-500 ease-in-out hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Animation