import React from 'react'
import Navbar from './layouts/navbar'
import { Button } from '@/components/ui/button'
import { ChevronDown, MoveRight } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import Footer from './layouts/footer'

function page() {
  const testimonials = [
    {
      quote:
        "If I could give 6 stars, then I would! Christy, Daniel and everyone involved at CC are fantastic. The service they provide is quick, fast efficient and above all else, the concepts they convey are just stunning....period! I will be collaborating with them in the future, that's for sure.",
      name: "Adan Vetere, Adan Vetere Landscape & Garden Design",
      designation: "Garden Designer, UK",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The Concepts Conveyed service was very efficent. They quickly visiualised the way we needed our designs and it was a smooth process. We got back excellent products and would not only reccomend, but use their services again.",
      name: "Insapcial",
      designation: "Principal Landscape Architect, Australia",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Our builder said it was the best presentation pack he's ever received. Everything was clear — from materials to layout flow.",
      name: "Emily Watson",
      designation: "Design-Build Firm, California",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "We didn't know where to begin, but they took our moodboard and turned it into something immersive and believable. We were sold instantly.",
      name: "James Kim",
      designation: "Private Client, Bali",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I'm so used to sending clients flat plans — now I send 3D views with planting textures and seasonal changes. It's changed how I present entirely.",
      name: "Lisa Thompson",
      designation: "Garden Designer, London",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <Navbar/>
      <div style={{ backgroundImage: "url('hero.png')" }} className='relative bg-cover bg-center h-[100vh]'>
        <div className="absolute inset-0 bg-black/60 z-0" />  {/* overlay hitam transparan */}
        <div className='relative text-center text-white lg:text-5xl md:text-3xl font-semibold top-1/2 -translate-y-1/2'>
        <h1 className='mb-5'>
        Immersive visuals & approval-ready plans <br/> for outdoor spaces
        </h1>
        <p className='lg:text-xl md:text-base text-gray-300 mb-5 font-normal'>We help landscape architects, garden designers, and design-build firms bring their outdoor visions to life <br/> through cinematic garden visuals, photorealistic CGI, interactive tools, and lightning-fast 2D drafting support.</p>
        <Button className="lg:text-2xl md:text-xl rounded-full relative items-center bg-[#757741] font-semibold py-7 !px-7 cursor-pointer hover:bg-[#d3d2a5] hover:text-black">
          Explore Services 
          <MoveRight strokeWidth={3}/>
          </Button>
        </div>
      </div>
      <div className="overflow-hidden border-b-1 lg:py-8 md:py-6">
        <div className="flex gap-30 animate-marquee whitespace-nowrap">
          <img src="logo.png" alt="" className='h-20' />
          <img src="logo.png" alt="" className='h-20' />
          <img src="logo.png" alt="" className='h-20' />
          <img src="logo.png" alt="" className='h-20' />
          <img src="logo.png" alt="" className='h-20' />
          <img src="logo.png" alt="" className='h-20' />
          <img src="logo.png" alt="" className='h-20' />
          <img src="logo.png" alt="" className='h-20' />
          <img src="logo.png" alt="" className='h-20' />
        </div>
      </div>
      <div className='lg:py-8 lg:px-30 md:py-6 md:px-20'>      
      <div className='flex justify-between items-center'>
        <div>
          <p className='bg-[#757741] w-fit py-2 px-4 rounded-[15px] text-white font-semibold mb-2'>Our Services</p>
        <p className='lg:text-5xl md:text-3xl font-semibold'>Let's Explore <br /> Our Services</p>
        </div>
        <h1 className='w-[400px] lg:text-xl text-base'>Photorealistic garden CGI. Flythrough animations. Interactive site tours. Planning-ready 2D layouts.
If it supports your outdoor design — we can visualise it</h1>
      </div>
      <div className='pt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-4 transition-all duration-300 ease-in-out'>
            <img src="garden.jpg" alt="" className='lg:h-[25vh] md:h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>3D Garden Visualisation</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="service.png" alt="" className='lg:h-[25vh] md:h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>Landscape Animation</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="aerial.png" alt="" className='lg:h-[25vh] md:h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>Interactive Project Website</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="aerial.png" alt="" className='lg:h-[25vh] md:h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>VR & AR for Landscape Projects</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="garden.jpg" alt="" className='lg:h-[25vh] md:h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>Site Hub</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="service.png" alt="" className='lg:h-[25vh] md:h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>2D Landscape Drafting & Planning</p>
            <div className=''>
            </div>
          </div>
        </a>
      </div>
      </div>
      <div>

      </div>
      <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-20 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl font-semibold'>What We Offer</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base'>
          Photorealistic garden CGI. Flythrough animations. Interactive site tours. Planning-ready 2D layouts. If it supports your outdoor design — we can visualise it
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-20 border-t-1 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl font-semibold'>What We Do</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base flex flex-col gap-3'>
          We work with landscape architects, garden designers, and design-build teams to visualise outdoor spaces at every stage — 
          from planting concepts to high-end garden layouts. Whether you're developing a private estate, pool area, or public park,
           we provide cinematic garden visuals, 3D renderings, and immersive walkthroughs that help your clients say yes faster.
            Our team can produce everything from planting plan overlays to council submission visuals — all tailored to your project's
             goals and presentation style.
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 font-semibold rounded-full lg:text-xl md:text-base text-white'>1</p>
            <p className='text-black lg:text-xl md:text-base'>Photorealistic CGI for planting, lighting, and circulation</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 font-semibold rounded-full lg:text-xl md:text-base text-white'>2</p>
            <p className='text-black lg:text-xl md:text-base'>Council-ready plans, planting layouts, and 2D drawings</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 font-semibold rounded-full lg:text-xl md:text-base text-white'>3</p>
            <p className='text-black lg:text-xl md:text-base'>VR and AR experiences to walk clients through your design</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-20 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl font-semibold'>What Makes Us Different</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base'>
          We're not just rendering what you've drawn — we're helping you sell the design, win approvals, and communicate with contractors. Our team understands the technical, emotional, and practical needs of landscape professionals — because we've worked across every step of the process.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-20 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl font-semibold'>Who We Work With</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base grid grid-cols-2 gap-3'>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black lg:text-xl md:text-base'>Landscape Architects</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black lg:text-xl md:text-base'>Garden Designers</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black lg:text-xl md:text-base'>Pool & Outdoor Living Contractors</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black lg:text-xl md:text-base'>Design & Build Firms</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black lg:text-xl md:text-base'>Estate Owners & Developers</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <AnimatedTestimonials testimonials={testimonials}/>
    <div style={{ backgroundImage: "url('room.jpg')" }} className='relative h-[80vh] bg-center bg-cover'>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-2/3 '>
        <h1>Not sure where to start?</h1>
        <h1 className='mb-2'>Send us a sketch — we'll turn it into something ready to <br /> build, submit, or sell.</h1>
        <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-[#757741] font-semibold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-black">
          Start a Project 
        <MoveRight strokeWidth={3}/>
        </Button>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default page