"use client";

import Link from "next/link";
import { useState } from "react";
import { AlignJustify, Moon, Sun, X } from "@deemlol/next-icons";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navClasses =
    theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white";

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-md transition ${navClasses}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-[12px]">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src={theme === "light" ? "./logo-dark.png" : "./logo-light.png"}
            width={160} // Base width (desktop)
            height={50}
            className="w-45 sm:w-45 md:w-45 h-auto object-contain"
            priority
            alt="logo"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-500 nav-link">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 nav-link">
            About
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-500 focus:outline-none nav-link"
            >
              Services
            </button>
            {dropdownOpen && (
              <div
                className={`absolute top-8 left-0 rounded shadow-md w-70 z-10 ${
                  theme === "dark"
                    ? "bg-black text-white shadow-white"
                    : "bg-white text-black shadow-black"
                }`}
              >
                <Link
                  href="/services/aam"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Amazon Account Management
                </Link>
                <Link
                  href="/services/ppc"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  PPC Management
                </Link>
                <Link
                  href="/services/bm"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Brand Management
                </Link>
              </div>
            )}
          </div>

          <Link href="/testimonials" className="hover:text-blue-500 nav-link">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-blue-500 nav-link">
            Contact
          </Link>
          <Link
            href="/calender"
            className={`btn ${
              theme === "light" ? "Nav-btn-light" : "Nav-btn-dark"
            }`}
          >
            Want a Free Audit?
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-xl" onClick={toggleMenu}>
            {menuOpen ? <X /> : <AlignJustify />}
          </button>
          <button onClick={toggleTheme} className="ml-2">
            {theme === "light" ? <Sun /> : <Moon />}
          </button>

          {/* Mobile Menu Toggle */}
        </div>
      </div>

        {/* Theme toggle (moved out of mobile menu) */}

      {/* Mobile Nav */}
      {menuOpen && (
        <div className={`lg:hidden px-4 pb-4 space-y-2 ${navClasses}`}>
          <Link href="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-500">
            About
          </Link>

          <details className="block">
            <summary className="cursor-pointer hover:text-blue-500">
              Services
            </summary>
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/services/aam" className="block">
                Amazon Account Management
              </Link>
              <Link href="/services/ppc" className="block">
                PPC Management
              </Link>
              <Link href="/services/bm" className="block">
                Brand Management
              </Link>
            </div>
          </details>

          <Link href="/testimonials" className="block hover:text-blue-500">
            Testimonials
          </Link>
          <Link href="/contact" className="block hover:text-blue-500">
            Contact
          </Link>
          <Link
            href="/calender"
            className={`btn ${
              theme === "light" ? "Nav-btn-light" : "Nav-btn-dark"
            }`}
          >
            Want a Free Audit?
          </Link>
        </div>
      )}
    </nav>
  );
}
