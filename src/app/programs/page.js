"use client";
import { useEffect, useState } from "react";
import { FaGraduationCap, FaBusinessTime, FaLaptopCode, FaHeartbeat, FaUniversity, FaCertificate } from "react-icons/fa";

export default function ProgramsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="bg-gray-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h1>
            <p className="text-xl text-gray-600">Discover a diverse range of undergraduate, graduate, and professional programs.</p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Undergraduate Programs */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <FaGraduationCap className="text-teal-600 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-900">Undergraduate Programs</h2>
              </div>
              <p className="text-gray-700 mt-3">
                Gain foundational knowledge and skills through our undergraduate degree programs.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-800 hover:text-teal-600 transition">Bachelor of Science in Computer Science</li>
                <li className="text-gray-800 hover:text-teal-600 transition">Bachelor of Business Administration</li>
                <li className="text-gray-800 hover:text-teal-600 transition">Bachelor of Science in Psychology</li>
                <li className="text-gray-800 hover:text-teal-600 transition">Bachelor of Science in Biology</li>
              </ul>
            </div>

            {/* Graduate Programs */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <FaUniversity className="text-purple-600 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-900">Graduate Programs</h2>
              </div>
              <p className="text-gray-700 mt-3">
                Advance your career with specialized knowledge and research opportunities.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-800 hover:text-purple-600 transition">Master of Business Administration (MBA)</li>
                <li className="text-gray-800 hover:text-purple-600 transition">Master of Science in Computer Science</li>
                <li className="text-gray-800 hover:text-purple-600 transition">Master of Public Health</li>
                <li className="text-gray-800 hover:text-purple-600 transition">Ph.D. in Engineering</li>
              </ul>
            </div>

            {/* Business Programs */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <FaBusinessTime className="text-blue-600 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-900">Business Programs</h2>
              </div>
              <p className="text-gray-700 mt-3">
                Gain expertise in business management, finance, and marketing.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-800 hover:text-blue-600 transition">Bachelor of Business Administration</li>
                <li className="text-gray-800 hover:text-blue-600 transition">Master of Business Administration (MBA)</li>
                <li className="text-gray-800 hover:text-blue-600 transition">Ph.D. in Business Administration</li>
              </ul>
            </div>

            {/* Engineering & Technology */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <FaLaptopCode className="text-red-600 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-900">Engineering & Technology</h2>
              </div>
              <p className="text-gray-700 mt-3">
                Learn cutting-edge technologies in software, AI, and engineering.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-800 hover:text-red-600 transition">B.S. in Computer Science</li>
                <li className="text-gray-800 hover:text-red-600 transition">B.S. in Mechanical Engineering</li>
                <li className="text-gray-800 hover:text-red-600 transition">M.S. in Artificial Intelligence</li>
              </ul>
            </div>

            {/* Health Sciences */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <FaHeartbeat className="text-green-600 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-900">Health Sciences</h2>
              </div>
              <p className="text-gray-700 mt-3">
                Prepare for a career in medicine, nursing, and public health.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-800 hover:text-green-600 transition">Bachelor of Science in Nursing</li>
                <li className="text-gray-800 hover:text-green-600 transition">Master of Public Health</li>
                <li className="text-gray-800 hover:text-green-600 transition">Doctor of Nursing Practice (DNP)</li>
              </ul>
            </div>

            {/* Certificates */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-4">
                <FaCertificate className="text-orange-600 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-900">Professional Certificates</h2>
              </div>
              <p className="text-gray-700 mt-3">
                Short-term programs designed for career advancement.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-800 hover:text-orange-600 transition">Data Science & Analytics</li>
                <li className="text-gray-800 hover:text-orange-600 transition">Cybersecurity</li>
                <li className="text-gray-800 hover:text-orange-600 transition">Leadership Development</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/admissions"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Explore Admissions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
