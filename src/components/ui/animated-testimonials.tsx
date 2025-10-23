"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string;
  mediaType?: "image" | "video";
  videoSrc?: string;
  poster?: string;
  orientation?: "portrait" | "landscape";
};


function hashToRange(str: string, min = -10, max = 10) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  const span = max - min + 1;
  return min + (Math.abs(h) % span);
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: ReadonlyArray<Testimonial>; // 👈 terima readonly
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => index === active;

  const rotations = useMemo(
    () =>
      testimonials.map((t) =>
        hashToRange(t.src ?? t.videoSrc ?? t.name)
      ),
    [testimonials]
  );

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(handleNext, 5000);
    return () => clearInterval(id);
  }, [autoplay, handleNext]);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  useEffect(() => {
  videoRefs.current.forEach((video, i) => {
    if (!video) return;
    if (i === active) {
      // mainkan video aktif
      video.currentTime = 0; // opsional: mulai ulang tiap kali slide aktif
      video.play().catch(() => {}); // catch silent jika autoplay diblokir
    } else {
      // pause semua lainnya
      video.pause();
    }
  });
}, [active]);

  return (
    <div className="mx-auto px-4 md:py-8 py-4 lg:pb-13 font-sans antialiased md:px-8 lg:px-70 bg-[#f5f4ea]" data-aos="fade-up">
      <h1 className='text-center mb-8 lg:text-4xl md:text-2xl text-lg font-semibold'>What Our Clients Say</h1>
      <div className="relative grid grid-cols-1 md:gap-20 gap-5 md:grid-cols-2">
        <div>
          <div className="relative md:h-[500px] h-[260px] w-full mx-auto overflow-hidden rounded-3xl">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const rot = rotations[index]; // nilai stabil
                return (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rot,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rot, // ❗ pakai nilai stabil
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -40, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rot, // ❗ tetap stabil
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom flex items-center justify-center"
                  >
                    {testimonial.mediaType === "video" ? (
                  <video
                  ref={(el) => { videoRefs.current[index] = el }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={testimonial.poster}
                    preload="metadata"
                    className={`rounded-3xl object-center
                      ${testimonial.orientation === "portrait"
                        ? "max-h-full max-w-full object-cover bg-neutral-100"
                        : "h-[450px] w-[300px] object-cover"}
                    `}
                  >
                    <source src={testimonial.videoSrc!} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={testimonial.src!}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className={`rounded-3xl object-center
                      ${testimonial.orientation === "portrait"
                        ? "max-h-full max-w-full object-contain bg-neutral-100"
                        : "h-full w-full object-cover"}
                    `}
                  />
                )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between md:py-4 py-2">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="md:text-2xl text-lg font-bold text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-base text-gray-500 ">
              {testimonials[active].designation}
            </p>
            <motion.p className="md:mt-8 mt-4 md:text-lg text-sm text-black">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 lg:pt-12 md:pt-0 pt-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-[#757741] cursor-pointer"
            >
              <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12 " />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-[#757741] cursor-pointer"
            >
              <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
