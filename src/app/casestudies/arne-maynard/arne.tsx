'use client'

import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import React from 'react'

function ArnePage() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/compressed_755CC_AM_REV3_6-Photo.jpg')" }} className='relative bg-cover bg-center md:h-[100vh] h-[50vh] mt-[73px] md:mt-0 lg:px-50 md:px-10 px-4' data-aos="fade-right">
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className='relative text-center text-white md:text-5xl text-3xl font-semibold top-1/2 -translate-y-1/2 md:px-0 px-2'>
            <h1 className='mb-5'>
            Arne Maynard Studio
            </h1>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:gap-8 gap-4 items-center lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4'>
            <div data-aos="fade-right">
                <h1 className='lg:text-xl md:text-lg text-sm lg:text-start text-center'>Arne Maynard Studio is one of the most prestigious garden and landscape design studios in the UK, known for crafting timeless, site-sensitive landscapes. Their work frequently involves heritage estates, country houses, and complex rural properties with deep historical context.</h1>
            </div>
            <div className='flex flex-col justify-between h-full md:gap-5 gap-3'>
                <h1 className='lg:text-3xl md:text-2xl text-lg font-semibold text-center' data-aos="fade-up">Services Applied :</h1>
                <div className='grid grid-cols-2 gap-2'>
                <h1 className='text-center lg:text-lg md:text-base text-xs rounded-full p-2 text-white bg-gradient-to-t from-[#757741] to-[#d3d2a5]' data-aos="fade-up">Precision 3D Base Modelling</h1>
                <h1 className='text-center lg:text-lg md:text-base text-xs rounded-full p-2 text-white bg-gradient-to-t from-[#757741] to-[#d3d2a5]' data-aos="fade-up">Site Model for Country Estate Design</h1>
                <h1 className='text-center lg:text-lg md:text-base text-xs rounded-full p-2 text-white bg-gradient-to-t from-[#757741] to-[#d3d2a5] col-span-2' data-aos="fade-up">Detailed Landscape Topography Mapping</h1>
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
              src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_755CC_AM_REV3_6-Photo.jpg" 
              alt="Landscape design visualization 1" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="col-span-2 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-left">
            <img 
              src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_755CC_AM_REV3_5-Photo.jpg" 
              alt="Landscape design visualization 2" 
              className="w-full h-full object-cover "
            />
          </div>
          
          {/* Image 3 */}
          <div className="col-span-3 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-up">
            <img 
              src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_1125CC_REV3_10.jpg" 
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover "
            />
          </div>

         {/* Image 4 */}
          <div className="col-span-2 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-right">
            <img 
              src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_1125CC_REV3_6.jpg" 
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover "
            />
          </div>

         {/* Image 5 */}
          <div className="col-span-1 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-left">
            <img 
              src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_1125CC_REV3_1.jpg" 
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover "
            />
          </div>

         {/* Image 6 */}
          <div className="col-span-1 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-right">
            <img 
              src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_AMGD7522.jpg" 
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover "
            />
          </div>
         {/* Image 7 */}
          <div className="col-span-2 md:max-h-[60vh] overflow-hidden rounded-lg" data-aos="fade-left">
            <img 
              src="https://designedbypelago.com/wp-content/uploads/2025/10/compressed_AMGD752.jpg" 
              alt="Landscape design visualization 3" 
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ArnePage