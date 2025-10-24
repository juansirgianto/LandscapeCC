'use client'

import React from 'react'
import Navbar from './layouts/navbar'
import { Button } from '@/components/ui/button'
import { Brush, House, HousePlus, MapPinHouse, MoveRight, NotebookPen, Palette, Trees, WavesLadder } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import Footer from './layouts/footer'
import Runninglogo from './layouts/runninglogo'
import { motion } from 'framer-motion'

function HomePage() {
  const testimonials = [
    {
      quote:
        "If I could give 6 stars, then I would! Christy, Daniel and everyone involved at CC are fantastic. The service they provide is quick, fast efficient and above all else, the concepts they convey are just stunning....period! I will be collaborating with them in the future, that's for sure.",
      name: "Adam Vetere",
      designation: "Adam Vetere Landscape & Garden Design",
      videoSrc: "https://videos.files.wordpress.com/Wlw3VlrE/20251023_instagram-stories-reels-1.mp4",
      poster: "https://designedbypelago.com/wp-content/uploads/2025/10/compressed_1125CC_REV3_1.jpg",
      orientation: "landscape",
      mediaType: "video" as const,
    },
    {
      quote:
        "Christy and his team were brilliant in turning our design into a 3D visual. It proved invaluable to our clients who are in the middle of a vast house and garden renovation project, as it enabled them to visualise the finished garden on a muddy construction site. We will definitely be using concepts conveyed for future projects.",
      name: "Nic Howard",
      designation: "We Love Plants",
      src: "https://designedbypelago.com/wp-content/uploads/2025/09/wlp.png",
      orientation: "portrait",
      mediaType: "image" as const,
    },
    {
      quote:
        "Superb service - they have a super fast turnaround and great communication throughout. Delighted with the finished renders - thank you!",
      name: "Pollyanna Wilkinson",
      designation: "Studio Pollyanna",
      src: "https://designedbypelago.com/wp-content/uploads/2025/09/poly.png",
      orientation: "portrait",
      mediaType: "image" as const,
    },
  ] as const;

  return (
    <div className='overflow-hidden'>
      <Navbar/>
      {/* Animasi Fade In Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
      <div className='relative bg-cover bg-center h-[100vh]'>
        <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="https://videos.files.wordpress.com/wp05UZIW/video-for-website-new-rev-5-1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <div className="absolute inset-0 bg-black/70 z-0" />  {/* overlay hitam transparan */}
        <div className='relative text-center text-white lg:text-5xl md:text-3xl text-xl font-semibold top-1/2 -translate-y-1/2 md:px-0 px-2'>
          <h1 className='mb-5'>
          Immersive visuals & approval-ready plans <br/> for outdoor spaces
          </h1>
          <p className='lg:text-xl md:text-base text-sm text-gray-300 mb-5 font-normal'>We help landscape architects, garden designers, and design-build firms bring their outdoor visions to life <br/> through cinematic garden visuals, photorealistic CGI, interactive tools, and lightning-fast 2D drafting support.</p>
          <a href="#explore">
          <Button className="lg:text-2xl md:text-xl text-base rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-semibold lg:!p-7 md:!p-5 cursor-pointer">
            Explore Services 
          <MoveRight strokeWidth={3}/>
          </Button>
          </a>
        </div>
      </div>
      </motion.div>
      <Runninglogo/>
      <div className='flex md:flex-row flex-col lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 justify-between items-center md:gap-8 gap-5 bg-[#757741] text-white' data-aos="fade-up">
        <h1 className='md:w-[50%] md:text-start text-center lg:text-xl md:text-base text-sm'>Who We Are We're a visualisation studio focused entirely on the landscape and outdoor design sector.
 From private gardens to large-scale public realm, we bring unbuilt outdoor spaces to life through photorealistic CGI, immersive digital tools, and fast-turnaround drafting support.</h1>
        <h1 className='md:w-[50%] md:text-start text-center lg:text-xl md:text-base text-sm'>With over 2,600 projects delivered globally, we help landscape architects, garden designers, developers, and design-build teams communicate design clearly, win approvals faster, and stand out in a crowded market.</h1>
      </div>
      <div id='explore'  className='lg:px-30 md:px-10 px-4 lg:pt-15 md:pt-10 pt-4'>      
      <div className='flex flex-col md:flex-row justify-between items-center gap-2' data-aos="fade-up">
        <div className='md:w-full '>
          <p className='lg:text-5xl md:text-3xl text-xl font-semibold'>What We Offer</p>
        </div>
        <h1 className='w-full text-center md:text-start lg:text-xl md:text-base text-sm'>Photorealistic garden CGI. Flythrough animations. Interactive site tours. Planning-ready 2D layouts.
If it supports your outdoor design - we can visualise it</h1>
      </div>
      <div className='lg:pt-15 md:pt-10 pt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
        <a href="/LandscapeCC/services/3d" data-aos="fade-right">
          <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-4 transition-all duration-300 ease-in-out'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>3D Visualisation</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="/LandscapeCC/services/modelling" data-aos="fade-up">
          <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>3D Design & Terrain Modelling</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="/LandscapeCC/services/vr" data-aos="fade-left">
          <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/aerial.png" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>VR & AR Services</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="/LandscapeCC/services/interactive" data-aos="fade-right">
          <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/master1.jpeg" alt="" className='lg:h-[25vh] h-[15vh] object-cover object-top rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>Interactive Masterplans</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="/LandscapeCC/services/sitehub" data-aos="fade-up">
          <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/garden.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>Site Hub</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="/LandscapeCC/services/2d" data-aos="fade-left">
          <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/10/2D-drafting-web-thumbnail.png" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>2D Drafting & Planning</p>
            <div className=''>
            </div>
          </div>
        </a>
      </div>
      </div>
      <div>
      </div>
    <div className='lg:px-30 md:px-10 px-4'>
    <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>What Makes Us Different</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base text-xs'>
          <div className='flex flex-col gap-3'>
          <p>We don't just render what you've drawn - we help you communicate the vision.</p>
          <p>Whether you're presenting to private clients, planning authorities, or contractors on-site, our visuals are crafted to <span className='font-bold'>win approvals, sell ideas, and guide successful builds.</span></p>
          <p>With deep experience in <span className='font-bold'>landscape-specific workflows</span> - from 2D plans to photoreal CGI and immersive tools - we understand the <span className='font-bold'>technical, emotional, and narrative needs</span> of outdoor projects.</p>
          <p>And because we build with precision, each 3D model becomes a launchpad for multiple outputs: <span className='font-bold'>stills, animations, planning packs, or interactive tools</span> - all from a single, unified source.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Who We Work With</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base text-xs'>
            <h1 className='mb-3 lg:text-xl md:text-lg text-base'>We provide tailored visualisation services for professionals and clients across the landscape and outdoor design sector - from early concept through to council approval, stakeholder engagement, and marketing.</h1>
            <div className='grid md:grid-cols-2 gap-3'>
                <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-right">
                    <div className='flex relative items-center gap-3'>
                        <Palette className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>Landscape Architects</p>
                    </div>
                <p className='lg:text-lg md:text-base text-sm'>High-end CGI, AR masterplans, and VR tools for public realm, commercial, and private site design presentation.</p>
                </div>
                <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-left">
                    <div className='flex relative items-center gap-3'>
                        <Trees className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>Garden Designers</p>
                    </div>
                <p className='lg:text-lg md:text-base text-sm'>Photorealistic 3D imagery and cinematic animations to communicate planting intent, mood, and spatial design.</p>
                </div>
                <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-right">
                    <div className='flex relative items-center gap-3'>
                        <Brush className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>Design & Build Landscape Firms</p>
                    </div>
                <p className='lg:text-lg md:text-base text-sm'>Streamlined 2D drafting and fast-turnaround visual assets to support client sign-off and smooth delivery</p>
                </div>
                <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-left">
                    <div className='flex relative items-center gap-3'>
                        <WavesLadder className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>Pool & Outdoor Living Contractors</p>
                    </div>
                <p className='lg:text-lg md:text-base text-sm'>Photoreal exterior rendering and animation support for Pool Studio exports and outdoor entertainment areas.</p>
                </div>
                <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-right">
                    <div className='flex relative items-center gap-3'>
                        <House className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>Estate & Resort Designers</p>
                    </div>
                <p className='lg:text-lg md:text-base text-sm'>Full-site immersive visualisation, site hubs, and VR walkthroughs for luxury resorts, estates, and hospitality projects.</p>
                </div>
                <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-left">
                    <div className='flex relative items-center gap-3'>
                        <HousePlus className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>Property Developers</p>
                    </div>
                <p className='lg:text-lg md:text-base text-sm'>Interactive tools, animation, and CGI to support planning, sales, and investment marketing for outdoor-focused developments.</p>
                </div>
                <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-right">
                    <div className='flex relative items-center gap-3'>
                        <NotebookPen className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>Planning Consultants</p>
                    </div>
                <p className='lg:text-lg md:text-base text-sm'>Approval-ready visuals, planting overlays, and site-specific drawings to support LVA, council submission, and stakeholder engagement.</p>
                </div>
                <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-left">
                    <div className='flex relative items-center gap-3'>
                        <MapPinHouse className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>Private Estate Owners</p>
                    </div>
                <p className='lg:text-lg md:text-base text-sm'>Discreet visualisation services for large private gardens, heritage sites, and transformation projects with sensitive briefs.</p>
                </div>
            </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    <AnimatedTestimonials testimonials={testimonials}/>
    <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/1577CC_PWGD_POOL_REV-01-Photo.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 '>
        <h1 className='font-bold'>Not sure where to start?</h1>
        <h1 className='mb-4'>Send us a sketch - we'll turn it into something ready to <br /> build, submit, or sell.</h1>
        <a href="">
        <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-bold lg:!p-7 md:!p-5 cursor-pointer">
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

export default HomePage