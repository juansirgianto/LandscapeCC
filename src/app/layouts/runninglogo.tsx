import { motion } from 'framer-motion'
import React from 'react'

function Runninglogo() {
  return (
    <div className="overflow-hidden border-b-1 lg:py-8 md:py-6 py-4">
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
    <div className="flex gap-20 animate-marquee whitespace-nowrap">
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
      <img src="https://designedbypelago.com/wp-content/uploads/2025/09/logo-e1758792173542.png" alt="" className='lg:h-20 md:h-10 h-8' />
    </div>
    </motion.div>
    </div>
  )
}

export default Runninglogo