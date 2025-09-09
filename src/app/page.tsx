import React from 'react'
import Navbar from './layouts/navbar'
import { Button } from '@/components/ui/button'
import { ChevronDown, MoveRight } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import Footer from './layouts/footer'
import Runninglogo from './layouts/runninglogo'

function page() {
  const testimonials = [
    {
      quote:
        "If I could give 6 stars, then I would! Christy, Daniel and everyone involved at CC are fantastic. The service they provide is quick, fast efficient and above all else, the concepts they convey are just stunning....period! I will be collaborating with them in the future, that's for sure.",
      name: "Adam Vetere",
      designation: "Adam Vetere Landscape & Garden Design",
      src: "av.png",
    },
    {
      quote:
        "Christy and his team were brilliant in turning our design into a 3D visual. It proved invaluable to our clients who are in the middle of a vast house and garden renovation project, as it enabled them to visualise the finished garden on a muddy construction site. We will definitely be using concepts conveyed for future projects.",
      name: "Nic Howard",
      designation: "We Love Plants",
      src: "wlp.png",
    },
    {
      quote:
        "Superb service - they have a super fast turnaround and great communication throughout. Delighted with the finished renders - thank you!",
      name: "Pollyanna Wilkinson",
      designation: "Studio Pollyanna",
      src: "poly.png",
    },
  ];

  return (
    <div>
      <Navbar/>
      <div style={{ backgroundImage: "url('hero.png')" }} className='relative bg-cover bg-center h-[100vh]'>
        <div className="absolute inset-0 bg-black/60 z-0" />  {/* overlay hitam transparan */}
        <div className='relative text-center text-white lg:text-5xl md:text-3xl text-xl font-semibold top-1/2 -translate-y-1/2 md:px-0 px-2'>
          <h1 className='mb-5'>
          Immersive visuals & approval-ready plans <br/> for outdoor spaces
          </h1>
          <p className='lg:text-xl md:text-base text-sm text-gray-300 mb-5 font-normal'>We help landscape architects, garden designers, and design-build firms bring their outdoor visions to life <br/> through cinematic garden visuals, photorealistic CGI, interactive tools, and lightning-fast 2D drafting support.</p>
          <Button className="lg:text-2xl md:text-xl text-base rounded-full relative items-center bg-[#757741] font-bold md:!p-7 !p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
            Explore Services 
          <MoveRight strokeWidth={3}/>
          </Button>
        </div>
      </div>
      <Runninglogo/>
      <div className='lg:py-8 lg:px-30 md:py-6 md:px-20 p-4'>      
      <div className='flex justify-between items-center'>
        <div className='md:w-full w-[50%]'>
          <p className='bg-[#757741] w-fit md:py-2 md:px-4 px-2 py-1 rounded-[15px] text-white font-semibold mb-2'>Our Services</p>
          <p className='lg:text-5xl md:text-3xl text-xl font-semibold'>Let's Explore <br /> Our Services</p>
        </div>
        <h1 className='w-full lg:text-xl md:text-base text-sm'>Photorealistic garden CGI. Flythrough animations. Interactive site tours. Planning-ready 2D layouts.
If it supports your outdoor design — we can visualise it</h1>
      </div>
      <div className='lg:pt-8 md:pt-6 pt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-4 transition-all duration-300 ease-in-out'>
            <img src="garden.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>3D Garden Visualisation</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="service.png" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>Landscape Animation</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="master1.jpeg" alt="" className='lg:h-[25vh] h-[15vh] object-cover object-top rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>Interactive Project Website</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="aerial.png" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>VR & AR for Landscape Projects</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="garden.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>Site Hub</p>
            <div className=''>
            </div>
          </div>
        </a>
        <a href="">
          <div className='bg-[#757741] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-2 transition-all duration-300 ease-in-out'>
            <img src="service.png" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
            <p className='text-center text-white font-semibold lg:text-2xl md:text-lg'>2D Landscape Drafting & Planning</p>
            <div className=''>
            </div>
          </div>
        </a>
      </div>
      </div>
      <div>

      </div>
      <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-20 p-4 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold'>What We Offer</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base'>
          Photorealistic garden CGI. Flythrough animations. Interactive site tours. Planning-ready 2D layouts. If it supports your outdoor design — we can visualise it
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-20 p-4 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold'>What We Do</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base flex flex-col gap-3'>
          We work with landscape architects, garden designers, and design-build teams to visualise outdoor spaces at every stage — 
          from planting concepts to high-end garden layouts. Whether you're developing a private estate, pool area, or public park,
           we provide cinematic garden visuals, 3D renderings, and immersive walkthroughs that help your clients say yes faster.
            Our team can produce everything from planting plan overlays to council submission visuals — all tailored to your project's
             goals and presentation style.
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1 font-semibold rounded-full text-white'>1</p>
            <p className='text-black'>Photorealistic CGI for planting, lighting, and circulation</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1 font-semibold rounded-full text-white'>2</p>
            <p className='text-black'>Council-ready plans, planting layouts, and 2D drawings</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1 font-semibold rounded-full text-white'>3</p>
            <p className='text-black'>VR and AR experiences to walk clients through your design</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-20 p-4 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold'>What Makes Us Different</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base'>
          We're not just rendering what you've drawn — we're helping you sell the design, win approvals, and communicate with contractors. Our team understands the technical, emotional, and practical needs of landscape professionals — because we've worked across every step of the process.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible className='lg:py-8 lg:px-30 md:py-6 md:px-20 p-4 border-b-1'>
      <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold'>Who We Work With</AccordionTrigger>
        <AccordionContent className='lg:text-xl md:text-base grid grid-cols-2 gap-3'>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1 font-semibold rounded-full text-[#757741]'>1</p>
            <p className='text-black'>Landscape Architects</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1 font-semibold rounded-full text-[#757741]'>1</p>
            <p className='text-black'>Garden Designers</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1 font-semibold rounded-full text-[#757741]'>1</p>
            <p className='text-black'>Pool & Outdoor Living Contractors</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1 font-semibold rounded-full text-[#757741]'>1</p>
            <p className='text-black'>Design & Build Firms</p>
          </div>
          <div className='flex relative items-center gap-3'>
            <p className='bg-[#757741] lg:px-3.5 lg:py-1 md:px-3 md:py-0.5 px-3 py-1 font-semibold rounded-full text-[#757741]'>1</p>
            <p className='text-black'>Estate Owners & Developers</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <AnimatedTestimonials testimonials={testimonials}/>
    <div style={{ backgroundImage: "url('room.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover'>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold md:top-2/3 top-1/2 -translate-y-1/2 '>
        <h1>Not sure where to start?</h1>
        <h1 className='mb-4'>Send us a sketch — we'll turn it into something ready to <br /> build, submit, or sell.</h1>
        <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-[#757741] font-bold lg:!p-7 md:!p-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-[#757741]">
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