import React from 'react'
import Navbar from './layouts/navbar'
import { Button } from '@/components/ui/button'
import { ChevronDown, MoveRight } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

function page() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <Navbar/>
      <div style={{ backgroundImage: "url('hero.png')" }} className='realtive bg-cover bg-center h-[100vh]'>
        <div className="absolute inset-0 bg-black/60 z-0" />  {/* overlay hitam transparan */}
        <div className='relative text-center text-white text-5xl font-semibold top-1/2 -translate-y-1/2'>
        <h1 className='mb-5'>
        Immersive visuals & approval-ready plans <br/> for outdoor spaces
        </h1>
        <p className='text-xl text-gray-300 mb-5 font-normal'>We help landscape architects, garden designers, and design-build firms bring their outdoor visions to life <br/> through cinematic garden visuals, photorealistic CGI, interactive tools, and lightning-fast 2D drafting support.</p>
        <Button className="text-2xl rounded-full relative items-center bg-[#757741] font-semibold py-7 !px-7 cursor-pointer hover:bg-[#d3d2a5] hover:text-black">
          Explore Services 
          <MoveRight strokeWidth={3}/>
          </Button>
        </div>
      </div>
      <div className="overflow-hidden border-b-1 py-8">
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
      <div className='py-8 px-30'>      
      <div className='flex justify-between items-center'>
        <p className='text-4xl font-semibold'>What We Offer</p>
        <h1 className='w-[400px] text-xl'>Photorealistic garden CGI. Flythrough animations. Interactive site tours. Planning-ready 2D layouts.
If it supports your outdoor design — we can visualise it</h1>
      </div>
      <div className='pt-8 grid grid-cols-3 gap-2'>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-4 transition-all duration-300 ease-in-out'>
            <img src="garden.jpg" alt="" className='h-[25vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold text-2xl'>3D Garden Visualisation</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="service.png" alt="" className='h-[25vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold text-2xl'>Landscape Animation</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="aerial.png" alt="" className='h-[25vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold text-2xl'>Interactive Project Website</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="aerial.png" alt="" className='h-[25vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold text-2xl'>VR & AR for Landscape Projects</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="aerial.png" alt="" className='h-[25vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold text-2xl'>Site Hub</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="aerial.png" alt="" className='h-[25vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold text-2xl'>2D Landscape Drafting & Planning</p>
            <div className=''>
            </div>
          </div>
        </a>
      </div>
      </div>
      <div>

      </div>
      <Accordion type="single" collapsible className='px-30 py-8 border-t-1 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-3xl font-semibold'>What We Do</AccordionTrigger>
        <AccordionContent className='text-xl flex flex-col gap-3'>
          We work with landscape architects, garden designers, and design-build teams to visualise outdoor spaces at every stage — 
          from planting concepts to high-end garden layouts. Whether you're developing a private estate, pool area, or public park,
           we provide cinematic garden visuals, 3D renderings, and immersive walkthroughs that help your clients say yes faster.
            Our team can produce everything from planting plan overlays to council submission visuals — all tailored to your project's
             goals and presentation style.
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] px-3.5 py-1 font-semibold rounded-full text-xl text-white'>1</p>
            <p className='text-black text-xl'>Photorealistic CGI for planting, lighting, and circulation</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] px-3.5 py-1 font-semibold rounded-full text-xl text-white'>2</p>
            <p className='text-black text-xl'>Council-ready plans, planting layouts, and 2D drawings</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] px-3.5 py-1 font-semibold rounded-full text-xl text-white'>3</p>
            <p className='text-black text-xl'>VR and AR experiences to walk clients through your design</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible className='px-30 py-8 border-t-1 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-3xl font-semibold'>What Makes Us Different</AccordionTrigger>
        <AccordionContent className='text-xl'>
          We're not just rendering what you've drawn — we're helping you sell the design, win approvals, and communicate with contractors. Our team understands the technical, emotional, and practical needs of landscape professionals — because we've worked across every step of the process.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible className='px-30 py-8 border-t-1 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-3xl font-semibold'>Who We Work With</AccordionTrigger>
        <AccordionContent className='text-xl grid grid-cols-2 gap-3'>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] px-3.5 py-1 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black text-xl'>Landscape Architects</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] px-3.5 py-1 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black text-xl'>Garden Designers</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] px-3.5 py-1 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black text-xl'>Pool & Outdoor Living Contractors</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] px-3.5 py-1 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black text-xl'>Design & Build Firms</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] px-3.5 py-1 font-semibold rounded-full text-xl text-[#757741]'>1</p>
            <p className='text-black text-xl'>Estate Owners & Developers</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <h1 className='text-center pt-8 text-4xl font-semibold'>Testimonial</h1>
    <AnimatedTestimonials testimonials={testimonials}/>
    </div>
  )
}

export default page