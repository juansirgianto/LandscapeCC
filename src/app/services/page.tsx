import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'
import Navbar from '../layouts/navbar'
import Runninglogo from '../layouts/runninglogo'
import Footer from '../layouts/footer'

function Services() {
  return (
      <div>
        <Navbar/>
          <div className='grid grid-cols-2 px-30 mt-[90px] pt-8 gap-4'>
            <div className='flex flex-col'>
              <div className='pr-8'>
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold mb-8'>Our Visualisation Services for Landscapes & Gardens</h1>
                <p className='lg:text-lg text-sm mb-4'>From cinematic renders to planning-ready drafts, our visualisation services are built to support landscape architects, garden designers, and outdoor-focused design professionals. Whether you're preparing for a client pitch, council submission, or design-build delivery — we have a tool for every stage.</p>
              </div>
              <div className=''>
                <img src="service.png" alt="" className='rounded-[15px]'/>
              </div>
            </div>
            <img src="hero2.png" alt="" className='object-cover h-full rounded-[15px]' />
          </div>
          <Runninglogo/>
          <h1 className='text-center text-5xl py-8 font-semibold'>Services Overview</h1>
        <div className='px-30 flex flex-col gap-3 pb-8'>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold text-3xl text-white'>CGI Visualisation for Gardens & Landscapes</p>
            <div>
            <p className='text-white text-lg mb-2'>Photorealistic garden CGI designed to capture planting texture, lighting, atmosphere, and form. <br /> Ideal for client approvals, tender documents, and marketing visuals.</p>
            <Button className='bg-[#f5f4ea] text-black hover:bg-white hover:border-black hover:border-1 rounded-full text-base font-semibold cursor-pointer'>Explore More
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="garden.jpg" alt="" className='rounded-[15px] w-[40%] h-[30vh] object-cover' />
        </div>
      </a>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <img src="service.png" alt="" className='rounded-[15px] w-[40%] h-[30vh] object-cover' />
          <div className='flex flex-col justify-between p-5 w-[60%] text-end'>
            <p className='font-semibold text-3xl text-white'>Landscape Animation</p>
            <div>
            <p className='text-white text-lg mb-2 text-end'>Bring your garden or landscape proposal to life with cinematic flythroughs and mood-driven clips. <br /> Perfect for emotionally engaging private clients or design competitions.</p>
            <Button className='bg-[#f5f4ea] text-black hover:bg-white hover:border-black hover:border-1 rounded-full text-base font-semibold cursor-pointer'>Explore More
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
        </div>
      </a>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold text-3xl text-white'>Interactive Project Website</p>
            <div>
            <p className='text-white text-lg mb-2'>Transform large or complex outdoor sites into clickable, immersive walkthroughs. <br /> Let clients, stakeholders, or councils explore your project in-browser.</p>
            <Button className='bg-[#f5f4ea] text-black hover:bg-white hover:border-black hover:border-1 rounded-full text-base font-semibold cursor-pointer'>Explore More
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="aerial.png" alt="" className='rounded-[15px] w-[40%] h-[30vh] object-cover' />
        </div>
      </a>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <img src="garden.jpg" alt="" className='rounded-[15px] w-[40%] h-[30vh] object-cover' />
          <div className='flex flex-col justify-between p-5 w-[60%] text-end'>
            <p className='font-semibold text-3xl text-white'>VR & AR for Gardens</p>
            <div>
            <p className='text-white text-lg mb-2'>Review designs in real-time using VR headsets or tablet-based AR plans. <br /> Ideal for walk-throughs, council presentations, or public engagement events.</p>
            <Button className='bg-[#f5f4ea] text-black hover:bg-white hover:border-black hover:border-1 rounded-full text-base font-semibold cursor-pointer'>Explore More
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
        </div>
      </a>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold text-3xl text-white'>2D Drafting & Planning Packs</p>
            <div>
            <p className='text-white text-lg mb-2'>Fast, flexible 2D drawing production based on your concepts. <br /> We build clean, clear layouts suitable for planning approval, contractor coordination, or presentation decks.</p>
            <Button className='bg-[#f5f4ea] text-black hover:bg-white hover:border-black hover:border-1 rounded-full text-base font-semibold cursor-pointer'>Explore More
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="service.png" alt="" className='rounded-[15px] w-[40%] h-[30vh] object-cover' />
        </div>
      </a>
      </div>
      <div style={{ backgroundImage: "url('room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover'>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold md:top-2/3 top-1/2 -translate-y-1/2 '>
          <h1>Not sure what service you need?</h1>
          <h1 className='mb-4'>Send us your sketch, plan, or brief — and we'll recommend the right mix <br /> of visuals to move your project forward.</h1>
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

export default Services