'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import Navbar from '../layouts/navbar';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import Footer from '../layouts/footer';

function ContactPage() {
  const [state, handleSubmit] = useForm("meorynky");

  return (
    <div>
    <Navbar/>
    <div className='flex lg:flex-row flex-col gap-5 justify-between lg:items-center mt-[81px] lg:px-30 md:px-10 px-4 lg:py-20 py-10 '>
            <div className='lg:w-[50%]' data-aos="fade-right">
                <h1 className='md:text-5xl text-3xl font-semibold mb-5'>Start Project</h1>
                <h1 className='md:text-xl text-base'>Whether it's a planting plan, a set of 3D visuals, or an immersive platform — just send us your files and a quick overview. We'll take it from there.</h1>
            </div>
            <h1 className='lg:w-[40%] lg:text-lg md:text-base text-sm' data-aos="fade-left">
                Have a sketch? Need support for an upcoming submission or presentation?
 We work with landscape architects, garden designers, public realm teams, and developers to bring outdoor designs to life — fast, clearly, and beautifully.
            </h1>
        </div>
    <div className='lg:px-30 md:px-10 px-4 pb-4 flex lg:flex-row flex-col gap-4'>
      <div className='lg:w-1/2 bg-[#f5f4ea] rounded-[15px] p-8' data-aos="fade-right">
        {state.succeeded ? (
          <div className='text-center py-10'>
            <h2 className='text-2xl font-bold text-green-600 mb-2'>Thank you!</h2>
            <p className='text-gray-700'>Your message has been sent successfully.</p>
            <p className='text-gray-700'>We'll respond within 1-2 working days with a quote, timeline, or next steps. If we need more info, we'll ask.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1 className='mb-2 font-semibold'>Name</h1>
            <input 
              type="text" 
              name="name"
              required
              className='w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500'
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className='text-red-500 text-sm -mt-2 mb-2'
            />
            
            <h1 className='mb-2 font-semibold'>Email Address</h1>
            <input 
              type="email" 
              name="email"
              required
              className='w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500'
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className='text-red-500 text-sm -mt-2 mb-2'
            />
            
            <h1 className='mb-2 font-semibold'>Description</h1>
            <textarea 
              name="message"
              required
              rows={5}
              className='w-full p-3 mb-6 rounded-lg border border-gray-300 resize-none focus:outline-none focus:border-gray-500'
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className='text-red-500 text-sm -mt-2 mb-2'
            />
            
            <Button type="submit" disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send'}
            </Button>
          </form>
        )}
      </div>
      
      
      <img 
        // src="/service.png" 
        src="./service.png" 
        alt="Garden" 
        className='lg:w-1/2 rounded-[15px] object-cover' 
        data-aos="fade-left"
      />
    </div>
    <div className='grid lg:grid-cols-3 lg:px-30 md:px-10 px-4 gap-5 lg:pb-20 pb-10'>
        <div className='bg-[#f5f4ea] rounded-[15px] flex p-5 items-center gap-5' data-aos="fade-right">
            <Mail className='lg:w-10 lg:h-10 md:w-8 md:h-8'/>
            <div>
                <h1 className='lg:text-lg md:text-base text-sm text-gray-500'>Write to us!</h1>
                <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>studio@conceptsconveyed.com</h1>
            </div>
        </div>
        <a href="https://wa.me/" className='hover:text-[#757741]' data-aos="zoom-in">
        <div className='bg-[#f5f4ea] rounded-[15px] flex p-5 items-center gap-5'>
            <MessageCircle className='lg:w-10 lg:h-10 md:w-8 md:h-8'/>
            <div>
                <h1 className='lg:text-lg md:text-base text-sm text-gray-500'>Whatsapp to us!</h1>
                <h1 className='lg:text-2xl md:text-xl text-lg font-semibold hover:underline '>+62 123456789</h1>
            </div>
        </div>
        </a>
        <div className='bg-[#f5f4ea] rounded-[15px] flex p-5 items-center gap-5' data-aos="fade-left">
            <Phone className='lg:w-10 lg:h-10 md:w-8 md:h-8'/>
            <div>
                <h1 className='lg:text-lg md:text-base text-sm text-gray-500'>Call us!</h1>
                <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>+62 123456789</h1>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ContactPage;