'use client'

import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import React from 'react'

function StylarcPage() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div 
          style={{ backgroundImage: "url('./stylarc/photos/1.jpg')" }}
        //   style={{ backgroundImage: "url('./photos/1.jpg')" }}
          className='relative bg-cover bg-center md:h-[100vh] h-[50vh] mt-[73px] md:mt-0 lg:px-50 md:px-10 px-4' data-aos="fade-right">
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className='relative text-center text-white md:text-5xl text-3xl font-semibold top-1/2 -translate-y-1/2 md:px-0 px-2'>
            <h1 className='mb-5'>
            Stylarc
            </h1>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:gap-8 gap-4 items-center lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4'>
            <div data-aos="fade-right">
                <h1 className='lg:text-xl md:text-lg text-sm lg:text-start text-center'>Specialising in luxury residential outdoor environments across California and beyond, Stylarc entrusted us to deliver both creative design support and high-end CGI. Our role extended beyond rendering - we became their core concept design partner, delivering everything from layouts to storytelling, visual assets to immersive tools.</h1>
            </div>
            <div className='flex flex-col justify-between h-full md:gap-5 gap-3'>
                <h1 className='lg:text-3xl md:text-2xl text-lg font-semibold text-center' data-aos="fade-up">Services Applied :</h1>
                <div className='grid grid-cols-2 gap-2'>
                <h1 className='text-center lg:text-lg md:text-base text-xs rounded-full p-2 text-white bg-gradient-to-t from-[#757741] to-[#d3d2a5]' data-aos="fade-up">3D Garden Visualisation</h1>
                <h1 className='text-center lg:text-lg md:text-base text-xs rounded-full p-2 text-white bg-gradient-to-t from-[#757741] to-[#d3d2a5]' data-aos="fade-up">Garden Design Animation</h1>
                <h1 className='text-center lg:text-lg md:text-base text-xs rounded-full p-2 text-white bg-gradient-to-t from-[#757741] to-[#d3d2a5] my-auto' data-aos="fade-up">2D Drafting & Planning Packs</h1>
                <h1 className='text-center lg:text-lg md:text-base text-xs rounded-full p-2 text-white bg-gradient-to-t from-[#757741] to-[#d3d2a5]' data-aos="fade-up">Immersive + Interactive Presentation Tools</h1>
                <h1 className='text-center lg:text-lg md:text-base text-xs rounded-full p-2 text-white bg-gradient-to-t from-[#757741] to-[#d3d2a5] col-span-2' data-aos="fade-up">Visual Strategy Support for High-Volume Studios</h1>
                </div>
            </div>
        </div>
        <div className="w-full lg:px-30 md:px-10 px-4 lg:pb-15 md:pb-10 pb-4">
      {/* Container with proper padding */}
      <div className="mx-auto">
        {/* Grid dengan gap untuk spacing */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-2">
          {/* Image 1 */}
          <div className="col-span-1 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-right">
            <img 
              src="./stylarc/photos/1.jpg"
            //   src="./photos/1.jpg"
              alt="Landscape design visualization 1" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="col-span-2 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-left">
            <img 
              src="./stylarc/photos/2.jpg"
            //   src="./photos/2.jpg"
              alt="Landscape design visualization 2" 
              className="w-full h-full object-cover "
            />
          </div>
          
          {/* Image 3 */}
          <div className="col-span-3 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-up">
            <img 
              src="./stylarc/photos/3.jpg"
            //   src="./photos/3.jpg"
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover object-top"
            />
          </div>

         {/* Image 4 */}
          <div className="col-span-2 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-right">
            <img 
              src="./stylarc/photos/4.jpg"
            //   src="./photos/4.jpg"
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover object-top"
            />
          </div>

         {/* Image 5 */}
          <div className="col-span-1 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-left">
            <img 
              src="./stylarc/photos/5.jpg"
            //   src="./photos/5.jpg"
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover "
            />
          </div>

         {/* Image 6 */}
          <div className="col-span-3 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-up">
            <img 
              src="./stylarc/photos/6.jpg"
            //   src="./photos/6.jpg"
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover object-[center_80%]"
            />
          </div>

         {/* Image 7 */}
          <div className="col-span-1 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-up">
            <img 
              src="./stylarc/photos/7.jpg"
            //   src="./photos/7.jpg"
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover "
            />
          </div>

         {/* Image 8 */}
          <div className="col-span-2 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-up">
            <img 
              src="./stylarc/photos/8.jpg"
            //   src="./photos/8.jpg"
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default StylarcPage