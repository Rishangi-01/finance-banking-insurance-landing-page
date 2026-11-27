"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, ArrowRight, Menu, X } from "lucide-react";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { AnimatePresence, motion } from "framer-motion";
import { finSecureBrandData, navbarContentData } from "@/data";

const socialIconMap = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  youtube: FaYoutube,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(
    navbarContentData.navLinks[0].name,
  );

  useEffect(() => {
  const sections = navbarContentData.navLinks
  .map((link) => {
    const hash = link.href.split("#")[1];

    const id = hash
      ? decodeURIComponent(hash)
      : link.name.toLowerCase() === "home"
        ? "home"
        : null;

    if (!id) return null;

    return {
      name: link.name,
      element: document.getElementById(id),
    };
  })
    .filter(
      (item): item is {
        name: string;
        element: HTMLElement;
      } => item !== null && item.element !== null,
    );

  if (!sections.length) return;

  const updateActiveSection = () => {
    const navElement = document.querySelector("nav");

    // Account for the sticky navbar height
    const navHeight = navElement?.getBoundingClientRect().height ?? 100;

    const activationPoint = navHeight + 30;

    // At the top of the page, Home should always be active
    if (window.scrollY <= 10) {
      setActiveLink(sections[0].name);
      return;
    }

    // Find the last section that has reached the activation point
    let currentSection = sections[0];

    for (const section of sections) {
      const rect = section.element.getBoundingClientRect();

      if (rect.top <= activationPoint) {
        currentSection = section;
      } else {
        break;
      }
    }

    setActiveLink(currentSection.name);
  };

  // Run immediately on page load
  updateActiveSection();

  // Update while scrolling
  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });

  window.addEventListener("resize", updateActiveSection);

  return () => {
    window.removeEventListener("scroll", updateActiveSection);
    window.removeEventListener("resize", updateActiveSection);
  };
}, []);

  return (
    <header className="sticky top-0 z-[100] w-full bg-white">
      {/* TOP INFORMATION BAR */}
      <div className="bg-[#062442] text-white hidden lg:block">
        <div className="mx-auto flex min-h-[50px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Contact Information */}
          <div className="flex items-center gap-4 md:gap-5">
            <div className="flex items-center gap-2 text-[13px] font-medium sm:text-sm">
              <MapPin size={19} className="shrink-0" />
              <span>{navbarContentData.location}</span>
            </div>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <a
              href={navbarContentData.phoneHref}
              className="hidden items-center gap-2 text-[13px] transition-colors hover:text-[#80c342] sm:flex sm:text-sm"
            >
              <Phone size={17} />
              <span>{navbarContentData.phone}</span>
            </a>

            <span className="hidden h-5 w-px bg-white/40 md:block" />

            <a
              href={navbarContentData.emailHref}
              className="hidden items-center gap-2 text-[13px] transition-colors hover:text-[#80c342] md:flex md:text-sm"
            >
              <Mail size={19} />
              <span>{navbarContentData.email}</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 sm:gap-5">
            {navbarContentData.socialLinks.map((social) => {
              const Icon = Object.entries(socialIconMap).find(
                ([name]) => name === social.icon,
              )?.[1];

              if (!Icon) {
                throw new Error(`Unknown navbar social icon: ${social.icon}`);
              }

              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="social-icon"
                >
                  <Icon size={social.size} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-[100] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex h-[63px] max-w-[1440px] items-center justify-between px-3 sm:px-8 lg:h-[100px] lg:px-10">
          <Link
            href={navbarContentData.navLinks[0].href}
            className="group relative flex shrink-0 items-center"
            onClick={() => {
              setActiveLink(navbarContentData.navLinks[0].name);
              setMenuOpen(false);
            }}
          >
            <Image
              src={finSecureBrandData.logo}
              alt={finSecureBrandData.logoAlt}
              width={280}
              height={75}
              priority
              className="h-auto w-[190px] object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:w-[220px] lg:w-[280px]"
            />
          </Link>

          <div className="hidden items-center gap-6 xl:flex 2xl:gap-7">
            {navbarContentData.navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`group relative whitespace-nowrap py-3 text-[15px] font-bold tracking-[-0.3px] transition-colors duration-300 2xl:text-[16px]
                    ${
                      activeLink === link.name
                        ? "text-[#339b13]"
                        : "text-[#071c3d] hover:text-[#339b13]"
                    }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#339b13] transition-all duration-300 ${
                      activeLink === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <Link
            href={navbarContentData.contactHref}
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-[#0a2440] bg-[#319b12] px-5 py-3.5 text-[15px] font-bold text-white shadow-[0_5px_12px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#267e0d] hover:shadow-[0_8px_20px_rgba(49,155,18,0.25)] xl:flex 2xl:px-6"
          >
            <Phone
              size={19}
              fill="white"
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            <span>{navbarContentData.contactLabel}</span>

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? navbarContentData.closeMenuLabel
                : navbarContentData.openMenuLabel
            }
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#062442] text-white transition-all duration-300 hover:bg-[#319b12] xl:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute left-0 top-full w-full overflow-hidden border-t border-gray-100 bg-white shadow-xl xl:hidden"
            >
              <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8">
                <div className="flex flex-col">
                  {navbarContentData.navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.name);
                          setMenuOpen(false);
                        }}
                        className={`group flex items-center justify-between border-b border-gray-100 py-3.5 text-[15px] font-bold transition-colors duration-300 ${
                          activeLink === link.name
                            ? "text-[#319b12]"
                            : "text-[#071c3d] hover:text-[#319b12]"
                        }`}
                      >
                        <span>{link.name}</span>

                        <ArrowRight
                          size={17}
                          className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href={navbarContentData.contactHref}
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#319b12] px-5 py-3.5 font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#267e0d]"
                >
                  <Phone size={18} />
                  {navbarContentData.contactLabel}
                  <ArrowRight size={18} />
                </Link>

                <div className="mt-5 flex flex-col gap-3 text-sm text-[#062442]">
                  <a
                    href={navbarContentData.phoneHref}
                    className="flex items-center gap-2"
                  >
                    <Phone size={16} className="text-[#319b12]" />
                    {navbarContentData.phone}
                  </a>

                  <a
                    href={navbarContentData.emailHref}
                    className="flex items-center gap-2"
                  >
                    <Mail size={17} className="text-[#319b12]" />
                    {navbarContentData.email}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
