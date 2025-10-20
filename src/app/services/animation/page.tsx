import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'

function Animation() {
  return (
    <div>
        <Navbar/>
        <div className='mt-[73px] grid md:grid-cols-2'>
            <div className='bg-[#757741] lg:h-[80vh] md:h-[60vh] lg:p-30 md:p-10 p-10 flex flex-col justify-center md:gap-8 gap-4 text-white'>
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold'>Let your clients walk through the space before it's built</h1>
                <h1 className='lg:text-xl md:text-base text-sm'>Our landscape animation services transform your designs into immersive, cinematic motion clips — helping clients, councils, and collaborators visualise space as it evolves. Whether you're pitching a private garden, public realm upgrade, or commercial outdoor project, animation provides a persuasive storytelling tool for both emotion and clarity.</h1>
                <Button className="lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#d3d2a5] text-[#757741] w-fit font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-white hover:text-[#757741]">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
            </div>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className='lg:h-[80vh] md:h-[60vh] object-cover hidden md:flex' />
        </div>
        <Runninglogo/>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold'>What's Included</h1>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:px-30 md:px-10 px-4 gap-4 lg:text-2xl text-sm'>
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
        <div className='lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 lg:my-15 md:my-10 my-4 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center bg-[#757741]'>
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
                    <h1>Send us your sketch, CAD, or concept</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#f5f4ea] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-black font-semibold'>2</h1>
                    <h1>We develop camera paths and pacing</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#f5f4ea] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-black font-semibold'>3</h1>
                    <h1>Preview shared for review</h1>
                </div>
                <div className='flex bg-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#f5f4ea] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-black font-semibold'>4</h1>
                    <h1>Final animation delivered in 1 - 3 formats</h1>
                </div>
            </div>
        </div>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:pb-15 md:pb-10 pb-4 font-semibold'>Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-15 md:pb-10 pb-4'>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Foxtera</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl pt-1'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover'>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold md:top-2/3 top-1/2 -translate-y-1/2 '>
            <h1 className='mb-4'>Want to tell your <br /> landscape story in motion?</h1>
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

export default Animation