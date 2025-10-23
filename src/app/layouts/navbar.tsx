"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type DropdownItemProps = {
  title: string
  desc: string
  href?: string
  onClick?: () => void
}

function DropdownItem({ title, desc, href = "#", onClick }: DropdownItemProps) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="rounded-xl p-3 hover:bg-gray-50 bg-[#d3d2a5] transition-all duration-200 grid gap-0 hover:shadow-md"
    >
      <div className="font-bold text-black md:text-base text-sm">{title}</div>
      <div className="md:text-sm text-xs text-black/80 font-normal">{desc}</div>
    </a>
  )
}

const servicesItems = [
  { href: "/LandscapeCC/services/3d", title: "3D Visualisation", desc: "Photorealistic imagery for gardens, estates, public realm and resort landscapes." },
  { href: "/LandscapeCC/services/modelling", title: "3D Design & Terrain Modelling", desc: "Precision 3D base models and site context modelling." },
  { href: "/LandscapeCC/services/vr", title: "VR & AR Services", desc: "From 360° panoramas to full Unreal Engine walkable gardens." },
  { href: "/LandscapeCC/services/interactive", title: "Interactive Masterplans", desc: "Mobile-ready AR overlays for gardens, campuses, and public spaces." },
  { href: "/LandscapeCC/services/sitehub", title: "Site Hub", desc: "Your entire landscape design, centralised in one interactive online platform" },
  { href: "/LandscapeCC/services/2d", title: "2D Landscape Drafting & Planning", desc: "Fast, clear layout plans, planting plans, lighting overlays, and more" }
]

const caseStudiesItems = [
  { href: "/LandscapeCC/case-studies/foxterra", title: "Foxterra", desc: "California, US" },
  { href: "/LandscapeCC/case-studies/arne-maynard", title: "Arne Maynard Studio", desc: "United Kingdom" },
  { href: "/LandscapeCC/case-studies/wilden", title: "Wilden", desc: "Dubai, UAE" },
  { href: "/LandscapeCC/case-studies/stylarc", title: "Stylarc", desc: "California, US" },
  { href: "/LandscapeCC/case-studies/adam-vetere", title: "Adam Vetere", desc: "United Kingdom" },
  { href: "/LandscapeCC/case-studies/garden-club", title: "Garden Club London", desc: "United Kingdom" },
  { href: "/LandscapeCC/case-studies/ebd-studios", title: "EBD Studios", desc: "Colorado, US" },
  { href: "/LandscapeCC/case-studies/we-love-plants", title: "We Love Plants", desc: "United Kingdom" },
  { href: "/LandscapeCC/case-studies/rachael-white", title: "Rachael White Designs", desc: "United Kingdom" },
  { href: "/LandscapeCC/case-studies/randle-siddeley", title: "Randle Siddeley", desc: "United Kingdom" },
  { href: "/LandscapeCC/case-studies/kit-peel", title: "Kit Peel Gardens", desc: "United Kingdom" },
  { href: "/LandscapeCC/case-studies/harold-leidner", title: "Harold Leidner Landscape Architects", desc: "Texas, US" }
]

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobileCases, setMobileCases] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const servicesRef = useRef<HTMLDivElement>(null)
  const caseStudiesRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
        setMobileServices(false)
        setMobileCases(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
      if (caseStudiesRef.current && !caseStudiesRef.current.contains(event.target as Node)) {
        setCaseStudiesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileServices(false)
    setMobileCases(false)
  }

  return (
    <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-[#f5f4ea]/95 backdrop-blur-md shadow-md' : 'bg-[#f5f4ea]'
    } border-b border-black/5`}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/LandscapeCC/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <img 
              src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" 
              alt="Landscape CC Logo" 
              className="w-32 md:w-40" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-bold text-base xl:text-lg text-black">
            <a href="/LandscapeCC/about" className="hover:text-[#757741] transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#757741] transition-all group-hover:w-full"></span>
            </a>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 outline-none hover:text-[#757741] transition-colors relative"
                onClick={() => setServicesOpen(v => !v)}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#757741] transition-all group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[640px] rounded-2xl bg-[#f5f4ea] p-4 shadow-2xl ring-1 ring-black/10 grid grid-cols-2 gap-2"
                    role="menu"
                  >
                    <a href="/LandscapeCC/services" className="col-span-2 mb-2 px-3 text-sm font-semibold text-[#757741] hover:underline">
                      Services Overview →
                    </a>
                    {servicesItems.map((item, idx) => (
                      <DropdownItem key={idx} {...item} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/LandscapeCC/portofolio" className="hover:text-[#757741] transition-colors relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#757741] transition-all group-hover:w-full"></span>
            </a>

            {/* Case Studies Dropdown */}
            <div
              ref={caseStudiesRef}
              className="relative group"
              onMouseEnter={() => setCaseStudiesOpen(true)}
              onMouseLeave={() => setCaseStudiesOpen(false)}
            >
              <button
                className="flex items-center gap-1 outline-none hover:text-[#757741] transition-colors relative"
                onClick={() => setCaseStudiesOpen(v => !v)}
                aria-haspopup="menu"
                aria-expanded={caseStudiesOpen}
              >
                <span>Case Studies</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${caseStudiesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#757741] transition-all group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {caseStudiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[680px] rounded-2xl bg-[#f5f4ea] p-4 shadow-2xl ring-1 ring-black/10 grid grid-cols-3 gap-2"
                    role="menu"
                  >
                    {caseStudiesItems.map((item, idx) => (
                      <DropdownItem key={idx} {...item} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/LandscapeCC/resources" className="hover:text-[#757741] transition-colors relative group">
              Resources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#757741] transition-all group-hover:w-full"></span>
            </a>

            <a href="/LandscapeCC/contact" className="hover:text-[#757741] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#757741] transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <button className="hidden lg:flex items-center justify-center text-base rounded-full font-semibold px-6 py-3 bg-gradient-to-t from-[#757741] to-[#d3d2a5] hover:shadow-lg hover:scale-105 transition-all duration-300 text-white">
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7 text-[#757741]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-7 h-7 text-[#757741]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-y-auto overflow-x-hidden max-h-[calc(100vh-80px)] border-t border-black/5"
            >
              <div className="px-6 pb-6 pt-2 font-semibold text-lg">
                <a 
                  href="/LandscapeCC/about" 
                  onClick={closeMobileMenu}
                  className="block py-3 hover:text-[#757741] transition-colors"
                >
                  About
                </a>

                {/* Services Accordion */}
                <div className="border-t border-black/5">
                  <button
                    className="w-full flex items-center justify-between py-3 hover:text-[#757741] transition-colors"
                    onClick={() => setMobileServices(v => !v)}
                    aria-expanded={mobileServices}
                    aria-controls="mobile-services"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileServices ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServices && (
                      <motion.div
                        id="mobile-services"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="gap-2 pl-2 pr-1 pb-3 overflow-hidden flex flex-col"
                      >
                        <a 
                          href="/LandscapeCC/services" 
                          onClick={closeMobileMenu}
                          className="mb-1 px-3 text-sm font-semibold text-[#757741] hover:underline"
                        >
                          Services Overview →
                        </a>
                        {servicesItems.map((item, idx) => (
                          <DropdownItem key={idx} {...item} onClick={closeMobileMenu} />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a 
                  href="/LandscapeCC/portofolio" 
                  onClick={closeMobileMenu}
                  className="block py-3 border-t border-black/5 hover:text-[#757741] transition-colors"
                >
                  Portfolio
                </a>

                {/* Case Studies Accordion */}
                <div className="border-t border-black/5">
                  <button
                    className="w-full flex items-center justify-between py-3 hover:text-[#757741] transition-colors"
                    onClick={() => setMobileCases(v => !v)}
                    aria-expanded={mobileCases}
                    aria-controls="mobile-cases"
                  >
                    <span>Case Studies</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileCases ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileCases && (
                      <motion.div
                        id="mobile-cases"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="gap-2 pl-2 pr-1 pb-3 overflow-hidden grid grid-cols-2"
                      >
                        {caseStudiesItems.map((item, idx) => (
                          <DropdownItem key={idx} {...item} onClick={closeMobileMenu} />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a 
                  href="/LandscapeCC/resources" 
                  onClick={closeMobileMenu}
                  className="block py-3 border-t border-black/5 hover:text-[#757741] transition-colors"
                >
                  Resources
                </a>

                <a 
                  href="/LandscapeCC/contact" 
                  onClick={closeMobileMenu}
                  className="block py-3 border-t border-black/5 hover:text-[#757741] transition-colors"
                >
                  Contact
                </a>

                <button 
                  onClick={closeMobileMenu}
                  className="mt-4 w-full rounded-full bg-gradient-to-tr from-[#757741] to-[#d3d2a5] hover:shadow-lg font-semibold md:py-4 py-2 text-white transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}