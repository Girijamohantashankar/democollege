"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaBriefcase } from "react-icons/fa"; 

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="py-12 bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem icon={<FaUserGraduate size={40} />} label="Students" number={5000} inView={inView} />
          <StatItem icon={<FaChalkboardTeacher size={40} />} label="Faculty Members" number={250} inView={inView} />
          <StatItem icon={<FaBookOpen size={40} />} label="Programs" number={100} inView={inView} />
          <StatItem icon={<FaBriefcase size={40} />} label="Graduate Employment" number={95} suffix="%" inView={inView} />
        </div>
      </div>
    </div>
  );
}

function StatItem({ icon, label, number, suffix = "", inView }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-white">{icon}</div>
      <div className="text-4xl font-bold mb-2">
        {inView ? <CountUp end={number} duration={2} suffix={suffix} /> : "0"}
      </div>
      <p className="text-lg">{label}</p>
    </div>
  );
}
