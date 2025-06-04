"use client";

// import Link from "next/link";
// import { useEffect,  useState } from "react";
// import { AlignJustify, Moon, Sun, X } from "@deemlol/next-icons";
// import Image from "next/image";
// import { useTheme } from "next-themes";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   useEffect(() => {
//     setMounted(true); // ensures theme is loaded
//   }, []);
//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const navClasses = theme === "light" ? "  text-black" : " text-white";
//   if (!mounted) return null; // or a loading skeleton/spinner

//   return (
//     <nav suppressHydrationWarning={true}
//       className={`fixed top-0 w-full z-50 shadow-md transition ${navClasses || ''}`}
//     >
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center text-[12px]">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold">
//           <Image
//             src={theme === "light" ? "./logo-dark.png" : "./logo-light.png"}
//             width={160} // Base width (desktop)
//             height={50}
//             className="w-45 sm:w-45 md:w-45 h-auto object-contain"
//             priority
//             alt="logo"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <div className="flex justify-end gap-4">

//         <div className="hidden lg:flex items-center gap-6">
//           <Link href="/" className="hover:text-blue-500 nav-link">
//             Home
//           </Link>
//           <Link href="/about" className="hover:text-blue-500 nav-link">
//             About
//           </Link>

//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="hover:text-blue-500 focus:outline-none nav-link"
//             >
//               Services
//             </button>
//             {dropdownOpen && (
//               <div
//                 className={`absolute top-8 left-0 rounded shadow-md w-70 z-10 ${
//                   theme === "dark"
//                     ? "bg-black text-white shadow-white"
//                     : "bg-white text-black shadow-black"
//                 }`}
//               >
//                 <Link
//                   href="/services/aam"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Amazon Account Management
//                 </Link>
//                 <Link
//                   href="/services/ppc"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   PPC Management
//                 </Link>
//                 <Link
//                   href="/services/bm"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Brand Management
//                 </Link>
//               </div>
//             )}
//           </div>

//           <Link href="/testimonials" className="hover:text-blue-500 nav-link">
//             Testimonials
//           </Link>
//           <Link href="/contact" className="hover:text-blue-500 nav-link">
//             Contact
//           </Link>
//           <Link
//             href="/calender"
//             className={`btn ${
//               theme === "light" ? "Nav-btn-light" : "Nav-btn-dark"
//             }`}
//           >
//             Want a Free Audit?
//           </Link>

//         </div>
//         <div className="flex items-center gap-4">
//           <button className="lg:hidden text-xl" onClick={toggleMenu}>
//             {menuOpen ? <X /> : <AlignJustify />}
//           </button>
//           <button onClick={toggleTheme} className="ml-2">
//             {theme === "light" ? <Sun /> : <Moon />}
//           </button>

//           {/* Mobile Menu Toggle */}
//         </div>
//         </div>
//       </div>

//         {/* Theme toggle (moved out of mobile menu) */}

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <div className={`lg:hidden px-4 pb-4 space-y-2 ${navClasses}`}>
//           <Link href="/" className="block hover:text-blue-500">
//             Home
//           </Link>
//           <Link href="/about" className="block hover:text-blue-500">
//             About
//           </Link>

//           <details className="block">
//             <summary className="cursor-pointer hover:text-blue-500">
//               Services
//             </summary>
//             <div className="ml-4 mt-2 space-y-1">
//               <Link href="/services/aam" className="block">
//                 Amazon Account Management
//               </Link>
//               <Link href="/services/ppc" className="block">
//                 PPC Management
//               </Link>
//               <Link href="/services/bm" className="block">
//                 Brand Management
//               </Link>
//             </div>
//           </details>

//           <Link href="/testimonials" className="block hover:text-blue-500">
//             Testimonials
//           </Link>
//           <Link href="/contact" className="block hover:text-blue-500">
//             Contact
//           </Link>
//           <Link
//             href="/calender"
//             className={`btn ${
//               theme === "light" ? "Nav-btn-light" : "Nav-btn-dark"
//             }`}
//           >
//             Want a Free Audit?
//           </Link>
//         </div>
//       )}
//     </nav>

//   );
// }
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, AlignJustify, X } from "@deemlol/next-icons";
import { useTheme } from "next-themes";
import gsap from "gsap";
import NewsTicker from "./NavBarTicker";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navClasses, setNavClasses] = useState("");
  const [hasMounted, setHasMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  if (!hasMounted) return null;
  return (
    <>
      <NewsTicker />

      <nav
        suppressHydrationWarning={true}
        className={`fixed top-0 w-full z-50 shadow-md transition navbar navbar-expand-lg change ${
          theme === "light" ? "light" : ""
        } ${navClasses}`}
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

              {/* <div className="relative nav-item dropdown">
                <button
                  onClick={toggleDropdown}
                  className="hover:text-blue-500 focus:outline-none nav-link dropdown-toggle "
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Services {dropdownOpen}
                </button>
                {dropdownOpen && (
                  <div
                    className={`dropdown-menu absolute top-8 left-0 rounded shadow-md w-70 z-10 ${
                      theme === "dark"
                        ? "bg-black text-white shadow-white"
                        : "bg-white text-black shadow-black"
                    }`}
                  >
                    <Link
                      href="/services/aam"
                      className="block px-4 py-2 hover:bg-gray-200 nav-link dropdown-item"
                    >
                      Amazon Account Management
                    </Link>
                    <Link
                      href="/services/ppc"
                      className="block px-4 py-2 hover:bg-gray-200 nav-link dropdown-item"
                    >
                      PPC Management
                    </Link>
                    <Link
                      href="/services/bm"
                      className="block px-4 py-2 hover:bg-gray-200 nav-link dropdown-item"
                    >
                      Brand Management
                    </Link>
                  </div>
                )}
              </div> */}
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
          theme === "dark" ? "bg-[#1b1d21] text-white" : "bg-white text-black"
        }`}
                >
                  <Link
                    href="/services/eem"
                    className="dropdown-item block px-6 py-3 relative hover:pl-10 transition-all duration-300"
                  >
                      	End-to-End Account Management
                  </Link>
                  <Link
                    href="/services/ppc"
                    className="dropdown-item block px-6 py-3 relative hover:pl-10 transition-all duration-300"
                  >
                  Advertising & PPC Management
                  </Link>
                  <Link
                    href="/services/cbm"
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
                  {menuOpen ? <X /> : <AlignJustify />}
                </button>
                <button ref={buttonRef} onClick={toggleTheme} className="ml-2">
                  {theme === "light" ? <Sun /> : <Moon />}
                </button>
              </div>
            </div>
          </div>
        </div>

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
                <Link href="/services/eem" className="block">
                  	End-to-End Account Management
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
            {/* <Link
              href="/calender"
              className={`btn ${
                theme === "light" ? "Nav-btn-light" : "Nav-btn-dark"
              }`}
            >
              Want a Free Audit?
            </Link> */}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
