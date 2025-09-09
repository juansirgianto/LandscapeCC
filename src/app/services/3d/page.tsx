import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import Footer from '@/app/layouts/footer'

function Cgi() {
  return (
    <div>
        <Navbar/>
        <div className='mt-[90px] grid grid-cols-2 lg:p-30 md:p-10 p-4 items-center bg-[#757741] text-white'>
            <div className='lg:pr-20'>
            <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold mb-4'>Bring your landscape design to life through cinematic, photorealistic CGI.</h1>
            <Button className="lg:text-xl md:text-base rounded-full relative items-center bg-[#d3d2a5] text-[#757741] font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-white hover:text-[#757741]">
                Start a Project
            <MoveRight strokeWidth={3}/>
            </Button>
            </div>
            <h1 className='lg:pl-50 md:pl-20 lg:text-xl md:text-base text-xs'>Our 3D landscape visualisation services help landscape architects, garden designers, design-build firms, and public realm specialists turn outdoor concepts into highly detailed, emotionally compelling visuals. Whether you're pitching a private garden, presenting a commercial plaza, or submitting a public realm proposal — we produce photorealistic CGI that supports client presentations, planning approvals, tender submissions, and more.</h1>
        </div>
        <Runninglogo/>
        <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:py-15 md:py-10 py-4 font-semibold'>What's Included</h1>
        <div className='lg:px-30 md:px-10 px-4 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2'>
            <div style={{ backgroundImage: "url('/hero.png')" }} className='relative bg-cover bg-center md:h-[30vh] h-[20vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/60 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-3xl md:text-xl text-base font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Cinematic still CGI of your garden or landscape design
                    </h1>
                </div>
            </div>
            <div style={{ backgroundImage: "url('/hero2.png')" }} className='relative bg-cover bg-center md:h-[30vh] h-[20vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/60 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-3xl md:text-xl text-base font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Planting texture and species-specific modeling
                    </h1>
                </div>
            </div>
            <div style={{ backgroundImage: "url('/service.png')" }} className='relative bg-cover bg-center md:h-[30vh] h-[20vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/60 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-3xl md:text-xl text-base font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Seasonal + lighting variations
                    </h1>
                </div>
            </div>
            <div style={{ backgroundImage: "url('/hero2.png')" }} className='relative bg-cover bg-center md:h-[30vh] h-[20vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/60 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-3xl md:text-xl text-base font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Atmospheric detailing: water reflections, furniture, lighting accents
                    </h1>
                </div>
            </div>
            <div style={{ backgroundImage: "url('/service.png')" }} className='relative bg-cover bg-center md:h-[30vh] h-[20vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/60 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-3xl md:text-xl text-base font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Aerial or street-level perspectives
                    </h1>
                </div>
            </div>
            <div style={{ backgroundImage: "url('/hero.png')" }} className='relative bg-cover bg-center md:h-[30vh] h-[20vh] rounded-[15px]'>
                <div className="absolute inset-0 bg-black/60 z-0 rounded-[15px]" />  {/* overlay hitam transparan */}
                <div className='relative text-center text-white lg:text-3xl md:text-xl text-base font-semibold top-1/2 -translate-y-1/2 px-2'>
                    <h1 className='mb-5'>
                    Formats for print, PDF, tender decks, or planning submissions
                    </h1>
                </div>
            </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4 grid md:grid-cols-2 lg:py-15 md:py-10 py-4 lg:my-15 md:my-10 my-4 lg:gap-8 md:gap-4 items-center bg-[#d3d2a5] '>
            <div className='lg:pr-30 md:mb-0 mb-4'>
                <h1 className='lg:text-3xl md:text-xl text-lg font-semibold mb-4 text-center md:text-start'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-black md:mb-4'>Photorealistic CGI helps your clients, councils, and collaborators fully understand your design before it's built. From luxury garden projects to civic plazas and commercial streetscapes, our visuals communicate spatial intent, planting, and materiality with clarity — accelerating buy-in and streamlining decision-making across residential, commercial, and public sectors.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>1</h1>
                    <h1>Send us your sketch, CAD, or concept</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>2</h1>
                    <h1>We confirm camera angles + model detail</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>3</h1>
                    <h1>Draft render review + client feedback</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm'>
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>4</h1>
                    <h1>Final delivery in high-res format</h1>
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
                <h1 className='mb-4'>Let's bring your garden design to life.</h1>
                <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cgi