
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Users, Share2 } from "lucide-react";
import { teamContentData } from "@/data";

export default function TeamSection() {
  const reduceMotion = useReducedMotion();

  const handleShare = async (name: string, role: string) => {
    const shareData = {
      title: teamContentData.shareTitleTemplate.replace("{name}", name),
      text: teamContentData.shareTextTemplate
        .replace("{name}", name)
        .replace("{role}", role),
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          `${shareData.text} ${shareData.url}`
        );
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Unable to share:", error);
      }
    }
  };

  return (
    <section
      id="our-team"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-16"
    >

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#e8f5ed]/50 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#e8f5ed]/40 blur-[120px]" />

      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">


        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-10 flex flex-col items-center text-center sm:mb-12 lg:mb-14"
        >

          <motion.div
            whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
            className="group mb-4 inline-flex items-center gap-3 rounded-full border border-[#08733e] bg-white px-5 py-2.5 shadow-[0_3px_12px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(0,90,48,0.10)] sm:px-6"
          >

            <Users
              size={27}
              strokeWidth={2.5}
              fill="#e9aa2c"
              className="text-[#e9aa2c] transition-transform duration-500 group-hover:scale-110"
            />

            <span className="text-[17px] font-extrabold tracking-[-0.5px] text-[#09291e] sm:text-xl">
              {teamContentData.badge}
            </span>

          </motion.div>

          <div className="flex w-full items-center justify-center gap-4 sm:gap-7">

            <span className="hidden h-[2px] w-12 shrink-0 bg-[#e9aa2c] sm:block md:w-16" />

            <h2 className="text-[27px] font-extrabold leading-tight tracking-[-1.5px] text-[#09291e] sm:text-[43px] md:text-[48px] lg:text-[50px]">
              {teamContentData.heading}{" "}
              <span className="text-[#168044]">
                {teamContentData.highlight}
              </span>
            </h2>

            <span className="hidden h-[2px] w-12 shrink-0 bg-[#e9aa2c] sm:block md:w-16" />

          </div>

          <p className="mt-4 max-w-[760px] text-[15px] font-medium leading-[1.8] text-[#525a60] sm:text-base md:text-lg">
            {teamContentData.description}
          </p>

        </motion.div>



        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6">

          {teamContentData.members.map((member, index) => (

            <motion.div
              key={member.id}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 55,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                delay: reduceMotion ? 0 : index * 0.18,
                ease: "easeOut",
              }}
              whileHover={ 
                reduceMotion
                  ? {}
                  : {
                      y: -8,
                    }
              }
              className="group relative h-[320px] w-full overflow-hidden rounded-[23px] bg-[#003b32] shadow-[0_5px_20px_rgba(0,45,30,0.09)] transition-shadow duration-500 hover:shadow-[0_18px_38px_rgba(0,45,30,0.20)] sm:h-[420px] md:h-[450px] lg:h-[420px] xl:h-[455px]"
            >

             
              <Image
                src={member.image}
                alt={teamContentData.imageAltTemplate
                  .replace("{name}", member.name)
                  .replace("{role}", member.role)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.07]"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-[#002e26] via-[#003b32]/35 via-[30%] to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />

            
              <div className="absolute inset-0 bg-[#00563c]/0 transition-colors duration-500 group-hover:bg-[#00563c]/10" />


              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">

                <div className="flex items-end justify-between gap-3">

        
                  <div className="min-w-0 flex-1">

                    <h3 className="text-[21px] font-extrabold leading-tight tracking-[-0.5px] text-white sm:text-[23px] xl:text-[24px]">
                      {member.name}
                    </h3>

                    <p className="mt-1.5 text-[15px] font-medium leading-snug text-white/90 sm:text-base">
                      {member.role}
                    </p>

                  </div>

                  {/* SHARE BUTTON */}
                  <motion.button
                    type="button"
                    aria-label={teamContentData.shareLabelTemplate.replace(
                      "{name}",
                      member.name,
                    )}
                    onClick={() =>
                      handleShare(member.name, member.role)
                    }
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            scale: 1.12,
                            rotate: 10,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? {}
                        : {
                            scale: 0.9,
                          }
                    }
                    className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#dca52e] text-white shadow-lg transition-colors duration-300 hover:bg-[#f0b63c] sm:h-[47px] sm:w-[47px]"
                  >

                    <Share2
                      size={22}
                      strokeWidth={2.5}
                    />

                  </motion.button>

                </div>

                {/* GOLDEN UNDERLINE */}
                <motion.div
                  initial={{
                    width: 45,
                  }}
                  whileHover={{
                    width: 75,
                  }}
                  className="mt-4 h-[4px] rounded-full bg-gradient-to-r from-[#dca52e] to-[#f7c95d]"
                />

              </div>

              {/* TOP DECORATIVE BORDER */}
              <div className="pointer-events-none absolute inset-0 rounded-[23px] border border-white/10 transition-all duration-500 group-hover:border-white/30" />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
