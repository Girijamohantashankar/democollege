"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Import images
import allumin1 from '../assets/photo-1587778082149-bd5b1bf5d3fa.jpeg';
import allumin2 from '../assets/images.jpeg';
import allumin3 from '../assets/allumin3.jpeg';
import allumin4 from '../assets/aluumin4.jpeg';
import allumin5 from '../assets/allumin5.jpeg';

export default function AlumniPage() {
  const [alumni, setAlumni] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchedAlumni = [
      { name: "John Doe", batch: "2015", job: "Software Engineer at Google", image: allumin1 },
      { name: "Jane Smith", batch: "2018", job: "Data Scientist at Microsoft", image: allumin2 },
      { name: "Alex Brown", batch: "2017", job: "Marketing Manager at Amazon", image: allumin3 },
      { name: "Emily White", batch: "2016", job: "UX Designer at Apple", image: allumin4 },
      { name: "Michael Lee", batch: "2014", job: "Cybersecurity Specialist at IBM", image: allumin5 },
    ];
    setAlumni(fetchedAlumni);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % alumni.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + alumni.length) % alumni.length);

  return (
    <div className="py-12 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Our Alumni</h2>
        {alumni.length > 0 && (
          <div className="relative flex items-center justify-center w-full max-w-md mx-auto">
            {/* Previous Button */}
            <button onClick={prevSlide} className="absolute left-0 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">
              <FaArrowLeft size={20} />
            </button>

            {/* Alumni Card with Slide Animation */}
            <div className="overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  {/* Alumni Image */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={alumni[currentIndex].image}
                      alt={alumni[currentIndex].name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-md"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold">{alumni[currentIndex].name}</h3>
                  <p className="text-gray-600">Batch of {alumni[currentIndex].batch}</p>
                  <p className="text-blue-600 font-medium">{alumni[currentIndex].job}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button onClick={nextSlide} className="absolute right-0 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">
              <FaArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
