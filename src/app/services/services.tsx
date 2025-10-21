'use client'

import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'
import Navbar from '../layouts/navbar'
import Runninglogo from '../layouts/runninglogo'
import Footer from '../layouts/footer'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { motion } from 'framer-motion'

function ServicesPage() {
  const testimonials = [
    {
      quote:
        "If I could give 6 stars, then I would! Christy, Daniel and everyone involved at CC are fantastic. The service they provide is quick, fast efficient and above all else, the concepts they convey are just stunning....period! I will be collaborating with them in the future, that's for sure.",
      name: "Adam Vetere",
      designation: "Adam Vetere Landscape & Garden Design",
      src: "https://designedbypelago.com/wp-content/uploads/2025/09/av.png",
    },
    {
      quote:
        "Christy and his team were brilliant in turning our design into a 3D visual. It proved invaluable to our clients who are in the middle of a vast house and garden renovation project, as it enabled them to visualise the finished garden on a muddy construction site. We will definitely be using concepts conveyed for future projects.",
      name: "Nic Howard",
      designation: "We Love Plants",
      src: "https://designedbypelago.com/wp-content/uploads/2025/09/wlp.png",
    },
    {
      quote:
        "Superb service - they have a super fast turnaround and great communication throughout. Delighted with the finished renders - thank you!",
      name: "Pollyanna Wilkinson",
      designation: "Studio Pollyanna",
      src: "https://designedbypelago.com/wp-content/uploads/2025/09/poly.png",
    },
  ];

  return (
      <div>
        <Navbar/>
        {/* Animasi Fade In Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/Service-Page-img.jpg')" }} className='relative bg-cover bg-center h-[100vh] lg:px-30 md:px-10 px-4'>
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className='relative text-center text-white lg:text-5xl md:text-3xl text-xl font-semibold top-1/2 -translate-y-1/2 md:px-0 px-2'>
            <h1 className='mb-5'>
            Visualisation tools built for the landscape design process, from sketch to sign-off.
            </h1>
            <p className='lg:text-xl md:text-base text-sm text-gray-300 mb-5 font-normal'>Whether you're presenting to private clients, securing stakeholder approval, or preparing for construction, our services help you communicate clearly and confidently. From photorealistic 3D renders and 2D planning packs to VR walkthroughs and interactive masterplans, we support landscape architects, garden designers, urban realm consultants, and design-build firms across every project type.</p>
            <a href="#explore">
            <Button className="lg:text-2xl md:text-xl text-base rounded-full relative items-center bg-[#757741] font-bold md:!p-7 !p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
              Explore Services 
            <MoveRight strokeWidth={3}/>
            </Button>
            </a>
          </div>
        </div>
          </motion.div>
          <h1 data-aos="fade-up" className='text-center lg:text-4xl md:text-2xl text-lg lg:py-8 md:py-6 py-4 font-semibold'>Explore Our Core Services :</h1>
        <div className='lg:px-30 md:px-10 px-4 flex flex-col gap-3 lg:pb-8 md:pb-6 pb-4'>
      <a href="/LandscapeCC/3d" data-aos="fade-up">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold lg:text-3xl md:text-xl text-base text-white'>3D Visualisation</p>
            <div>
            <p className='text-white lg:text-xl md:text-sm text-xs mb-2'>Photorealistic imagery for gardens, estates, public realm and resort landscapes. <br />
            High-end stills tailored for planning, marketing, or client sign-off.</p>
            <Button className='bg-[#d3d2a5] text-[#757741] hover:bg-white rounded-full lg:text-base md:text-sm text-xs font-bold cursor-pointer'>View 3D Visualisation
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="https://designedbypelago.com/wp-content/uploads/2025/09/garden.jpg" alt="" className='rounded-[15px] w-[40%] md:h-[30vh] h-[25vh] object-cover' />
        </div>
      </a>
      <a href="/LandscapeCC/modelling" data-aos="fade-up">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className='rounded-[15px] w-[40%] md:h-[30vh] h-[25vh] object-cover' />
          <div className='flex flex-col justify-between p-5 w-[60%] text-end'>
            <p className='font-semibold lg:text-3xl md:text-xl text-base text-white'>3D Design & Terrain Modelling</p>
            <div>
            <p className='text-white lg:text-xl md:text-sm text-xs mb-2 text-end'>Precision 3D base models and site context modelling. <br />
            Ideal for large, sloped, or complex sites where terrain and levels matter.</p>
            <Button className='bg-[#d3d2a5] text-[#757741] hover:bg-white  rounded-full lg:text-base md:text-sm text-xs font-bold cursor-pointer'>View 3D Terrain Modelling
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
        </div>
      </a>
      <a href="/LandscapeCC/vr" data-aos="fade-up">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold lg:text-3xl md:text-xl text-base text-white'>VR & AR Services</p>
            <div>
            <p className='text-white lg:text-xl md:text-sm text-xs mb-2'>From 360° panoramas to full Unreal Engine walkable gardens. <br />
            Immersive tools for stakeholder walkthroughs, design reviews, and presentations.</p>
            <Button className='bg-[#d3d2a5] text-[#757741] hover:bg-white  rounded-full lg:text-base md:text-sm text-xs font-bold cursor-pointer'>Explore VR & AR Services
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="https://designedbypelago.com/wp-content/uploads/2025/09/garden.jpg" alt="" className='rounded-[15px] w-[40%] md:h-[30vh] h-[25vh] object-cover' />
        </div>
      </a>
      <a href="/LandscapeCC/interactive" data-aos="fade-up">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <img src="https://designedbypelago.com/wp-content/uploads/2025/09/aerial.png" alt="" className='rounded-[15px] w-[40%] md:h-[30vh] h-[25vh] object-cover' />
          <div className='flex flex-col justify-between p-5 w-[60%] text-end'>
            <p className='font-semibold lg:text-3xl md:text-xl text-base text-white'>Interactive Masterplans</p>
            <div>
            <p className='text-white lg:text-xl md:text-sm text-xs mb-2'>Mobile-ready AR overlays for gardens, campuses, and public spaces. <br />
            Let your clients explore plans on-site or in meetings — no app required.</p>
            <Button className='bg-[#d3d2a5] text-[#757741] hover:bg-white  rounded-full lg:text-base md:text-sm text-xs font-bold cursor-pointer'>See Interactive Masterplans
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
        </div>
      </a>
      <a href="" data-aos="fade-up">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col justify-between p-5 w-[60%]'>
            <p className='font-semibold lg:text-3xl md:text-xl text-base text-white'>Site Hub</p>
            <div>
            <div className='text-white lg:text-xl md:text-sm text-xs mb-2'>
                <p className='font-semibold'>Your entire landscape design, centralised in one interactive online platform.</p>
                <p>Perfect for councils, public realm clients, or phased projects.</p>
            </div>
            <Button className='bg-[#d3d2a5] text-[#757741] hover:bg-white  rounded-full lg:text-base md:text-sm text-xs font-bold cursor-pointer'>View Site Hub
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
          <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className='rounded-[15px] w-[40%] md:h-[30vh] h-[25vh] object-cover' />
        </div>
      </a>
      <a href="" data-aos="fade-up">
        <div className='bg-[#757741] w-full rounded-[15px] flex p-2 hover:ml-2 transition-all duration-300 ease-in-out'>
          <img src="https://designedbypelago.com/wp-content/uploads/2025/09/garden.jpg" alt="" className='rounded-[15px] w-[40%] md:h-[30vh] h-[25vh] object-cover' />
          <div className='flex flex-col justify-between p-5 w-[60%] text-end'>
            <p className='font-semibold lg:text-3xl md:text-xl text-base text-white'>2D Drafting & Planning Packs</p>
            <div>
            <div className='text-white lg:text-xl md:text-sm text-xs mb-2'>
                <p className='font-semibold'>Fast, clear layout plans, planting plans, lighting overlays, and more.</p>
                <p>Tailored for garden designers, landscape architects, and D&B firms.</p>
            </div>
            <Button className='bg-[#d3d2a5] text-[#757741] hover:bg-white  rounded-full lg:text-base md:text-sm text-xs font-bold cursor-pointer'>See 2D Drafting Services
              <MoveRight strokeWidth={3}/>
            </Button>
            </div>
          </div>
        </div>
      </a>
      </div>
      <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/1577CC_PWGD_POOL_REV-01-Photo.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 '>
          <h1 className='font-bold'>Not sure what service suits your project?</h1>
          <h1 className='mb-4 font-medium'>We'll guide you to the best solution <br /> based on your stage, audience, and scope.</h1>
          <a href="">
          <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-[#757741] font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
            Let's Talk
          <MoveRight strokeWidth={3}/>
          </Button>
          </a>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default ServicesPage