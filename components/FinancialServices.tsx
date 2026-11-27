"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Landmark, ShieldCheck, HandCoins, CircleCheck } from "lucide-react";
import { financialServicesContentData } from "@/data";

const serviceIconMap = {
  landmark: Landmark,
  shield: ShieldCheck,
  handCoins: HandCoins,
};

const services = financialServicesContentData.items.map((service) => {
  const icon = Object.entries(serviceIconMap).find(
    ([name]) => name === service.icon,
  )?.[1];

  if (!icon) {
    throw new Error(`Unknown financial service icon: ${service.icon}`);
  }

  return { ...service, icon };
});
const defaultSelectedIndex = Math.max(
  0,
  services.findIndex(
    (service) =>
      service.number === financialServicesContentData.defaultActiveNumber,
  ),
);

export default function FinancialServices() {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reduceMotion = useReducedMotion();

  const activeIndex = hoveredIndex ?? selectedIndex;
  const activeService = services[activeIndex];

  const selectService = (index: number) => {
    setSelectedIndex(index);
    setHoveredIndex(null);
  };

  const highlightService = (index: number) => {
    setHoveredIndex(index);
  };

  const restoreSelectedService = () => {
    setHoveredIndex(null);
  };

  const imageReveal = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 55,
      scale: reduceMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#003b32] py-14 text-white sm:py-16 lg:min-h-[620px] lg:py-10 xl:min-h-[650px]"
    >
      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#087b59]/20 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#087b59]/20 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,20,17,0.15)_100%)]" />
      </div>

      <div
        className="relative mx-auto flex max-w-[1600px] flex-col gap-8 px-5 sm:px-8 lg:px-5"
      >
        {/* ================================== */}
        {/* MOBILE SERVICE NAVIGATION */}
        {/* ================================== */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {services.map((service, index) => {
            const Icon = service.icon;
            const active = activeIndex === index;

            return (
              <motion.button
                key={service.number}
                type="button"
                onClick={() => selectService(index)}
                onMouseEnter={() => highlightService(index)}
                onMouseLeave={restoreSelectedService}
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                aria-pressed={selectedIndex === index}
                aria-label={financialServicesContentData.viewServiceLabelTemplate.replace(
                  "{title}",
                  service.title,
                )}
                className={`flex min-h-[115px] cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-3 text-center transition-all duration-300 ${
                  active
                    ? "border-[#f7ad35] bg-[#075547] shadow-lg shadow-black/20"
                    : "border-white/15 bg-white/[0.04] hover:border-[#f7ad35]/60 hover:bg-white/[0.08]"
                }`}
              >
                <span
                  className={`text-2xl font-extrabold ${
                    active ? "text-[#ffb43d]" : "text-white/70"
                  }`}
                >
                  {service.number}
                </span>

                <Icon
                  size={24}
                  className={active ? "text-[#ffb43d]" : "text-white"}
                />

                <span className="text-xs font-semibold sm:text-sm">
                  {service.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        <div
          className="hidden min-h-[580px] lg:grid"
          style={{
            gridTemplateColumns: services
              .map((_, index) => (activeIndex === index ? "2fr" : "1fr"))
              .join(" "),
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const active = activeIndex === index;

            return (
              <motion.div
                key={service.number}
                layout
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease: "easeInOut",
                }}
                onMouseEnter={() => highlightService(index)}
                onMouseLeave={restoreSelectedService}
                className="relative min-w-0 overflow-hidden border-r border-white/20"
              >
                {active ? (
                  /* ACTIVE EXPANDED COLUMN */

                  <div className="flex min-h-[580px] flex-col justify-center p-6 xl:p-8">
                    <div className="mb-4">
                      <span className="text-[55px] font-extrabold leading-none">
                        {service.number}
                      </span>

                      <div className="mt-4 h-[4px] w-[63px] rounded-full bg-[#f9a52e]" />
                    </div>

                    <h2 className="text-[36px] font-extrabold leading-tight xl:text-[44px]">
                      <span className="block">{service.firstLine}</span>
                      <span className="block text-[#f7aa36]">
                        {service.secondLine}
                      </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-white/90">
                      {service.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3">
                          <CircleCheck
                            size={25}
                            className="shrink-0 text-[#f9a52e]"
                          />

                          <span className="text-sm font-medium xl:text-base">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="relative mt-7 h-[220px] overflow-hidden rounded-2xl border-2 border-white/70 xl:h-[260px]">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="50vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                ) : (
                  /* COLLAPSED COLUMN */

                  <button
                    type="button"
                    onClick={() => selectService(index)}
                    aria-pressed={selectedIndex === index}
                    aria-label={`View ${service.title}`}
                    className="group relative flex min-h-[580px] w-full flex-col items-center pt-8 transition-all duration-300 hover:bg-white/[0.04]"
                  >
                    <span
                      className="rotate-[-90deg] text-[55px] font-extrabold text-transparent"
                      style={{
                        WebkitTextStroke: "1.5px white",
                      }}
                    >
                      {service.number}
                    </span>

                    <div className="my-7 h-[68px] w-[3px] bg-white/50 transition-colors group-hover:bg-[#f9a52e]" />

                    <Icon
                      size={58}
                      strokeWidth={1.8}
                      className="text-white transition-all duration-300 group-hover:scale-110 group-hover:text-[#f9a52e]"
                    />

                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
                      <p className="rotate-[-90deg] whitespace-nowrap text-[24px] font-bold tracking-wide transition-colors group-hover:text-[#f9a52e]">
                        {service.firstLine}
                        <br />
                        {service.secondLine}
                      </p>
                    </div>
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center py-2 lg:hidden"
        >
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={activeService.number}
              initial={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }
              }
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* SERVICE NUMBER / SERVICE 03 TAB */}

              <motion.div className="mb-4">
                <button
                  type="button"
                  onClick={() => selectService(activeIndex)}
                  onMouseEnter={() => highlightService(activeIndex)}
                  onMouseLeave={restoreSelectedService}
                  aria-label={financialServicesContentData.viewServiceLabelTemplate.replace(
                    "{title}",
                    activeService.title,
                  )}
                  aria-pressed={selectedIndex === activeIndex}
                  className={`group inline-flex cursor-pointer flex-col items-start ${
                    activeIndex === 2 ? "text-white" : "text-white/60"
                  }`}
                >
                  <span className="text-[48px] font-extrabold leading-none tracking-tight transition-colors duration-300 group-hover:text-[#f7aa36] sm:text-[55px]">
                    {activeService.number}
                  </span>

                  <div className="mt-4 h-[4px] w-[63px] rounded-full bg-[#f9a52e] transition-all duration-300 group-hover:w-[85px]" />
                </button>
              </motion.div>

              <motion.h2
                initial={
                  reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-[30px] font-extrabold leading-[1.15] tracking-[-1px] sm:text-[43px] xl:text-[46px] opacity-100"
              >
                <span className="block text-white">
                  {activeService.firstLine}
                </span>

                <span className="block text-[#f7aa36]">
                  {activeService.secondLine}
                </span>
              </motion.h2>

              {/* DESCRIPTION */}

              <motion.p
                initial={
                  reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : 0.08,
                  ease: "easeOut",
                }}
                className="mt-3 max-w-[440px] text-[15px] font-medium leading-[1.75] text-white/95 sm:text-base xl:text-[18px]"
              >
                {activeService.description}
              </motion.p>

              {/* BENEFITS */}

              <div className="mt-4 flex flex-col gap-3">
                {activeService.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: reduceMotion ? 0 : 0.15 + index * 0.12,
                    }}
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full text-[#f9a52e] transition-all duration-300 group-hover:bg-[#f9a52e] group-hover:text-[#003b32]">
                      <CircleCheck size={36} strokeWidth={2.3} />
                    </div>

                    <span className="text-[15px] font-medium tracking-wide text-white sm:text-base xl:text-[18px]">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={imageReveal}
          className="group relative min-h-[330px] w-full overflow-hidden rounded-[24px] border-2 border-white/80 shadow-[0_15px_45px_rgba(0,0,0,0.22)] sm:min-h-[440px] lg:hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.image}
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              <Image
                src={activeService.image}
                alt={activeService.alt}
                fill
                priority={activeIndex === 2}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.04]"
              />
            </motion.div>
          </AnimatePresence>

          {/* IMAGE OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#002e25]/20 via-transparent to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
