// app/components/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      title: "Awaken to a different world",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1606820854416-439b3305ff39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discover hidden gems",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      title: "Escape to serenity",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`${slide.image}?auto=format&fit=crop&w=1920&h=1000&q=80`}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-end justify-start p-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-md">
          {slides[currentSlide].title}
        </h1>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;