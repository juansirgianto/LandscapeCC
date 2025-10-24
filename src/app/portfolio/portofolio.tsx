'use client'

import React from 'react'
import Navbar from '../layouts/navbar'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Footer from '../layouts/footer'

function PortofolioPage() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='flex lg:flex-row flex-col gap-5 justify-between lg:items-center mt-[73px] lg:px-30 md:px-10 px-4 lg:py-20 py-10'>
            <div className='lg:w-[50%]' data-aos="fade-right">
                <h1 className='md:text-5xl text-3xl font-semibold'>Portfolio</h1>
                <h1 className='md:text-2xl text-lg'>Landscape CGI, Animations & Immersive Design Previews</h1>
            </div>
            <h1 className='lg:w-[40%] lg:text-lg md:text-base text-sm' data-aos="fade-left">
                Explore a curated selection of photorealistic 3D imagery, cinematic animations, and immersive landscape visuals — tailored to the needs of garden designers, landscape architects, developers, and public realm consultants. Use the filters to explore work by project type or region.
            </h1>
        </div>
        <div className='grid lg:grid-cols-2 lg:px-30 md:px-10 px-4 gap-x-5 lg:gap-y-10 gap-y-5 lg:pb-20 pb-10'>
            <div className='flex flex-col gap-2' data-aos="fade-right">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                        <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_2308CC-FOX-CAM-02-FINAL-Photos.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Foxterra</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(California, US)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_755CC_AM_REV3_6-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Arne Maynard Studio</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(United Kingdom)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-right">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_1732CC_WLDN_VIEW_5-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Wilden</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(Dubai, UAE)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_745CC_CSC_REV5_R-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Stylarc</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(California, US)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-right">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_1729CC_AV_REV9_9-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Adam Vetere Landscape & Garden Design</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(United Kingdom)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_992CC_GCL_REV5_5-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Garden Club London</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(United Kingdom)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-right">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_1752CC_EBD_REV4_19-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>EBD Studios</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(Colorado, US)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_1584CC_WLP_REV5_18-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>We Love Plants</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(United Kingdom)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-right">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_751CC_RW_REV10_18-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Rachael White Designs</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(United Kingdom)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_2569CC_RS_REV6_8-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Randle Siddeley</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(United Kingdom)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-right">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_479CC_KP_REV5_19-Photo.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Kit Peel Gardens</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(United Kingdom)</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2' data-aos="fade-left">
                <a href="" className='cursor-pointer'>
                    <div className='overflow-hidden rounded-[15px]'>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_2326CC_HLLA_REV2-15.jpg" alt="" className='rounded-[15px] object-cover object-center w-full lg:h-[50vh] md:h-[40vh] h-[25vh] hover:scale-105 transition-all duration-300 ease-in-out' />
                    </div>
                </a>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>Harold Leidner Landscape Architects</h1>
                    <h1 className='lg:text-xl md:text-lg text-base'>(Texas, US)</h1>
                </div>
            </div>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/1577CC_PWGD_POOL_REV-01-Photo.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 '>
                <h1 className='mb-4'>Want visuals like these?</h1>
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

export default PortofolioPage