"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { Star, CircleCheck, Trophy } from "lucide-react";
import { whyChooseUsContentData } from "@/data";

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(
    whyChooseUsContentData.tabs[0].id,
  );
  const reduceMotion = useReducedMotion();

  const currentTab =
    whyChooseUsContentData.tabs.find((tab) => tab.id === activeTab) ??
    whyChooseUsContentData.tabs[0];

  return (
    <section
      id="why-choose-us"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-16"
    >
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#e6f5eb]/50 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#e4f3e9]/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 lg:px-10 xl:gap-12">
   

        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col"
        >
        
          <motion.div
            whileHover={reduceMotion ? {} : { y: -3 }}
            className="mb-6 flex w-fit items-center gap-2.5 rounded-full border border-[#258548] bg-white px-4 py-2.5 shadow-[0_3px_12px_rgba(0,0,0,0.04)] sm:px-5"
          >
            <Star
              size={25}
              fill="#e9b43e"
              stroke="#e9b43e"
              className="shrink-0"
            />

            <span className="text-[16px] font-bold text-[#092b20] sm:text-lg">
              {whyChooseUsContentData.badge}
            </span>
          </motion.div>

        
          <h2 className="max-w-[700px] text-[24px] font-extrabold leading-[1.16] tracking-[-1.7px] text-[#09251e] sm:text-5xl md:text-[53px] lg:text-[41x] xl:text-[50px]">
            {whyChooseUsContentData.heading}
            <span className="block">
              {whyChooseUsContentData.headingMiddle}{" "}
              <span className="text-[#21843e]">
                {whyChooseUsContentData.highlight}
              </span>
            </span>
          </h2>

        
          <div
            role="tablist"
            aria-label={whyChooseUsContentData.tablistLabel}
            className="mt-5 grid w-full grid-cols-3 overflow-hidden rounded-[10px] border border-[#d6e8de] bg-[#eff7f3] shadow-[0_3px_12px_rgba(0,0,0,0.025)]"
          >
            {whyChooseUsContentData.tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="why-tab-panel"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex min-h-[54px] items-center justify-center px-1 py-3 text-[13px] font-bold transition-all duration-300 sm:text-base md:text-lg ${
                    isActive
                      ? "bg-[#006039] text-white shadow-md"
                      : "text-[#0a211b] border border-[#d6e8de] hover:bg-[#e0f0e6]"
                  }`}
                >
                  {tab.label}

              
                  {isActive && (
                    <motion.span
                      layoutId="active-tab-pointer"
                      className="absolute -bottom-[9px] left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-[#006039]"
                    />
                  )}
                </button>
              );
            })}
          </div>

        
          <div
            id="why-tab-panel"
            role="tabpanel"
            aria-labelledby={`tab-${currentTab.id}`}
            className="mt-5 min-h-[115px]"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTab.id}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : -10,
                }}
                transition={{ duration: 0.35 }}
                className="text-[15px] font-medium leading-[1.85] text-[#4b4d52] sm:text-base md:text-lg"
              >
                {currentTab.description}
              </motion.p>
            </AnimatePresence>
          </div>

         
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="contents"
              >
                {currentTab.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: reduceMotion ? 0 : index * 0.08,
                    }}
                    whileHover={reduceMotion ? {} : { y: -4, scale: 1.015 }}
                    className="group flex min-h-[63px] items-center gap-3 rounded-[15px] bg-[#edf6f1] px-4 py-3 transition-all duration-300 hover:bg-[#e1f1e7] hover:shadow-[0_6px_18px_rgba(0,80,45,0.08)] sm:px-5"
                  >
                    <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[#08733e] transition-all duration-300 group-hover:bg-[#08733e] group-hover:text-white">
                      <CircleCheck size={36} strokeWidth={2.2} />
                    </div>

                    <span className="text-[15px] font-bold tracking-[-0.4px] text-[#09251e] sm:text-base lg:text-[17px]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto h-[470px] w-full max-w-[650px] sm:h-[570px] lg:h-[590px] xl:h-[620px]"
        >
       
          <div className="absolute -right-1 top-1 lg:-top-5 h-[44%] w-[57%] lg:w-[37%] rounded-[30px] bg-[#005535] sm:-right-5 sm:-top-4" />

        
          <div className="group absolute inset-x-0 bottom-0 top-[3%] z-10 overflow-hidden rounded-[28px] border-[3px] border-white shadow-[0_12px_35px_rgba(0,0,0,0.13)] sm:inset-x-1 sm:top-[3%]">
            <Image
              src={whyChooseUsContentData.image.src}
              alt={whyChooseUsContentData.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#001e17]/20 via-transparent to-transparent" />
          </div>

        
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 45,
              scale: reduceMotion ? 1 : 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            whileHover={reduceMotion ? {} : { y: -7, scale: 1.02 }}
            className="absolute bottom-5 left-4 z-20 flex w-[265px] flex-col items-center overflow-hidden rounded-[30px] border-[2px] border-[#e5b747] bg-gradient-to-br from-[#07583b] via-[#00432f] to-[#003323] px-5 py-5 text-center text-white shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:bottom-6 sm:left-7 sm:w-[330px] sm:rounded-[34px] sm:px-7 sm:py-6 lg:bottom-6 lg:left-7 xl:bottom-7 xl:left-7"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f9bd45]/10 blur-3xl" />

           
            <div className="relative flex items-center justify-center">
              <Image
                src={whyChooseUsContentData.award.image.src}
                alt={whyChooseUsContentData.award.image.alt}
                width={whyChooseUsContentData.award.image.width}
                height={whyChooseUsContentData.award.image.height}
                className="h-auto w-[100px] object-contain md:w-[130px] lg:w-[176px]"
              />
            </div>

            {/* DECORATIVE DIVIDER */}
            {/* <div className="my-2 flex w-full items-center justify-center gap-2">
              <span className="h-px w-12 bg-[#d9b54e]/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#d9b54e]" />
              <span className="h-px w-12 bg-[#d9b54e]/80" />
            </div> */}

           
            <h3 className="relative text-[21px] font-extrabold leading-[1.25] tracking-[-0.5px] sm:text-[27px]">
              {whyChooseUsContentData.award.headingLines.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h3>

         
            <div className="mt-5 h-[5px] w-[100px] rounded-full bg-gradient-to-r from-[#e6a92a] via-[#ffd66a] to-[#e6a92a] sm:w-[125px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
