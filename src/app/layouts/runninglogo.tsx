import React from 'react'

function Runninglogo() {
  return (
    <div className="overflow-hidden border-b-1 lg:py-8 md:py-6 py-4">
    <div className="flex gap-30 animate-marquee whitespace-nowrap">
        <img src="/logo.png" alt="" className='lg:h-20 md:h-10 h-8' />
        <img src="/logo/fox.png" alt="" className='lg:h-20 md:h-10 h-8' />
        <img src="/logo/asg.png" alt="" className='lg:h-20 md:h-10 h-8' />
        <img src="/logo/canham.png" alt="" className='lg:h-20 md:h-10 h-8' />
        <img src="/logo/avlogo.jpg" alt="" className='lg:h-20 md:h-10 h-8' />
    </div>
    </div>
  )
}

export default Runninglogo