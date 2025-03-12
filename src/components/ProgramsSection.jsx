"use client"
import Link from 'next/link';
import { useState } from 'react';
import computerscience from '../assets/computer_science.jpg'
import bussinesImage from '../assets/bussinesImage.jpeg'
import environment from '../assets/environment.jpg'
import black_background from '../assets/black_background.jpg'
import machanical from '../assets/mechanical-engineering-tech-print-reading-2022.jpg'
import data from '../assets/What-is-data-science-2.jpg'
import Image from 'next/image';


export default function ProgramsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Programs</h2>
          <p className="mt-4 text-lg text-gray-600">Discover our wide range of academic programs designed to prepare you for success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 hover:bg-blue-50">
            <div className="h-48 bg-gray-300 relative">
              <Image
                src={computerscience}
                alt="Computer Science"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Science</h3>
              <p className="text-gray-600 mb-4">Explore the world of algorithms, programming, and computational theory.</p>
              <Link href="/programs" className="text-blue-700 font-medium hover:text-blue-800">Learn more →</Link>
            </div>
          </div>

          {/* Program Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 hover:bg-blue-50">
            <div className="h-48 bg-gray-300 relative">
              <Image
                src={bussinesImage}
                alt="Computer Science"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Administration</h3>
              <p className="text-gray-600 mb-4">Develop leadership skills and business acumen for today's global economy.</p>
              <Link href="/programs" className="text-blue-700 font-medium hover:text-blue-800">Learn more →</Link>
            </div>
          </div>

          {/* Program Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 hover:bg-blue-50">
            <div className="h-48 bg-gray-300 relative">
              <Image
                src={environment}
                alt="Computer Science"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Science</h3>
              <p className="text-gray-600 mb-4">Study natural systems and develop solutions for environmental challenges.</p>
              <Link href="/programs" className="text-blue-700 font-medium hover:text-blue-800">Learn more →</Link>
            </div>
          </div>
        </div>

        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Program Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 hover:bg-blue-50">
              <div className="h-48 bg-gray-300 relative">
                <Image
                  src={black_background}
                  alt="Computer Science"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Psychology</h3>
                <p className="text-gray-600 mb-4">Understand human behavior and mental processes.</p>
                <Link href="/programs" className="text-blue-700 font-medium hover:text-blue-800">Learn more →</Link>
              </div>
            </div>

            {/* Program Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 hover:bg-blue-50">
              <div className="h-48 bg-gray-300 relative">
                <Image
                  src={machanical}
                  alt="Computer Science"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mechanical Engineering</h3>
                <p className="text-gray-600 mb-4">Design and innovate mechanical systems for the future.</p>
                <Link href="/programs" className="text-blue-700 font-medium hover:text-blue-800">Learn more →</Link>
              </div>
            </div>

            {/* Program Card 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 hover:bg-blue-50">
              <div className="h-48 bg-gray-300 relative">
                <Image
                  src={data}
                  alt="Computer Science"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Science</h3>
                <p className="text-gray-600 mb-4">Leverage data and analytics to drive decision-making.</p>
                <Link href="/programs" className="text-blue-700 font-medium hover:text-blue-800">Learn more →</Link>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <button onClick={() => setShowMore(!showMore)} className="bg-blue-600 text-white font-bold py-3 px-6 cursor-pointer rounded-full hover:bg-blue-700 transition duration-300">
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
}