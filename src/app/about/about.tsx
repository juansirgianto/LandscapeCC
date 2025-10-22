'use client'

import React from 'react'
import Navbar from '../layouts/navbar'
import Runninglogo from '../layouts/runninglogo'
import { Button } from '@/components/ui/button'
import { Brush, House, HousePlus, MapPinHouse, MoveRight, NotebookPen, Palette, Trees, WavesLadder } from 'lucide-react'
import { motion } from 'framer-motion'
import Footer from '../layouts/footer'

function AboutPage() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/09/compressed_1235CC_CSC_REV3_5-Photo.jpg')" }} className='relative bg-cover bg-[center_60%] h-[50vh] lg:px-50 md:px-10 px-4 mt-[73px]'>
            <div className="absolute inset-0 bg-black/70 z-0" />
            <div className='relative text-center text-white lg:text-5xl md:text-3xl text-xl font-semibold top-1/2 -translate-y-1/2 md:px-0 px-2'>
            <h1 className='mb-5'>
            We visualise what landscape professionals imagine.
            </h1>
            <p className='lg:text-xl md:text-base text-sm text-gray-300 mb-5 font-normal'>Landscape by CC Studio is a global landscape visualisation studio dedicated to helping outdoor design professionals bring unbuilt spaces to life. With over 2,600 projects completed worldwide, we specialise in producing photorealistic garden CGI, cinematic animations, immersive experiences, and planning-ready 2D drawings - tailored to the needs of landscape architects, garden designers, urban realm consultants, and design-build firms. Whether you're seeking planning approval, stakeholder engagement, or client buy-in, our visuals combine precision and emotion to make every landscape design story clear, compelling, and impactful.</p>
            </div>
        </div>
        </motion.div>
        <Runninglogo/>
        <div className='mx-auto text-center lg:px-50 md:px-10 px-4' data-aos="fade-left">
            <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold lg:py-8 md:py-6 py-4'>Our Philosophy :</h1>
            <h1 className='lg:text-2xl md:text-lg text-sm lg:pb-8 md:pb-6 pb-4'>Landscape design is about atmosphere, ecology, and emotion. Our role is to translate that into visuals that resonate-across approvals, marketing, or municipal debate. Whether you're briefing a planting pack or pitching an urban square, we streamline your process so you can focus on the design.</h1>
            <a href="#explore">
            <Button className="lg:text-2xl md:text-xl text-xs rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b md:!p-7 !p-5 cursor-pointer">
                Ready to visualise your landscape with impact?
            <MoveRight strokeWidth={3}/>
            </Button>
            </a>
        </div>
        <div className='flex lg:mt-15 md:mt-10 mt-4'>
        <img src="https://designedbypelago.com/wp-content/uploads/2025/10/Service-Page-img.jpg" alt="" className='w-[50%] object-cover hidden md:flex' />
        <div className='lg:px-30 lg:py-15 md:p-10 p-4 lg:gap-8 md:gap-4 items-center bg-[#d3d2a5] flex flex-col' data-aos="fade-up">
            <h1 className='lg:text-3xl md:text-xl my-auto text-lg font-semibold text-center md:text-start' data-aos="fade-down">What Sets Us Apart :</h1>
            <div className='grid justify-between m-auto gap-2'>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-right">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>1</h1>
                    <h1><span className='font-bold'>Depth of Experience</span> - 2,600+ landscape, urban, and garden projects delivered globally.</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>2</h1>
                    <h1><span className='font-bold'>Tailored Expertise</span> - We focus exclusively on outdoor and spatial visualisation.</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-right">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>3</h1>
                    <h1><span className='font-bold'>Hybrid Excellence</span> - Merging cinematic visuals with planning-ready tools and immersive tech.</h1>
                </div>
                <div className='flex bg-[#f5f4ea] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#757741] md:px-4.5 md:py-2 px-2.5 py-1 rounded-full text-white font-semibold'>4</h1>
                    <h1><span className='font-bold'>Flexible Solutions</span> - From fast 2D drafting support to high-end AR/VR walkthroughs.</h1>
                </div>
            </div>
        </div>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/Service-Page-img.jpg')" }} className='relative bg-cover bg-center lg:px-30 lg:py-15 md:p-10 p-4 lg:gap-8 md:gap-4 items-center bg-[#d3d2a5]' data-aos="fade-up">
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className='relative text-white'>
            <h1 className='lg:text-3xl md:text-xl text-lg font-semibold mb-4 text-center md:text-start'  data-aos="fade-down">We Serve Landscape Professionals In :</h1>
        <h1 className='mb-3 lg:text-xl md:text-lg text-base'  data-aos="fade-down">We provide tailored visualisation services for professionals and clients across the landscape and outdoor design sector - from early concept through to council approval, stakeholder engagement, and marketing.</h1>
        <div className='grid md:grid-cols-2 gap-3'>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white'  data-aos="fade-right">
                <div className='flex relative items-center gap-3'>
                    <Palette className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                    <p className='lg:text-xl md:text-lg text-base font-semibold'>Landscape Architects</p>
                </div>
            <p className='lg:text-lg md:text-base text-sm'>High-end CGI, AR masterplans, and VR tools for public realm, commercial, and private site design presentation.</p>
            </div>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white'  data-aos="fade-left">
                <div className='flex relative items-center gap-3'>
                    <Trees className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                    <p className='lg:text-xl md:text-lg text-base font-semibold'>Garden Designers</p>
                </div>
            <p className='lg:text-lg md:text-base text-sm'>Photorealistic 3D imagery and cinematic animations to communicate planting intent, mood, and spatial design.</p>
            </div>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white'  data-aos="fade-right">
                <div className='flex relative items-center gap-3'>
                    <Brush className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                    <p className='lg:text-xl md:text-lg text-base font-semibold'>Design & Build Landscape Firms</p>
                </div>
            <p className='lg:text-lg md:text-base text-sm'>Streamlined 2D drafting and fast-turnaround visual assets to support client sign-off and smooth delivery</p>
            </div>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white'  data-aos="fade-left">
                <div className='flex relative items-center gap-3'>
                    <WavesLadder className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                    <p className='lg:text-xl md:text-lg text-base font-semibold'>Pool & Outdoor Living Contractors</p>
                </div>
            <p className='lg:text-lg md:text-base text-sm'>Photoreal exterior rendering and animation support for Pool Studio exports and outdoor entertainment areas.</p>
            </div>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-right">
                <div className='flex relative items-center gap-3'>
                    <House className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                    <p className='lg:text-xl md:text-lg text-base font-semibold'>Estate & Resort Designers</p>
                </div>
            <p className='lg:text-lg md:text-base text-sm'>Full-site immersive visualisation, site hubs, and VR walkthroughs for luxury resorts, estates, and hospitality projects.</p>
            </div>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-left">
                <div className='flex relative items-center gap-3'>
                    <HousePlus className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                    <p className='lg:text-xl md:text-lg text-base font-semibold'>Property Developers</p>
                </div>
            <p className='lg:text-lg md:text-base text-sm'>Interactive tools, animation, and CGI to support planning, sales, and investment marketing for outdoor-focused developments.</p>
            </div>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-right">
                <div className='flex relative items-center gap-3'>
                    <NotebookPen className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                    <p className='lg:text-xl md:text-lg text-base font-semibold'>Planning Consultants</p>
                </div>
            <p className='lg:text-lg md:text-base text-sm'>Approval-ready visuals, planting overlays, and site-specific drawings to support LVA, council submission, and stakeholder engagement.</p>
            </div>
            <div className='flex flex-col gap-2 bg-gradient-to-tr from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-left">
                <div className='flex relative items-center gap-3'>
                    <MapPinHouse className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                    <p className='lg:text-xl md:text-lg text-base font-semibold'>Private Estate Owners</p>
                </div>
            <p className='lg:text-lg md:text-base text-sm'>Discreet visualisation services for large private gardens, heritage sites, and transformation projects with sensitive briefs.</p>
            </div>
        </div>
        </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4'>
        </div>
        <div className='lg:px-30 lg:py-15 md:p-10 p-4'>
            <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold mb-2 text-center lg:pb-15 md:pb-10 pb-4' data-aos="fade-up">Meet The Studio</h1>
            <div className='grid md:grid-cols-2 gap-5 mb-5'>
                <div className='flex flex-col gap-2' data-aos="fade-right">
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/I7A6601.jpg" alt="" className='object-cover object-[center_40%] rounded-[15px] lg:h-[60vh] md:h-[40vh] h-[30vh]' />
                    <div className='flex flex-col'>
                        <h1 className='lg:text-3xl md:text-xl text-base font-bold'>Christy Russel</h1>
                        <h1 className='lg:text-xl md:text-base text-xs'>Co-Founder</h1>
                    </div>
                    <h1 className='lg:text-xl md:text-base text-xs'>has led over 300 landscape design projects globally - from luxury estates and resort gardens to civic parks and public realm upgrades. With a background in Geography and Landscape Architecture, Christy brings deep expertise in spatial storytelling, planting intent, and landscape-led presentation.</h1>
                </div>
                <div className='flex flex-col gap-2' data-aos="fade-left">
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/I7A7942.jpg" alt="" className='object-cover object-[center_30%] rounded-[15px] lg:h-[60vh] md:h-[40vh] h-[30vh]' />
                    <div className='flex flex-col'>
                        <h1 className='lg:text-3xl md:text-xl text-base font-bold'>Eshan Soumaroo</h1>
                        <h1 className='lg:text-xl md:text-base text-xs'>Co-Founder and Technical Director</h1>
                    </div>
                    <h1 className='lg:text-xl md:text-base text-xs'>has a foundation in Product Design Engineering and oversees the studio's immersive and technical output - from cinematic CGI to advanced AR/VR development and interactive platform builds.</h1>
                </div>
            </div>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/compressed__I7A8187-final-copy.jpg" alt="" className='object-cover object-center rounded-[15px] md:w-[80vw] lg:h-[60vh] md:h-[40vh] h-[30vh] mx-auto' data-aos="fade-up"/>
        </div>
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/1577CC_PWGD_POOL_REV-01-Photo.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
            <div className="absolute inset-0 bg-black/70 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 lg:px-50 md:px-10 px-4'>
            <h1 className='mb-4'>Together, they lead a team of 45+ creatives across disciplines including 3D rendering, 2D drafting, Unreal Engine development, and interactive web deployment - all dedicated to bringing unbuilt landscapes to life.</h1>
            <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-bold lg:!p-7 md:!p-5 cursor-pointer">
                Start a Conversation
            <MoveRight strokeWidth={3}/>
            </Button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutPage