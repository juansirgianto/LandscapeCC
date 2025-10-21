import { MapPin } from 'lucide-react'
import { div } from 'motion/react-client'
import React from 'react'

function Footer() {
  return (
    <div className='bg-[#757741]' data-aos="fade-up">
    <div className='lg:flex justify-between lg:px-30 lg:py-10 md:px-10 md:py-5 gap-5 py-5 px-3'>
        <div className='text-white flex flex-col gap-5 lg:w-[30%] md:w-[50%]'>
            <div className='flex flex-col gap-2'>
                <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo_white.png" alt="" className='md:w-1/2 w-1/3 md:mx-0 mx-auto' />
                <p className='lg:text-base md:text-sm text-xs md:text-start text-center'>We help landscape architects, garden designers, design-build firms, and outdoor contractors bring unbuilt spaces to life with premium CGI, immersive presentation tools, and planning-ready drafting — all under the CC Studio brand.</p>
            </div>
            <div className='flex flex-col gap-1 lg:text-base md:text-sm text-xs md:text-start text-center'>
                <div className='flex text-[#d3d2a5] items-center gap-1 mx-auto md:mx-0'>
                <MapPin className='w-4 h-4'/>
                <p>Bali, Indonesia</p>
                </div>
                <p className='text-[#d3d2a5]'>conceptsconveyed@gmail.com</p>
                <p className='text-[#d3d2a5]'>+62134567890</p>
            </div>
        </div>
        <div className='flex justify-between gap-3 lg:w-[60%] lg:mt-0 md:mt-5 mt-3'>        
            <div className='lg:text-lg md:text-base text-sm md:text-start text-center w-1/3'>
                <h1 className='mb-5 text-white font-semibold'>Pages</h1>
                <a href="/LandscapeCC/about">
                <h1 className='text-[#d3d2a5] hover:text-white'>About</h1>
                </a>
                <a href="/LandscapeCC/services">
                <h1 className='text-[#d3d2a5] hover:text-white'>Services</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Portofolio</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Case Studies</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Resources</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Contact</h1>
                </a>
            </div>
            <div className='lg:text-lg md:text-base text-sm md:text-start text-center w-1/3'>
                <h1 className='mb-5 text-white font-semibold '>Services</h1>
                <a href="/Landscape/services/3d">
                <h1 className='text-[#d3d2a5] hover:text-white'>3D Visualisation</h1>
                </a>
                <a href="/Landscape/services/animation">
                <h1 className='text-[#d3d2a5] hover:text-white'>3D Design & Terrain Modelling</h1>
                </a>
                <a href="/Landscape/services/vr">
                <h1 className='text-[#d3d2a5] hover:text-white'>VR & AR Services</h1>
                </a>
                <a href="/Landscape/services/interactive">
                <h1 className='text-[#d3d2a5] hover:text-white'>Interactive Masterplans</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Site Hub</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>2D Drafting & Planning</h1>
                </a>
            </div>
            <div className='lg:text-lg md:text-base text-sm md:text-start text-center w-1/3'>
                <h1 className='mb-5 text-white font-semibold'>Social</h1>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Instagram</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Facebook</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Linkedin</h1>
                </a>
                <a href="https://www.conceptsconveyed.com/">
                <h1 className='text-[#d3d2a5] hover:text-white'>Concepts Conveyed</h1>
                </a>
            </div>
        </div>
    </div>
    <div className='flex justify-between lg:px-30 lg:py-5 md:px-10 md:py-5 p-3 border-t-1 border-[#d3d2a5] text-[#d3d2a5] lg:text-lg md:text-base text-xs'>
        <h1>© 2025 LandscapeCC.</h1>
        <h1>Designed by Juan</h1>
    </div>
    </div>
  )
}

export default Footer