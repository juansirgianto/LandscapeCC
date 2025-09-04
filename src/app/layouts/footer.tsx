import { div } from 'motion/react-client'
import React from 'react'

function Footer() {
  return (
    <div className='bg-[#757741]'>
    <div className='flex justify-between px-50 py-10 gap-5'>
        <div className='text-white flex flex-col gap-5 w-[30%]'>
            <div className='flex flex-col gap-2'>
                <img src="logo_white.png" alt="" className='w-1/2' />
                <p>Launch a conversion-driven, visually-rich microsite for landscape architects, garden designers, design-build firms, and outdoor contractors — offering premium CGI, immersive tools, and drafting services under the CC Studio brand.</p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-[#d3d2a5]'>85FG+PPF, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali</p>
                <p className='text-[#d3d2a5]'>conceptsconveyed@gmail.com</p>
                <p className='text-[#d3d2a5]'>+62134567890</p>
            </div>
        </div>
        <div className='flex justify-between w-[50%]'>        
            <div className='text-lg'>
                <h1 className='mb-5 text-white font-semibold'>Pages</h1>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>About</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Services</h1>
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
            <div className='text-lg'>
                <h1 className='mb-5 text-white font-semibold '>Services</h1>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>3D Garden Visualisation</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Landscape Animation</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Interactive Project Websites</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>VR & AR for Landscape Projects</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>Site Hub</h1>
                </a>
                <a href="">
                <h1 className='text-[#d3d2a5] hover:text-white'>2D Landscape Drafting & Planning Packs</h1>
                </a>
            </div>
            <div className='text-lg'>
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
    <div className='flex justify-between px-50 py-5 border-t-1 border-[#d3d2a5] text-[#d3d2a5]'>
        <h1>© 2025 LandscapeCC.</h1>
        <h1>Designed by Juan</h1>
    </div>
    </div>
  )
}

export default Footer