import React from 'react'
import Navbar from './layouts/navbar'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'

function page() {
  return (
    <div>
      <Navbar/>
      <div style={{ backgroundImage: "url('hero.png')" }} className='realtive bg-cover bg-center h-[100vh]'>
        <div className="absolute inset-0 bg-black/60 z-0" />  {/* overlay hitam transparan */}
        <div className='relative text-center text-white text-5xl font-semibold top-1/2 -translate-y-1/2'>
        <h1 className='mb-5'>
        Immersive visuals & approval-ready plans <br/> for outdoor spaces
        </h1>
        <p className='text-xl text-gray-300 mb-5 font-normal'>We help landscape architects, garden designers, and design-build firms bring their outdoor visions to life <br/> through cinematic garden visuals, photorealistic CGI, interactive tools, and lightning-fast 2D drafting support.</p>
        <Button className="text-2xl rounded-full relative items-center bg-[#757741] font-semibold py-7 !px-7 cursor-pointer hover:bg-[#d3d2a5] hover:text-black">
          Explore Services 
          <MoveRight strokeWidth={3}/>
          </Button>
        </div>
      </div>
      <div className='py-8 px-30'>      
      <div className='flex justify-between items-center'>
        <p className='text-4xl font-semibold'>What we offer</p>
        <h1 className='w-[400px] text-xl'>Photorealistic garden CGI. Flythrough animations. Interactive site tours. Planning-ready 2D layouts.
If it supports your outdoor design — we can visualise it</h1>
      </div>
      </div>
      <div className='px-30 flex flex-col gap-3'>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:m-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold text-3xl text-white'>3D Garden Visualisation</p>
            <div>
            <p className='text-white text-xl mb-2'>Bring your landscape design to life through cinematic, <br /> photorealistic CGI.</p>
            <Button className='bg-[#f5f4ea] text-black hover:bg-white hover:border-black hover:border-1 rounded-full text-base font-semibold cursor-pointer'>Explore
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="garden.jpg" alt="" className='rounded-[15px] w-[40%] h-[30vh] object-cover' />
        </div>
      </a>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:m-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold text-3xl text-white'>Landscape Animation</p>
            <div>
            <p className='text-white text-xl mb-2'>Let your clients walk through the space <br /> before it's built.</p>
            <Button className='bg-[#f5f4ea] text-black hover:bg-white hover:border-black hover:border-1 rounded-full text-base font-semibold cursor-pointer'>Explore
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="service.png" alt="" className='rounded-[15px] w-[40%] h-[30vh] object-cover' />
        </div>
      </a>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:m-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold text-3xl text-white'>Interactive Project Website</p>
            <div>
            <p className='text-white text-xl mb-2'>Let clients explore your landscape design online <br />from any device</p>
            <Button className='bg-[#f5f4ea] text-black hover:bg-white hover:border-black hover:border-1 rounded-full text-base font-semibold cursor-pointer'>Explore
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="aerial.png" alt="" className='rounded-[15px] w-[40%] h-[30vh] object-cover' />
        </div>
      </a>
      </div>
      
    </div>
  )
}

export default page