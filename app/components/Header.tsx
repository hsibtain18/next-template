"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, AlignJustify, X } from "@deemlol/next-icons";
import { useTheme } from "next-themes";
import gsap from "gsap";
import NewsTicker from "./NavBarTicker";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navClasses, setNavClasses] = useState("");
  const [hasMounted, setHasMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleServices = () => setMobileServicesOpen(!mobileServicesOpen);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const showButton = pathname !== "/calender";

  const toggleTheme = () => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { rotate: 0 },
        {
          rotate: 360,
          duration: 0.6,
          ease: "back.inOut(1.7)", // adds elastic bounce like a dial
        }
      );
    }

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    if (!showButton) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    if (theme) {
      setHasMounted(true);
    }
    const handleScroll = () => {
      setNavClasses(window.scrollY > 300 ? "nav-scroll" : "");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleMenu = () => setMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setTimeout(() => {
      if (!dropdownOpen) setDropdownOpen(false);
    }, 5000);
  };
  if (!hasMounted) return null;
  return (
    <>
      {pathname !== "/calender" && <NewsTicker />}
      <nav
        suppressHydrationWarning={true}
        className={`fixed top-0 w-full z-50 shadow-md transition navbar navbar-expand-lg change ${
          theme === "light" ? "light" : ""
        } ${navClasses} ${
          pathname === "/calender" && navClasses ? "nav-scroll-calender" : ""
        } ${pathname == "/calender" ? "navbar-calender" : ""} `}
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-[12px]">
          <Link href="/" className="logo text-2xl font-bold">
            <Image
              src={theme === "light" ? "/logo-dark.png" : "/logo-light.png"}
              width={160}
              height={50}
              className="w-45 sm:w-45 md:w-45 h-auto object-contain"
              priority
              alt="logo"
            />
          </Link>
          <div className="flex justify-end gap-4">
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/" className="hover:text-blue-500 nav-link">
                Home
              </Link>
              <Link href="/aboutus" className="hover:text-blue-500 nav-link">
                About
              </Link>

              <div className="relative nav-item dropdown" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="hover:text-blue-500 focus:outline-none nav-link dropdown-toggle px-4 py-2"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Services
                </button>
                <div
                  className={`dropdown-menu absolute top-10 left-0 z-50 transition-all duration-400
                 ${dropdownOpen ? "show" : ""}
                 ${
                   theme === "dark"
                     ? "bg-[#1b1d21] text-white"
                     : "bg-white text-black"
                 }`}
                >
                  <Link
                    href="/services/eem"
                    onClick={() => setDropdownOpen(false)}
                    className="dropdown-item block px-6 py-3 relative hover:pl-10 transition-all duration-300"
                  >
                    Amazon Account Managemen
                  </Link>
                  <Link
                    href="/services/ppc"
                    onClick={() => setDropdownOpen(false)}
                    className="dropdown-item block px-6 py-3 relative hover:pl-10 transition-all duration-300"
                  >
                    Advertising & PPC Management
                  </Link>
                  <Link
                    href="/services/cbm"
                    onClick={() => setDropdownOpen(false)}
                    className="dropdown-item block px-6 py-3 relative hover:pl-10 transition-all duration-300"
                  >
                    Creative & Branding Services
                  </Link>
                </div>
              </div>
              <Link
                href="/testimonials"
                className="hover:text-blue-500 nav-link"
              >
                Testimonials
              </Link>
              <Link href="/contactus" className="hover:text-blue-500 nav-link">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <button className="lg:hidden text-xl" onClick={toggleMenu}>
                  {mobileMenuOpen ? <X /> : <AlignJustify />}
                </button>
                {showButton && (
                  <button
                    ref={buttonRef}
                    onClick={toggleTheme}
                    className="ml-2"
                  >
                    {theme === "light" ? <Sun /> : <Moon />}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* {menuOpen && (
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
                <Link href="/services/eem" className="block">
                  Amazon Account Managemen
                </Link>
                <Link href="/services/ppc" className="block">
                  Advertising & PPC Management
                </Link>
                <Link href="/services/cbm" className="block">
                  Creative & Branding Services
                </Link>
              </div>
            </details>
            <Link href="/testimonials" className="block hover:text-blue-500">
              Testimonials
            </Link>
            <Link href="/contact" className="block hover:text-blue-500">
              Contact
            </Link>
             
          </div>
        )} */}
        {mobileMenuOpen && (
          <div className="navbar-nav mx-auto  mobile-background w-100 text-center mb-20">
            <Link
              href="/"
              className="block  font-medium text-gray-700 dark:text-white hover:text-blue-500 text-[12px] nav-item my-2"
            >
              Home
            </Link>

            <Link
              href="/aboutus"
              className="block  font-medium text-gray-700 dark:text-white hover:text-blue-500 text-[12px] nav-item my-2"
            >
              About
            </Link>

            {/* Services Toggle */}
            <div className=" w-100 text-center">
              <button
                onClick={toggleServices}
                className="font-medium text-gray-700 dark:text-white hover:text-blue-500 text-[12px] nav-item my-2 flex items-center justify-center gap-2 mx-auto"
              >
                <span className="text-[12px]">Services</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Submenu */}
              {mobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-2   pl-4">
                  <Link
                    href="/services/eem"
                    className="block  text-gray-600 dark:text-gray-300 hover:text-blue-500 text-[12px] nav-item my-2"
                  >
                    Amazon Account Managemen
                  </Link>
                  <Link
                    href="/services/ppc"
                    className="block  text-gray-600 dark:text-gray-300 hover:text-blue-500 text-[12px] nav-item my-2"
                  >
                    Advertising & PPC Management
                  </Link>
                  <Link
                    href="/services/cbm"
                    className="block  text-gray-600 dark:text-gray-300 hover:text-blue-500 text-[12px] nav-item my-2"
                  >
                    Creative & Branding Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/testimonials"
              className="block  font-medium text-gray-700 dark:text-white hover:text-blue-500 text-[12px] nav-item my-2"
            >
              Testimonials
            </Link>

            <Link
              href="/contact"
              className="block  font-medium text-gray-700 dark:text-white hover:text-blue-500 text-[12px] nav-item"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
