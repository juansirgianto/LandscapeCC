'use client'

import Footer from '@/app/layouts/footer'
import Navbar from '@/app/layouts/navbar'
import Runninglogo from '@/app/layouts/runninglogo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Brush, MoveRight, Palette, User, Users} from 'lucide-react'
import React from 'react'

function Vr() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='mt-[73px] grid md:grid-cols-2'>
            <img src="https://designedbypelago.com/wp-content/uploads/2025/09/garden.jpg" alt="" className='lg:h-[80vh] md:h-[60vh] object-cover hidden md:flex' data-aos="fade-right"/>
            <div className='bg-[#757741] lg:h-[80vh] md:h-[60vh] lg:p-30 md:p-10 p-10 flex flex-col justify-center md:gap-8 gap-4 text-white' data-aos="fade-left">
                <h1 className='lg:text-5xl md:text-3xl text-xl font-semibold'>Step into your unbuilt landscape with immersive VR & AR visualisation.</h1>
                <h1 className='lg:text-xl md:text-base text-sm'>Our VR and AR services allow landscape professionals to present, refine, and sell their designs in real time - with immersive tools that go far beyond static visuals. From 360° virtual tours to fully interactive VR environments and mobile AR masterplans, we help you lead with clarity and innovation at every project stage.</h1>
                <Button className="lg:text-xl md:text-base text-sm rounded-full relative items-center bg-gradient-to-t from-[#f5f4ea] to-[#d3d2a5] hover:bg-gradient-to-b text-[#757741] w-fit font-bold lg:!p-7 md:!p-5 cursor-pointer">
                Start a Project 
                <MoveRight strokeWidth={3}/>
                </Button>
            </div>
        </div>
        <Runninglogo/>
        <div className=' lg:py-15 md:py-10 py-4 '>
            <h1 className='font-semibold lg:text-5xl md:text-3xl text-xl text-center lg:pb-15 md:pb-10 pb-4' data-aos="fade-up">VR Options :</h1>
            <div className='grid grid-cols-2'>
                <div className='bg-[#f5f4ea] lg:px-30 md:px-10 px-5 lg:py-15 md:py-10 py-4' data-aos="fade-right">
                    <h1 className='lg:text-3xl md:text-xl text-base lg:mb-4 mb-2 text-center' data-aos="fade-up">Static VR <br /> <span className='lg:text-xl md:text-base text-xs italic'>(360° Virtual Tours)</span></h1>
                    <div className='grid md:grid-cols-2 lg:gap-5 md:gap-3 gap-2 lg:mb-4 mb-2'>
                        <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2' data-aos="fade-right">
                            <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                            <p className='text-center text-white lg:text-xl md:text-base text-sm'>Node-based tours with click-through hotspots</p>
                        </div>
                        <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2' data-aos="fade-left">
                            <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                            <p className='text-center text-white lg:text-xl md:text-base text-sm'>Ideal for presenting gardens, resort zones, and exterior spaces</p>
                        </div>
                        <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2' data-aos="fade-right">
                            <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                            <p className='text-center text-white lg:text-xl md:text-base text-sm'>Can be viewed on desktop, tablet, or headset</p>
                        </div>
                        <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2' data-aos="fade-left">
                            <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                            <p className='text-center text-white lg:text-xl md:text-base text-sm'>Great for client presentations and pre-sales experiences</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#757741] lg:px-30 md:px-10 px-5 lg:py-15 md:py-10 py-4' data-aos="fade-left">
                <h1 className='lg:text-3xl md:text-xl text-base lg:mb-4 mb-2 text-center text-white' data-aos="fade-up">Interactive VR <br /> <span className='lg:text-xl md:text-base text-xs italic'>(Unreal Engine)</span></h1>
                <div className='grid md:grid-cols-2 lg:gap-5 md:gap-3 gap-2'>
                    <div className='bg-gradient-to-b from-[#f5f4ea] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2' data-aos="fade-right">
                        <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                        <p className='text-center text-black lg:text-xl md:text-base text-sm'>Walkable, explorable 3D environments</p>
                    </div>
                    <div className='bg-gradient-to-b from-[#f5f4ea] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2' data-aos="fade-left">
                        <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                        <p className='text-center text-black lg:text-xl md:text-base text-sm'>Toggle between design options (planting, furniture, layouts)</p>
                    </div>
                    <div className='bg-gradient-to-b from-[#f5f4ea] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2' data-aos="fade-right">
                        <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                        <p className='text-center text-black lg:text-xl md:text-base text-sm'>Embedded labels, sound, or interactive zones</p>
                    </div>
                    <div className='bg-gradient-to-b from-[#f5f4ea] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2' data-aos="fade-left">
                        <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                        <p className='text-center text-black lg:text-xl md:text-base text-sm'>Ideal for design development, upselling, and immersive reviews</p>
                    </div>
                    {/* <div className='bg-gradient-to-b from-[#f5f4ea] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 col-span-2'>
                        <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                        <p className='text-center text-black lg:text-xl md:text-base text-sm'>Deployed for headset, desktop, or live screen walkthroughs</p>
                    </div> */}
                </div>
                </div>
            </div>
        </div>
        <h1 className='font-semibold lg:text-5xl md:text-3xl text-xl text-center lg:pb-15 md:pb-10 pb-4' data-aos="fade-up">AR Options :</h1>
        <div className='lg:px-30 md:px-10 px-5'>
        <h1 className='lg:text-3xl md:text-xl text-base lg:mb-4 mb-2' data-aos="fade-up">Augmented Reality Masterplans</h1>
            <div className='grid md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-3 gap-2 lg:pb-15 md:pb-10 pb-4'>
                <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-4 transition-all duration-300 ease-in-out' data-aos="fade-right">
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                    <p className='text-center text-white lg:text-xl md:text-base text-sm'>Touch-based overlays of your site plan</p>
                </div>
                <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-4 transition-all duration-300 ease-in-out' data-aos="fade-up">
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                    <p className='text-center text-white lg:text-xl md:text-base text-sm'>Clickable zones with embedded images, text, and toggles</p>
                </div>
                <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-4 transition-all duration-300 ease-in-out' data-aos="fade-down">
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                    <p className='text-center text-white lg:text-xl md:text-base text-sm'>Launch via QR or URL - no app install required</p>
                </div>
                <div className='bg-gradient-to-t from-[#757741] to-[#d3d2a5] flex flex-col p-2 rounded-[15px] gap-2 hover:mx-4 transition-all duration-300 ease-in-out' data-aos="fade-left">
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/10/3D-visualisation-web-thumnail.jpg" alt="" className='lg:h-[25vh] h-[15vh] object-cover rounded-[15px]' />
                    <p className='text-center text-white lg:text-xl md:text-base text-sm'>Perfect for council engagement, on-site exploration, or client previews</p>
                </div>
            </div>
            </div>
        <div className='lg:px-30 md:px-10 px-4 lg:py-15 md:py-10 py-4 grid md:grid-cols-2 lg:gap-8 md:gap-4 items-center bg-[#f5f4ea]' data-aos="fade-up">
            <div className='lg:pr-30 md:mb-0 mb-4 ' data-aos="fade-right">
                <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-4 text-center md:text-start'>Process Overview</h1>
                <h1 className='lg:text-lg md:text-sm text-sm text-black md:mb-4'>These tools go beyond visuals - they build understanding. VR lets people walk through space as if it's already built. AR masterplans turn drawings into layered, explorable presentations. Together, they dramatically improve communication, buy-in, and clarity across client, contractor, and council teams.</h1>
                <Button className="hidden md:flex lg:text-xl md:text-base text-sm rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-semibold lg:!p-7 md:!p-5 cursor-pointer">
                Contact Us
                </Button>
            </div>
            <div className='flex flex-col gap-2 lg:ml-30'>
                <div className='flex bg-gradient-to-r from-[#757741] to-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>1</h1>
                    <h1 className='text-white'>Send a sketch or 3D model</h1>
                </div>
                <div className='flex bg-gradient-to-r from-[#757741] to-[#d3d2a5] px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>2</h1>
                    <h1 className='text-white'>We optimise it for VR or AR based on goals</h1>
                </div>
                <div className='flex bg-gradient-to-r from-[#757741] to-[#d3d2a5]  px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>3</h1>
                    <h1 className='text-white'>Review hotspots, toggles, and layouts</h1>
                </div>
                <div className='flex bg-gradient-to-r from-[#757741] to-[#d3d2a5]  px-4 py-2 rounded-full items-center gap-5 lg:text-xl md:text-base text-sm' data-aos="fade-left">
                    <h1 className='bg-[#d3d2a5] md:px-4.5 md:py-2 px-3 py-1 rounded-full text-[#757741] font-semibold'>4</h1>
                    <h1 className='text-white'>Delivered via link, headset file, or presentation-ready screen tool</h1>
                </div>
            </div>
        </div>
        <div className='lg:px-30 md:px-10 px-4'>
            <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
            <AccordionItem value="item-1">
                <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Why It Works :</AccordionTrigger>
                <AccordionContent className='lg:text-xl md:text-base text-xs'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-bold'>Raises design clarity</span> - clients understand scale, mood, and function instantly</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-bold'>Helps win approvals</span> - especially with councils or multi-stakeholder teams</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-bold'>Supports upselling</span> - show premium options in real time</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='bg-gradient-to-tr from-[#757741] to-[#d3d2a5] font-semibold rounded-full lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4'></p>
                        <p className='text-black'><span className='font-bold'>Future-proofs your studio</span> - positions you as tech-forward and client-centric</p>
                    </div>
                </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className='lg:py-8 md:py-6 py-4 border-b-1' data-aos="fade-left">
            <AccordionItem value="item-1">
                <AccordionTrigger className='lg:text-3xl md:text-2xl text-lg font-semibold cursor-pointer'>Ideal For :</AccordionTrigger>
                <AccordionContent className='lg:text-xl md:text-base text-xs'>
                    <div className='grid md:grid-cols-2 gap-3'>
                        <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-right">
                            <div className='flex relative items-center gap-3'>
                                <Palette className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                                <p className='lg:text-xl md:text-lg text-base font-semibold'>Landscape architects & garden designers working on complex sites</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-left">
                            <div className='flex relative items-center gap-3'>
                                <Users className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                                <p className='lg:text-xl md:text-lg text-base font-semibold'>Public realm and multi-phase developments</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-right">
                            <div className='flex relative items-center gap-3'>
                                <Brush className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                                <p className='lg:text-xl md:text-lg text-base font-semibold'>Design-build firms presenting layout and finish options</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 bg-gradient-to-r from-[#757741] to-[#d3d2a5] rounded-[15px] px-4 py-2 text-white' data-aos="fade-left">
                            <div className='flex relative items-center gap-3'>
                                <User className='text-[#757741] lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 bg-white rounded-full p-1'/>
                                <p className='lg:text-xl md:text-lg text-base font-semibold'>Developers or resort teams pitching to investors or sales leads</p>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
            </div>
        {/* <h1 className='text-center lg:text-5xl md:text-3xl text-xl lg:pb-15 md:pb-10 pb-4 font-semibold'>Our Projects</h1>
        <div className='grid md:grid-cols-2 md:gap-4 gap-2 px-10 lg:pb-15 md:pb-10 pb-4'>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]"/>
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Foxtera</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/hero2.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
            <a href="">
                <div>
                    <img src="https://designedbypelago.com/wp-content/uploads/2025/09/service.png" alt="" className="transition-transform duration-500 ease-in-out lg:h-[50vh] md:h-[25vh] object-cover w-full hover:scale-98 rounded-[15px]" />
                    <div className='flex items-center md:justify-between justify-center gap-2 px-4'>
                        <h1 className='lg:text-3xl md:text-xl'>Adam Vetere</h1>
                        <MoveRight strokeWidth={2} className='lg:size-6 size-4'/>
                    </div>
                </div>
            </a>
        </div> */}
        <div style={{ backgroundImage: "url('https://designedbypelago.com/wp-content/uploads/2025/10/1577CC_PWGD_POOL_REV-01-Photo.jpg')" }} className='relative md:h-[80vh] h-[50vh] bg-center bg-cover' data-aos="fade-up">
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className='relative text-center text-white lg:text-4xl md:text-2xl font-semibold top-1/2 -translate-y-1/2 '>
            <h1 className='mb-4 font-light'><span className='font-bold'>Ready to offer clients more than just a visual?</span> <br />
 Let them experience your design.</h1>
            <Button className="lg:text-2xl md:text-lg rounded-full relative items-center bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:bg-gradient-to-b font-bold lg:!p-7 md:!p-5 cursor-pointer">
                Start a Project 
            <MoveRight strokeWidth={3}/>
            </Button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Vr