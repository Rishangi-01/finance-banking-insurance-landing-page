
"use client";

import Image from "next/image";
import { Suspense } from "react";
import { Landmark } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { bankingPartnersContentData } from "@/data";

import "swiper/css";

export default function BankingPartners() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-12">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full bg-[#e9f5ed]/40 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center text-center">

          <div className="group inline-flex items-center gap-3 rounded-full border border-[#08723b] bg-white px-6 py-2.5 shadow-[0_3px_12px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_7px_18px_rgba(0,90,48,0.10)] sm:px-7 sm:py-3">

            <Landmark
              size={31}
              strokeWidth={2.5}
              className="text-[#e9aa22] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
            />

            <span className="text-[17px] font-extrabold tracking-[-0.5px] text-[#09291e] sm:text-xl">
              {bankingPartnersContentData.badge}
            </span>

          </div>

          <h2 className="mt-5 text-[27px] font-extrabold leading-tight tracking-[-1.2px] text-[#09291e] sm:text-4xl md:text-[42px] lg:text-[44px]">

            {bankingPartnersContentData.heading}{" "}
            <span className="text-[#21833d]">
              {bankingPartnersContentData.highlight}
            </span>

          </h2>

          <div className="relative mt-4 h-[14px] w-[180px] overflow-hidden sm:w-[215px]">
            <div className="absolute left-0 top-[2px] h-[28px] w-full rounded-[50%] border-t-[5px] border-[#e8a927]" />
          </div>

        </div>

        <div className="mt-9 rounded-[26px] border border-[#dcefe4] bg-[#edf6f1] p-3 shadow-[0_5px_22px_rgba(0,75,40,0.035)] sm:mt-11 sm:rounded-[30px] sm:p-[10px] md:p-3">

          <div className="overflow-hidden rounded-[20px] border border-white/80 bg-white px-2 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.025)] sm:rounded-[22px] sm:px-3 sm:py-6 md:py-7">

            <Suspense
              fallback={
                <div className="flex h-[65px] overflow-hidden" aria-hidden="true">
                  {bankingPartnersContentData.items.map((bank, index) => (
                    <div
                      key={bank.name}
                      className="relative flex h-[65px] w-[50%] shrink-0 items-center justify-center px-3 sm:w-[33.333%] sm:px-5 md:w-[25%] lg:w-[20%] xl:w-[16.666%]"
                    >
                      <Image
                        src={bank.image}
                        alt=""
                        width={bank.width}
                        height={65}
                        sizes="(max-width: 640px) 125px, 180px"
                        className="max-h-[48px] w-auto max-w-full object-contain sm:max-h-[55px]"
                      />
                      {index < bankingPartnersContentData.items.length - 1 && (
                        <span className="absolute right-0 top-1/2 h-[48px] w-px -translate-y-1/2 bg-[#d5dcd9]" />
                      )}
                    </div>
                  ))}
                </div>
              }
            >
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={0}
                loop={true}
                speed={4500}
                allowTouchMove={true}
                grabCursor={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loopAdditionalSlides={bankingPartnersContentData.items.length}
                className="bank-partners-swiper"
              >
                {bankingPartnersContentData.items.map((bank, index) => (
                  <SwiperSlide
                    key={bank.name}
                    className="!flex !h-[65px] !w-[50%] items-center justify-center sm:!w-[33.333%] md:!w-[25%] lg:!w-[20%] xl:!w-[16.666%]"
                  >
                    <div className="group relative flex h-full w-full items-center justify-center px-3 sm:px-5">
                      <div className="relative flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={bank.image}
                          alt={bank.name}
                          width={bank.width}
                          height={65}
                          sizes="(max-width: 640px) 125px, 180px"
                          className="max-h-[48px] w-auto max-w-full object-contain sm:max-h-[55px]"
                        />
                      </div>
                      <span
                        className={`absolute right-0 top-1/2 h-[48px] w-px -translate-y-1/2 bg-[#d5dcd9] ${
                          index === bankingPartnersContentData.items.length - 1
                            ? "hidden"
                            : ""
                        }`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Suspense>

          </div>

        </div>

      </div>
    </section>
  );
}
