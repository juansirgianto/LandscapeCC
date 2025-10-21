"use client"
import { useState } from "react"
import clsx from "clsx"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type DropdownItemProps = {
  title: string
  desc: string
  href?: string
}

function DropdownItem({ title, desc, href = "#" }: DropdownItemProps) {
  return (
    <a href={href} className="rounded-xl p-3 hover:bg-gray-50 transition grid gap-0">
      <div className="font-bold text-black md:text-base text-sm">{title}</div>
      <div className="md:text-sm text-xs text-gray-600 font-normal">{desc}</div>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)              // dropdown Services (desktop)
  const [mobileOpen, setMobileOpen] = useState(false)  // panel nav (mobile/tablet)
  const [mobileServices, setMobileServices] = useState(false) // accordion Services (mobile)

  return (
    <div className="fixed top-0 z-50 w-full bg-[#f5f4ea] border-b">
      {/* Animasi Fade In Left */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/LandscapeCC/"><img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="Logo" className="w-40" /></a>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-lg text-black">
          <a href="/LandscapeCC/about" className="hover:mb-2">About</a>

          {/* Services (desktop dropdown) */}
          <div
            className="relative group hover:mb-2"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1 outline-none"
              onClick={() => setOpen(v => !v)}
              aria-haspopup="menu"
              aria-expanded={open}
            >
              <span>Services</span>
              <ChevronDown className={clsx("h-5 w-5 transition-transform duration-200", open && "rotate-180")} />
            </button>

            <div
              className={clsx(
                "absolute left-1/2 -translate-x-1/2 mt-0 w-[640px] rounded-2xl bg-[#f5f4ea] p-4 shadow-xl ring-1 ring-black/5 grid grid-cols-2 gap-2 transition origin-top",
                "opacity-0 scale-95 pointer-events-none",
                open && "opacity-100 scale-100 pointer-events-auto",
                "group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto",
                "group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
              )}
              role="menu"
            >
              <a href="/LandscapeCC/services" className="col-span-2 mb-1 px-3 text-base underline hover:opacity-80">Services Overview →</a>
              <DropdownItem href="/LandscapeCC/services/3d" title="3D Visualisation" desc="Photorealistic imagery for gardens, estates, public realm and resort landscapes." />
              <DropdownItem href="/LandscapeCC/services/modelling" title="3D Design & Terrain Modelling" desc="Precision 3D base models and site context modelling." />
              <DropdownItem href="/LandscapeCC/services/vr" title="VR & AR Services" desc="From 360° panoramas to full Unreal Engine walkable gardens." />
              <DropdownItem href="/LandscapeCC/services/interactive" title="Interactive Masterplans" desc="Mobile-ready AR overlays for gardens, campuses, and public spaces." />
              <DropdownItem title="Site Hub" desc="Project hub & client handoffs." />
              <DropdownItem title="2D Landscape Drafting & Planning" desc="Drawings, details, and packs." />
            </div>
          </div>

          <a href="#" className="hover:mb-2">Portofolio</a>
          <a href="#" className="hover:mb-2">Case Studies</a>
          <a href="#" className="hover:mb-2">Resources</a>
          <a href="#" className="hover:mb-2">Contact</a>
        </nav>

        {/* CTA Desktop */}
        <Button className="hidden lg:flex text-base rounded-full bg-[#757741] font-semibold py-5 hover:bg-[#d3d2a5] hover:text-[#757741] cursor-pointer">
          Contact Us
        </Button>

        {/* Toggler Mobile/Tablet */}
        <button
          className="lg:hidden p-2"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          {mobileOpen ? <X className="w-7 h-7 text-[#757741]" /> : <Menu className="w-7 h-7 text-[#757741]" />}
        </button>
      </div>

      {/* PANEL NAV MOBILE/TABLET */}
      <div
        id="mobile-menu"
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300 origin-top",
          mobileOpen ? "h-[100vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 pt-2 border-t font-semibold text-lg">
          <a href="/LandscapeCC/about" className="block py-3">About</a>

          {/* Services (mobile accordion) */}
          <div className="border-y">
            <button
              className="w-full flex items-center justify-between py-3"
              onClick={() => setMobileServices(v => !v)}
              aria-expanded={mobileServices}
              aria-controls="mobile-services"
            >
              <span>Services</span>
              <ChevronDown className={clsx("h-5 w-5 transition-transform duration-200", mobileServices && "rotate-180")} />
            </button>

            <div
              id="mobile-services"
              className={clsx(
                " gap-2 pl-2 pr-1 pb-3 transition-all duration-300 overflow-hidden",
                mobileServices ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <a href="/LandscapeCC/services" className="col-span-2 mb-1 px-3 text-base underline hover:opacity-80">Services Overview →</a>
              <DropdownItem href="/LandscapeCC/services/3d" title="3D Visualisation" desc="Photorealistic imagery for gardens, estates, public realm and resort landscapes." />
              <DropdownItem href="/LandscapeCC/services/modelling" title="3D Design & Terrain Modelling" desc="Precision 3D base models and site context modelling." />
              <DropdownItem href="/LandscapeCC/services/vr" title="VR & AR Services" desc="From 360° panoramas to full Unreal Engine walkable gardens." />
              <DropdownItem href="/LandscapeCC/services/interactive" title="Interactive Masterplans" desc="Mobile-ready AR overlays for gardens, campuses, and public spaces." />
              <DropdownItem title="Site Hub" desc="Project hub & client handoffs." />
              <DropdownItem title="2D Landscape Drafting & Planning" desc="Drawings, details, and packs." />
            </div>
          </div>

          <a href="#" className="block py-3 border-b">Portofolio</a>
          <a href="#" className="block py-3 border-b">Case Studies</a>
          <a href="#" className="block py-3 border-b">Resources</a>
          <a href="#" className="block py-3 border-b">Contact</a>

          <Button className="mt-4 w-full rounded-full bg-[#757741] font-semibold py-5 hover:bg-[#d3d2a5] hover:text-[#757741]">
            Contact Us
          </Button>
        </div>
      </div>
    </motion.div>
    </div>
  )
}
