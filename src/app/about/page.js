"use client";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="bg-white text-gray-900 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 transition-transform duration-300 hover:scale-105">
              About University College
            </h1>
            <p className="text-xl text-gray-600">Learn about our history, mission, and values.</p>
          </div>

          {/* Content Section */}
          <div className="prose prose-lg text-gray-800 mx-auto space-y-8">
            <section className="group transition-all duration-500 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-3 text-teal-700 group-hover:text-teal-900 transition-colors duration-300">
                Our History
              </h2>
              <p>
                Founded in 1965, University College has a rich history of academic excellence and innovation. 
                What began as a small college with just three departments has grown into a comprehensive 
                university serving over 5,000 students across multiple disciplines.
              </p>
              <p>
                Throughout the decades, we have remained committed to our founding principles while adapting 
                to meet the changing needs of students and society. Our campus has expanded from a single 
                building to a sprawling 150-acre campus with state-of-the-art facilities.
              </p>
            </section>

            <section className="group transition-all duration-500 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-3 text-teal-700 group-hover:text-teal-900 transition-colors duration-300">
                Our Mission
              </h2>
              <p>
                University College is dedicated to advancing knowledge, fostering innovation, and developing 
                leaders who make a positive impact on society.
              </p>
              <ul className="list-disc ml-5 space-y-2">
                <li className="hover:text-teal-900 transition duration-300">Providing exceptional educational experiences</li>
                <li className="hover:text-teal-900 transition duration-300">Conducting cutting-edge research</li>
                <li className="hover:text-teal-900 transition duration-300">Engaging with communities</li>
                <li className="hover:text-teal-900 transition duration-300">Fostering a diverse and inclusive environment</li>
              </ul>
            </section>

            <section className="group transition-all duration-500 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-3 text-teal-700 group-hover:text-teal-900 transition-colors duration-300">
                Our Values
              </h2>
              <p>At University College, we are guided by the following core values:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li className="hover:text-teal-900 transition duration-300"><strong>Excellence:</strong> We strive for the highest standards.</li>
                <li className="hover:text-teal-900 transition duration-300"><strong>Integrity:</strong> Honesty, transparency, and ethics.</li>
                <li className="hover:text-teal-900 transition duration-300"><strong>Innovation:</strong> We embrace creativity.</li>
                <li className="hover:text-teal-900 transition duration-300"><strong>Inclusion:</strong> Celebrating diversity.</li>
                <li className="hover:text-teal-900 transition duration-300"><strong>Community:</strong> Collaboration and respect.</li>
              </ul>
            </section>

            <section className="group transition-all duration-500 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-3 text-teal-700 group-hover:text-teal-900 transition-colors duration-300">
                Leadership
              </h2>
              <p>
                Our university is led by a team of dedicated professionals with extensive experience in higher education. 
                President Dr. Elizabeth Chen, appointed in 2019, brings over 25 years of academic leadership experience.
              </p>
              <p>
                The Board of Trustees, comprised of distinguished alumni, community leaders, and education experts, 
                provides governance and strategic direction for the university.
              </p>
            </section>

            <section className="group transition-all duration-500 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-3 text-teal-700 group-hover:text-teal-900 transition-colors duration-300">
                Accreditation
              </h2>
              <p>
                University College is accredited by the Higher Education Commission and maintains specialized 
                accreditation for programs in business, engineering, education, and healthcare.
              </p>
              <p>
                Our commitment to quality education is reflected in our consistent rankings among the top regional universities.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
