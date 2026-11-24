
"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContentData } from "@/data";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="home" className="relative isolate flex min-h-[580px] w-full items-center justify-center overflow-hidden bg-[#f5f8f5] px-4 sm:px-6 md:min-h-[620px] lg:min-h-[680px] py-12 sm:py-16 lg:py-16">


      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">


        <div className="absolute left-1/2 top-1/2 h-[450px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9eadb]/30 blur-[110px]" />

        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(224,235,225,0.25)_100%)]" />


        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full border border-[#23843b]/[0.06]" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-[#23843b]/[0.06]" />

      </div>


      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center text-center">


        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -15 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pointer-events-none absolute -left-2 top-[-5px] hidden sm:block md:left-2 md:top-[-15px] lg:left-5 lg:top-[-5px]"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={heroContentData.images.shield.src}
              alt={heroContentData.images.shield.alt}
              width={heroContentData.images.shield.width}
              height={heroContentData.images.shield.height}
              priority
              className="h-auto w-[75px] object-contain md:w-[95px] lg:w-[115px]"
            />
          </motion.div>
        </motion.div>


        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-7 flex items-center justify-center gap-4 sm:gap-5 md:mb-8"
        >
          <span className="hidden h-px w-12 bg-[#39864f] sm:block md:w-16" />

          <div className="rounded-full border border-[#39864f] bg-white/70 px-5 py-2.5 shadow-[0_3px_12px_rgba(0,0,0,0.025)] backdrop-blur-sm sm:px-7 sm:py-3">
            <p className="whitespace-nowrap text-[13px] font-bold tracking-[-0.3px] text-[#09291d] sm:text-base md:text-[19px]">
              {heroContentData.badge.map((item, index) => (
                <span key={item}>
                  {index > 0 && (
                    <span className="mx-1 text-[#3c8a50]">
                      {heroContentData.badgeSeparator}
                    </span>
                  )}
                  {item}
                </span>
              ))}
            </p>
          </div>

          <span className="hidden h-px w-12 bg-[#39864f] sm:block md:w-16" />
        </motion.div>


        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="relative z-10 w-full"
        >
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-[1250px] text-[27px] font-extrabold leading-[1.15] tracking-[-1.8px] text-[#071e1a] sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px]"
          >
            {heroContentData.heading}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-2 max-w-[1300px] text-[27px] font-extrabold leading-[1.17] tracking-[-1.5px] text-[#248536] sm:text-5xl md:text-6xl lg:text-[65px] xl:text-[68px]"
          >
            {heroContentData.highlight}
          </motion.h2>
        </motion.div>


        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="relative z-10 mx-auto mt-6 max-w-[900px] text-[15px] font-medium leading-[1.65] text-[#344b4d] sm:text-lg md:mt-7 md:text-xl lg:text-[22px]"
        >
          {heroContentData.descriptionLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br className="hidden md:block" />}
              {line}
            </Fragment>
          ))}
        </motion.p>


        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.5 },
            },
          }}
          className="relative z-10 mt-9 flex w-full flex-col items-center justify-center gap-4 sm:mt-11 sm:w-auto sm:flex-row sm:gap-6"
        >

          {heroContentData.buttons.map((button, index) => (
            <motion.div
              key={button.label}
              variants={fadeUp}
              whileHover={reduceMotion ? {} : { y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={button.href}
                className={`group flex min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold transition-all duration-300 sm:text-lg ${
                  index === 0
                    ? "border border-[#075b37] bg-gradient-to-r from-[#087344] to-[#034b31] text-white shadow-[0_8px_20px_rgba(0,75,44,0.16)] hover:shadow-[0_12px_28px_rgba(0,75,44,0.28)] sm:min-w-[270px]"
                    : "border border-[#398a50] bg-white/80 text-[#082d20] shadow-[0_5px_15px_rgba(0,0,0,0.035)] backdrop-blur-sm hover:border-[#087344] hover:bg-[#f0f8f1] hover:shadow-[0_10px_25px_rgba(0,75,44,0.10)] sm:min-w-[248px]"
                }`}
              >
                {button.label}
                <ArrowRight
                  size={21}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </motion.div>
          ))}

        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: -50, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="pointer-events-none absolute -bottom-12 left-0 hidden sm:block md:bottom-[-30px] md:left-3 lg:left-10"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={heroContentData.images.coins.src}
              alt={heroContentData.images.coins.alt}
              width={heroContentData.images.coins.width}
              height={heroContentData.images.coins.height}
              className="h-auto w-[100px] object-contain md:w-[125px] lg:w-[155px]"
            />
          </motion.div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="pointer-events-none absolute -bottom-12 right-0 hidden sm:block md:bottom-[-30px] md:right-3 lg:right-10"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={heroContentData.images.growth.src}
              alt={heroContentData.images.growth.alt}
              width={heroContentData.images.growth.width}
              height={heroContentData.images.growth.height}
              className="h-auto w-[100px] object-contain md:w-[130px] lg:w-[155px]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
