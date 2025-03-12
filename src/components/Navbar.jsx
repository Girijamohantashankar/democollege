"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../assets/logonew.jpeg";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`bg-black text-white shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* College Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
                <Image src={logo} alt="University College" width={40} height={40} />
                University College
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                About
              </Link>
              <Link href="/programs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Programs
              </Link>
              <Link href="/admissions" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Admissions
              </Link>
              <Link href="/campus-life" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Campus Life
              </Link>
              <Link href="/career" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Career
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu burger */}
              <svg
                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon for X to close */}
              <svg
                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/programs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={closeMobileMenu}>
            Programs
          </Link>
          <Link href="/admissions" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={closeMobileMenu}>
            Admissions
          </Link>
          <Link href="/campus-life" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={closeMobileMenu}>
            Campus Life
          </Link>
          <Link href="/career" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={closeMobileMenu}>
            Career
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
