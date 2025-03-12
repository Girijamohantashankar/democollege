"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import compusImage from '../assets/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg'
import Image from 'next/image';

export default function HeroSection() {
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 200);
    setTimeout(() => setAnimateImage(true), 400);
  }, []);

  return (
    <div className="text-white py-16 md:py-24 pt-25 bg_image">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 mb-8 md:mb-0 transition-all duration-700 ${animateText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to University College</h1>
            <p className="text-lg md:text-xl mb-6">Empowering minds, shaping futures. Join our community of scholars and innovators.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions" className="bg-white text-teal-800 font-bold py-3 px-6 rounded-full text-center hover:bg-gray-100 hover:scale-105 transition duration-300 shadow-lg">
                Apply Now
              </Link>
              <Link href="#" className="border border-white text-white font-bold py-3 px-6 rounded-full text-center hover:bg-teal-800 hover:scale-105 transition duration-300 shadow-lg">
                Virtual Tour
              </Link>
            </div>
          </div>
          {/* <div
            className={`md:w-1/2 flex justify-center transition-all duration-700 ${animateImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden h-64 w-full md:h-80 md:w-4/5 relative hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Campus Image</span>
                <Image src={compusImage} alt="Campus Image" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}