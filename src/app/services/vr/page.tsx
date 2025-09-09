import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Button } from '@/components/ui/button'
import { MoveRight, RectangleGoggles } from 'lucide-react'
import React from 'react'

function Vr() {
  return (
    <div>
        <Navbar/>
        <div className='mt-[90px] grid md:grid-cols-2'>
            <img src="/garden.jpg" alt="" className='lg:h-[80vh] md:h-[60vh] object-cover hidden md:flex' />
            <div className='bg-[#757741] lg:h-[80vh] md:h-[60vh] lg:p-30 md:p-10 p-10 flex flex-col justify-center md:gap-8 gap-4 text-white'>
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold'>High-tech overlays and immersive review tools for unbuilt outdoor spaces</h1>
                <h1 className='lg:text-xl md:text-base text-sm'>Our VR and AR services help you communicate unbuilt designs through immersive, easy-to-access experiences. Whether you need to walk a client through a large estate, help a council review a civic upgrade, or sell a resort vision remotely — these tools bring your landscape to life.</h1>
                <Button className="lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#d3d2a5] text-[#757741] w-fit font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-white hover:text-[#757741]">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
            </div>
        </div>
        <Runninglogo/>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold'>What's Included</h1>
        <div className='lg:px-30 md:px-10 px-4 flex flex-col gap-4'>
            <div className='bg-[#d3d2a5] md:py-5 py-2 md:px-10 px-5 rounded-[15px] flex justify-between items-center'>
                <div>
                <h1 className='lg:text-3xl md:text-xl text-base font-semibold'>Interactive AR Masterplans</h1>
                <h1 className='lg:text-xl md:text-base text-sm mr-2'>Browser-based overlays of site plans with clickable hotspots, design toggles, and info panels. Works on tablet and mobile — no app required.</h1>
                </div>
                <div className='bg-[#757741] text-[#d3d2a5] p-3 rounded-full'>
                    <RectangleGoggles className='md:size-10'/>
                </div>
            </div>
            <div className='bg-[#d3d2a5] md:py-5 py-2 md:px-10 px-5 rounded-[15px] flex justify-between items-center'>
                <div>
                <h1 className='lg:text-3xl md:text-xl text-base font-semibold'>Static VR</h1>
                <h1 className='lg:text-xl md:text-base text-sm mr-2'>360° panorama views of your design — viewable in browser, desktop, or headset. A cost-effective way to communicate atmosphere and scale.</h1>
                </div>
                <div className='bg-[#757741] text-[#d3d2a5] p-3 rounded-full'>
                    <RectangleGoggles className='md:size-10'/>
                </div>
            </div>
            <div className='bg-[#d3d2a5] md:py-5 py-2 md:px-10 px-5 rounded-[15px] flex justify-between items-center'>
                <div>
                <h1 className='lg:text-3xl md:text-xl text-base font-semibold'>Interactive Free-Roam VR</h1>
                <h1 className='lg:text-xl md:text-base text-sm mr-2'>Fully explorable environments built in Unreal Engine, with guided paths, free-roam control, material toggles, planting variations, and more.</h1>
                </div>
                <div className='bg-[#757741] text-[#d3d2a5] p-3 rounded-full'>
                    <RectangleGoggles className='md:size-10'/>
                </div>
            </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 lg:my-15 md:my-10 my-4 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center bg-[#f5f4ea]'>
            <div className='lg:pr-30 md:mb-0 mb-4 '>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-4 text-center md:text-start'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-black md:mb-4'>These tools go beyond visuals — they build understanding. VR lets people walk through space as if it's already built. AR masterplans turn drawings into layered, explorable presentations. Together, they dramatically improve communication, buy-in, and clarity across client, contractor, and council teams.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base text-sm rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#757741] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>1</h1>
                    <h1 className='text-white'>Send us your model, plan, or layout sketch</h1>
                </div>
                <div className='flex bg-[#757741] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>2</h1>
                    <h1 className='text-white'>We develop the AR/VR experience to match scope and device</h1>
                </div>
                <div className='flex bg-[#757741] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>3</h1>
                    <h1 className='text-white'>You review camera flow, toggles, and key content</h1>
                </div>
                <div className='flex bg-[#757741] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>4</h1>
                    <h1 className='text-white'>We deliver a browser link, headset-ready file, or QR code</h1>
                </div>
            </div>
        </div>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:pb-15 md:pb-10 pb-4 font-semibold'>Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-15 md:pb-10 pb-4'>
            <a href="">
                <div>
                    <img src="/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Foxtera</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="/hero.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="/hero2.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div>
        <div style={{ backgroundImage: "url('/room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover'>
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