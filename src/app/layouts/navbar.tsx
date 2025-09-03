"use client"
import { useState } from "react"
import clsx from "clsx"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type DropdownItemProps = {
  title: string
  desc: string
}

function DropdownItem({ title, desc }: DropdownItemProps) {
  return (
    <a
      href="#"
      className="rounded-xl p-3 hover:bg-gray-50 transition grid gap-0"
    >
      <div className="font-bold text-black">{title}</div>
      <div className="text-sm text-gray-600 font-normal">{desc}</div>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 z-50 w-full bg-[#f5f4ea] border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/">
        <img src="logo.png" alt="Logo" className="w-40" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-bold text-lg text-black">
          <a href="#">About</a>

          {/* Services w/ dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1 outline-none"
              onClick={() => setOpen((v) => !v)} // klik untuk mobile/tablet
              aria-haspopup="menu"
              aria-expanded={open}
            >
              <span>Services</span>
              <ChevronDown
                className={clsx(
                  "h-5 w-5 transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </button>

            {/* Panel dropdown */}
            <div
              className={clsx(
                "absolute left-1/2 -translate-x-1/2 mt-0 w-[640px] rounded-2xl bg-[#f5f4ea] p-4 shadow-xl ring-1 ring-black/5 grid grid-cols-2 gap-2 transition origin-top",
                "opacity-0 scale-95 pointer-events-none",
                // buka saat state open ATAU saat focus/hover (aksesibilitas + hover desktop)
                open && "opacity-100 scale-100 pointer-events-auto",
                "group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto",
                "group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
              )}
              role="menu"
            >
              <DropdownItem title="3D Garden Visualisation" desc="Concept to approval-ready visuals." />
              <DropdownItem title="Landscape Animation" desc="Planting palette & technical plans." />
              <DropdownItem title="Interactive Project Websites" desc="Quick wins for outdoor refresh." />
              <DropdownItem title="VR & AR for Landscape Projects" desc="Photo-real renders & animations." />
              <DropdownItem title="Site Hub" desc="Photo-real renders & animations." />
              <DropdownItem title="2D Landscape Drafting & Planning Packs" desc="Photo-real renders & animations." />
            </div>
          </div>

          <a href="#">Case Studies</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </nav>

        <Button className="text-base rounded-full bg-[#757741] font-semibold py-5 cursor-pointer hover:bg-[#d3d2a5] hover:text-black">Get in touch</Button>
      </div>
    </div>
  )
}
