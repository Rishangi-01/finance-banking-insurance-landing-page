"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Landmark,
  ShieldCheck,
  TrendingUp,
  HandCoins,
  ArrowRight,
} from "lucide-react";
import { aboutContentData } from "@/data";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -45 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" as const },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : 45 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#e7f4e9]/40 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#e5f3e9]/40 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-6 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:px-10 xl:gap-6">
       

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative z-10 flex flex-col items-start"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#26964d] bg-white px-5 py-2.5 shadow-[0_3px_12px_rgba(0,0,0,0.03)]"
          >
            <Landmark size={23} className="text-[#086333]" strokeWidth={2.8} />

            <span className="text-[15px] font-bold text-[#092d20] sm:text-lg">
              {aboutContentData.badge}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="max-w-[730px] text-[27px] font-extrabold leading-[1.15] tracking-[-1.7px] text-[#09251e] sm:text-5xl md:text-[54px] lg:text-[46px] xl:text-[53px] 2xl:text-[58px]"
          >
            {aboutContentData.heading}{" "}
            <span className="text-[#218239]">
              {aboutContentData.highlight}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[690px] text-[15px] font-medium leading-[1.8] text-[#172438] sm:text-base md:text-lg"
          >
            {aboutContentData.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            whileHover={
              reduceMotion ? {} : { y: -5, transition: { duration: 0.3 } }
            }
            className="mt-9 w-full rounded-[22px] border border-[#e1ebe5] bg-white p-3 shadow-[0_5px_22px_rgba(10,65,39,0.09)] sm:p-4"
          >
            <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[0.95fr_1.05fr] sm:gap-5">
              <div className="group relative h-[220px] overflow-hidden rounded-[17px] sm:h-[190px] lg:h-[190px] xl:h-[200px]">
                <Image
                  src={aboutContentData.images.consultation.src}
                  alt={aboutContentData.images.consultation.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062d20]/15 to-transparent" />
              </div>

              <div className="flex flex-col justify-center px-1 pb-3 sm:py-2 sm:pr-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-xl bg-[#d8f5e5] text-[#08723c] sm:h-[62px] sm:w-[62px]">
                    <ShieldCheck size={40} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-xl font-extrabold tracking-[-0.8px] text-[#092d20] sm:text-[23px]">
                    {aboutContentData.commitment.title}
                  </h3>
                </div>

                <div className="my-4 h-px w-full bg-gradient-to-r from-[#8b9d94] to-transparent" />

                <p className="text-[15px] font-medium leading-[1.7] text-[#14243a] sm:text-base">
                  {aboutContentData.commitment.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto h-[520px] w-full max-w-[650px] sm:h-[610px] lg:h-[590px] xl:h-[650px]"
        >
          <motion.div
            variants={fadeRight}
            className="absolute bottom-0 left-[3%] z-10 h-[70%] w-[100%] overflow-hidden rounded-[30px] border border-white shadow-[0_12px_35px_rgba(0,0,0,0.10)] sm:left-[4%] sm:w-[87%] lg:h-[87%]"
          >
            <Image
              src={aboutContentData.images.main.src}
              alt={aboutContentData.images.main.alt}
              fill
              priority
              sizes="(max-width: 768px) 85vw, 500px"
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#052f21]/10 to-transparent" />
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="absolute right-0 top-0 z-20 h-[41%] w-[61%] overflow-hidden rounded-[27px] border-[4px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:h-[42%] sm:w-[51%]"
          >
            <Image
              src={aboutContentData.images.team.src}
              alt={aboutContentData.images.team.alt}
              fill
              sizes="(max-width: 768px) 50vw, 320px"
              className="object-cover object-center transition-transform duration-700 hover:scale-110"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-0 left-[3%] z-30 flex h-[200px] w-[150px] flex-col items-center justify-center rounded-t-[25px] border-[4px] border-white bg-gradient-to-b from-[#075e3a] to-[#003d2a] px-3 text-center text-white shadow-[0_10px_25px_rgba(0,0,0,0.16)] sm:left-[4%] sm:h-[215px] sm:w-[180px]"
          >
            <div className="relative mb-1 flex items-center justify-center text-[#ffcb54]">
              <Image
                src={aboutContentData.images.experience.src}
                alt={aboutContentData.images.experience.alt}
                width={aboutContentData.images.experience.width}
                height={aboutContentData.images.experience.height}
                className="h-auto w-[100px] object-contain md:w-[130px] lg:w-[85px]"
              />
            </div>

            <div className="text-[48px] font-extrabold leading-none tracking-tight text-[#ffbd42] sm:text-[56px]">
              {aboutContentData.experience.value}
            </div>

            <p className="mt-2 text-lg font-extrabold leading-tight sm:text-xl">
              {aboutContentData.experience.lines.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>

            <div className="mt-3 h-1 w-12 rounded-full bg-[#e9b84c]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.7 }}
            whileHover={reduceMotion ? {} : { scale: 1.08, rotate: 5 }}
            className="absolute right-[-1%] top-[62%] z-40 flex h-[125px] w-[125px] items-center justify-center rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] sm:right-[-1%] sm:h-[145px] sm:w-[145px] lg:h-[135px] lg:w-[135px] xl:h-[150px] xl:w-[150px]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full">
              <Image
                src={aboutContentData.images.growth.src}
                alt={aboutContentData.images.growth.alt}
                width={aboutContentData.images.growth.width}
                height={aboutContentData.images.growth.height}
                className="h-auto w-[100px] object-contain md:w-[130px] lg:w-[155px]"
              />
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[3%] top-[48%] z-0 h-20 w-20 rounded-full bg-[#dff2e3]/60 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
