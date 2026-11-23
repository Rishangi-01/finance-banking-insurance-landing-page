
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  MessageCircle,
  Plus,
  Minus,
  Headset,
  Phone,
} from "lucide-react";
import { faqContentData } from "@/data";

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(
    faqContentData.items[0]?.id ?? null,
  );

  const reduceMotion = useReducedMotion();

  const toggleFaq = (id: number) => {
    setActiveFaq((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="relative w-full overflow-hidden bg-[#f2f8f4] py-12 sm:py-16 lg:py-16"
    >

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#d9eee1]/50 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#e2f2e8]/60 blur-[110px]" />

      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-7 lg:px-9">

        {/* ================================== */}
        {/* SECTION HEADER */}
        {/* ================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-11"
        >

          {/* FAQ BADGE */}
          <div className="group flex items-center gap-3">

            <span className="hidden h-[2px] w-14 bg-[#e9a928] sm:block" />

            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#075b37] bg-white px-5 py-2 shadow-[0_3px_12px_rgba(0,60,35,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <MessageCircle
                size={23}
                fill="#075b37"
                stroke="white"
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-[16px] font-extrabold text-[#073e2d] sm:text-lg">
                {faqContentData.badge}
              </span>

            </div>

            <span className="hidden h-[2px] w-14 bg-[#e9a928] sm:block" />

          </div>

          {/* MAIN HEADING */}
          <h2 className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-1.3px] text-[#06462f] sm:text-[42px] md:text-[46px] lg:text-[48px]">

            {faqContentData.heading}{" "}
            <span className="text-[#dda426]">
              {faqContentData.highlight}
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-2 max-w-[850px] text-[13px] font-medium leading-relaxed text-[#343d43] sm:text-base md:text-[17px]">
            {faqContentData.description}
          </p>

        </motion.div>

        {/* ================================== */}
        {/* MAIN TWO COLUMN LAYOUT */}
        {/* ================================== */}

        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-6 xl:gap-7">

          {/* ================================== */}
          {/* LEFT IMAGE AND CONTACT CARD */}
          {/* ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
            }}
            className="relative min-h-[420px] overflow-hidden rounded-[20px] sm:min-h-[470px] lg:min-h-[100%] lg:h-[440px] xl:h-[465px]"
          >

            {/* MAIN IMAGE */}
            <Image
              src={faqContentData.image.src}
              alt={faqContentData.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-1000 hover:scale-[1.04]"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002f25]/35 via-transparent to-transparent" />

            {/* FLOATING CONTACT CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="absolute bottom-4 left-4 right-4 z-10 rounded-[19px] border border-white/80 bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.14)] sm:bottom-5 sm:left-7 sm:right-auto sm:w-[min(78%,340px)] sm:p-6"
            >

              {/* AVATAR STACK */}
              <div className="mb-3 flex items-center pl-1">

                {faqContentData.teamAvatars.map((avatar, index) => (
                  <div
                    key={avatar}
                    className={`relative -ml-1 h-[39px] w-[39px] overflow-hidden rounded-full border-[2px] border-white shadow-sm sm:h-[43px] sm:w-[43px] ${
                      index === 0 ? "ml-0" : ""
                    }`}
                  >

                    <Image
                      src={avatar}
                      alt={faqContentData.teamAvatarAltTemplate.replace(
                        "{number}",
                        String(index + 1),
                      )}
                      fill
                      sizes="43px"
                      className="object-cover"
                    />

                  </div>
                ))}

              </div>

              {/* CARD HEADING */}
              <h3 className="text-[19px] font-extrabold tracking-[-0.5px] text-[#075337] sm:text-[21px]">
                {faqContentData.contactCard.heading}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#303941] sm:text-sm">
                {faqContentData.contactCard.description}
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-4 flex items-center gap-3">

                {/* HEADSET ICON */}
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#075337] text-white shadow-md transition-transform duration-300 hover:scale-110">

                  <Headset size={23} strokeWidth={1.8} />

                </div>

                <div className="flex flex-col">

                  <span className="text-[15px] font-extrabold text-[#075337]">
                    {faqContentData.contactCard.contactLabel}
                  </span>

                  <Link
                    href={faqContentData.contactCard.phoneHref}
                    className="mt-0.5 inline-flex items-center gap-1 text-[13px] font-medium text-[#343d43] transition-colors hover:text-[#07834b] sm:text-sm"
                  >
                    <Phone size={13} />
                    {faqContentData.contactCard.phone}
                  </Link>

                </div>

              </div>

              {/* GOLDEN CORNER DESIGN */}
              <div className="absolute bottom-0 right-0 h-9 w-11 overflow-hidden">

                <div className="absolute bottom-1 right-1 h-12 w-12 rotate-180 rounded-tl-[18px] border-l-[5px] border-t-[5px] border-[#e6a72a]" />

              </div>

            </motion.div>

          </motion.div>

          {/* ================================== */}
          {/* RIGHT FAQ ACCORDION */}
          {/* ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="flex flex-col gap-3.5 sm:gap-4"
          >

            {faqContentData.items.map((faq, index) => {

              const isOpen = activeFaq === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className={`overflow-hidden rounded-[19px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#dce9e1] bg-white shadow-[0_7px_20px_rgba(0,60,35,0.10)]"
                      : "border-[#e8efeb] bg-white shadow-[0_5px_15px_rgba(0,50,30,0.07)] hover:border-[#b9d9c6] hover:shadow-[0_8px_22px_rgba(0,60,35,0.10)]"
                  }`}
                >

                  {/* QUESTION BUTTON */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-[17px] text-left transition-colors duration-300 sm:px-7 sm:py-[19px] ${
                      isOpen
                        ? "bg-gradient-to-r from-[#00543b] to-[#075439] text-white"
                        : "text-[#172a25] hover:text-[#087443]"
                    }`}
                  >

                    <span className="text-[15px] font-bold leading-snug sm:text-[16px] md:text-[17px]">
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS ICON */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "text-white"
                          : "text-[#075337]"
                      }`}
                    >

                      <AnimatePresence mode="wait" initial={false}>

                        {isOpen ? (
                          <motion.span
                            key="minus"
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    rotate: -90,
                                    scale: 0.6,
                                  }
                            }
                            animate={{
                              opacity: 1,
                              rotate: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              rotate: 90,
                              scale: 0.6,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <Minus size={25} strokeWidth={3} />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="plus"
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    rotate: 90,
                                    scale: 0.6,
                                  }
                            }
                            animate={{
                              opacity: 1,
                              rotate: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              rotate: -90,
                              scale: 0.6,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus size={25} strokeWidth={3} />
                          </motion.span>
                        )}

                      </AnimatePresence>

                    </span>

                  </button>

                  {/* ANSWER CONTENT */}
                  <AnimatePresence initial={false}>

                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.35,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >

                        <div className="px-5 pb-5 pt-3 sm:px-7 sm:pb-6 sm:pt-3">

                          <p className="text-[14px] font-medium leading-[1.65] text-[#333d43] sm:text-[15px] sm:leading-[1.7]">
                            {faq.answer}
                          </p>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
