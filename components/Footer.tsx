"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Award,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import { finSecureBrandData, footerContentData } from "@/data";

const socialIconMap = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
  x: FaXTwitter,
};

const contactIconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        variants: itemVariants,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <footer className="relative overflow-hidden bg-[#002d27] text-white">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-4 lg:px-10">
        {/* ================= CTA HEADING ================= */}

        <motion.div
          {...animationProps}
          className="border-b border-white/40 py-10 sm:py-12 lg:py-14"
        >
          <h2 className="font-serif text-[32px] font-semibold leading-[1.15] tracking-[-0.8px] sm:text-4xl md:text-5xl lg:text-[48px]">
            {footerContentData.ctaHeading.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
                {index === footerContentData.ctaHeading.length - 1 && " "}
              </span>
            ))}
            <span className="italic text-[#f2bd36]">
              {footerContentData.ctaHighlight}
            </span>
          </h2>
        </motion.div>

        {/* ================= FOOTER CONTENT ================= */}

        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid grid-cols-2 gap-8 py-10
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.85fr_0.85fr_1.05fr_0.65fr]
            lg:gap-0 lg:py-10
          "
        >
          {/* BRAND COLUMN */}

          <motion.div
            variants={itemVariants}
            className="
              flex flex-col col-span-2 lg:col-span-1
              lg:border-r lg:border-white/40 lg:pr-7
            "
          >
            {/* Logo */}
            <Link
              href={footerContentData.brandLinkHref}
              aria-label={footerContentData.brandLinkLabel}
              className="group mb-5 inline-flex w-fit items-center gap-3"
            >
              <Image
                src={finSecureBrandData.footerLogo}
                alt={finSecureBrandData.footerLogoAlt}
                width={280}
                height={75}
                priority
                className="h-auto w-[190px] object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:w-[220px] lg:w-[280px]"
              />
            </Link>

            <p className="max-w-[310px] text-[15px] leading-[1.55] text-white/85">
              {footerContentData.description}
            </p>

            {/* Social Links */}

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {footerContentData.socialLinks.map((social) => {
                const Icon = Object.entries(socialIconMap).find(
                  ([name]) => name === social.icon,
                )?.[1];

                if (!Icon) {
                  throw new Error(`Unknown footer social icon: ${social.icon}`);
                }

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={
                      shouldReduceMotion ? undefined : { y: -5, scale: 1.1 }
                    }
                    whileTap={{ scale: 0.92 }}
                    className="
                      flex h-[35px] w-[35px] items-center justify-center
                      rounded-full border border-[#eab52c]
                      text-[#f3c33d]
                      transition-all duration-300
                      hover:bg-[#eab52c] hover:text-[#002d27]
                      hover:shadow-[0_0_18px_rgba(234,181,44,0.35)]
                    "
                  >
                    <Icon size={18} strokeWidth={2} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* QUICK LINKS */}

          <motion.div
            variants={itemVariants}
            className="
              lg:border-r lg:border-white/40
              lg:px-7
            "
          >
            <FooterHeading title={footerContentData.quickLinksHeading} />

            <ul className="mt-5 space-y-3">
              {footerContentData.quickLinks.map((link) => (
                <FooterLink key={link.name} name={link.name} href={link.href} />
              ))}
            </ul>
          </motion.div>

          {/* TEAM LINKS */}

          <motion.div
            variants={itemVariants}
            className="
              lg:border-r lg:border-white/40
              lg:px-7
            "
          >
            <FooterHeading title={footerContentData.teamLinksHeading} />

            <ul className="mt-5 space-y-3">
              {footerContentData.teamLinks.map((link) => (
                <FooterLink key={link.name} name={link.name} href={link.href} />
              ))}
            </ul>
          </motion.div>

          {/* CONTACT DETAILS */}

          <motion.div
            variants={itemVariants}
            className="
              lg:border-r lg:border-white/40
              lg:px-7 col-span-2 lg:col-span-1
            "
          >
            <FooterHeading title={footerContentData.contactHeading} />

            <ul className="mt-5 space-y-4">
              {footerContentData.contactDetails.map((item) => {
                const Icon = Object.entries(contactIconMap).find(
                  ([name]) => name === item.icon,
                )?.[1];

                if (!Icon) {
                  throw new Error(`Unknown footer contact icon: ${item.icon}`);
                }

                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      target={item.icon === "location" ? "_blank" : undefined}
                      rel={item.icon === "location" ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-[13px] lg:text-[15px] text-white/90 transition-colors hover:text-[#f3c33d]"
                    >
                      <span
                        className="
                          flex h-9 w-9 shrink-0 items-center
                          justify-center rounded-[9px]
                          border border-[#eab52c]
                          text-[#f2bd36]
                          transition-all duration-300
                          group-hover:bg-[#eab52c]
                          group-hover:text-[#002d27]
                          group-hover:shadow-[0_0_15px_rgba(234,181,44,0.25)]
                        "
                      >
                        <Icon size={19} strokeWidth={2} />
                      </span>

                      <span className="break-words">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* EXCELLENCE BADGE */}

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:pl-7"
          >
            <motion.div
              whileHover={
                shouldReduceMotion ? undefined : { scale: 1.06, rotate: 2 }
              }
              className="
                relative flex h-[155px] w-[155px]
                flex-col items-center justify-center
                rounded-full
                text-center
                shadow-[0_0_25px_rgba(234,181,44,0.10)]
                transition-shadow duration-500
                hover:shadow-[0_0_35px_rgba(234,181,44,0.25)]
              "
            >
              <Image
                src={footerContentData.excellenceImage.src}
                alt={footerContentData.excellenceImage.alt}
                width={footerContentData.excellenceImage.width}
                height={footerContentData.excellenceImage.height}
                className="h-auto w-[100%] object-contain md:w-[130px] lg:w-[100%]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= COPYRIGHT ================= */}

        <motion.div
          {...animationProps}
          className="
            flex flex-col items-center justify-between gap-3
            border-t border-white/50 py-5
            text-center sm:flex-row sm:text-left
          "
        >
          <p className="text-sm text-white/90 sm:text-base">
            {footerContentData.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function FooterHeading({ title }: { title: string }) {
  return (
    <div>
      <h3 className="w-fit text-xl font-semibold tracking-tight text-white">
        {title}
      </h3>

      <div className="mt-2.5 h-[3px] w-12 rounded-full bg-[#eab52c]" />
    </div>
  );
}

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="
          group flex w-fit items-center gap-2
          text-[13px] lg:text-[15px] text-white/85
          transition-all duration-300
          hover:translate-x-1 hover:text-[#f2bd36]
        "
      >
        <ChevronRight
          size={17}
          strokeWidth={3}
          className="shrink-0 text-[#eab52c] transition-transform duration-300 group-hover:translate-x-1"
        />

        <span>{name}</span>

        <ArrowUpRight
          size={13}
          className="opacity-0 transition-all duration-300 group-hover:opacity-100"
        />
      </Link>
    </li>
  );
}
