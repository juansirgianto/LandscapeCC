import React from 'react'
import Navbar from './layouts/navbar'
import { Button } from '@/components/ui/button'

function page() {
  return (
    <div>
      <Navbar/>
      <div style={{ backgroundImage: "url('hero.png')" }} className='realtive bg-cover bg-center h-[100vh]'>
        <div className="absolute inset-0 bg-black/50 z-0" />  {/* overlay hitam transparan */}
        <div className='relative text-center text-white text-5xl font-semibold top-1/2 -translate-y-1/2'>
        <h1 className='mb-5'>
        Immersive visuals & approval-ready plans <br/> for outdoor spaces
        </h1>
        <Button className="text-2xl rounded-full bg-[#757741] font-semibold py-7 px-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-black">Contact Us</Button>
        </div>
      </div>
      <div>
        skjabdka
      </div>
    </div>
  )
}

export default page