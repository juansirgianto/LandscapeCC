import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'
import Navbar from '../layouts/navbar'

function Services() {
  return (
      <div>
        <Navbar/>
        <div className='px-30 flex flex-col gap-3'>
      <a href="">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
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
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
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
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
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

export default Services