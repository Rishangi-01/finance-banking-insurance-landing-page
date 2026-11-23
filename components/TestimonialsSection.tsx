
"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { motion, useReducedMotion } from "framer-motion";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import {
  Quote,
  Star,
  ArrowRight,
} from "lucide-react";
import {
  finSecureBrandData,
  testimonialsContentData,
} from "@/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#eaf6f0] py-12 sm:py-16 lg:py-16"
    >

      {/* ================================= */}
      {/* DARK GREEN TOP BACKGROUND */}
      {/* ================================= */}

      <div className="absolute inset-x-0 top-0 h-[330px] bg-gradient-to-br from-[#00523d] via-[#004535] to-[#003a30] sm:h-[350px] lg:h-[355px]">

        {/* Background Decorative Effects */}
        <div className="absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-[#16865e]/20 blur-[100px]" />

        <div className="absolute -right-32 top-0 h-[300px] w-[300px] rounded-full bg-[#00865a]/15 blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04),transparent_60%)]" />

      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-7 lg:px-8">

        {/* ================================= */}
        {/* SECTION HEADER */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col gap-5 pt-9 sm:pt-11 lg:flex-row lg:items-center lg:justify-between lg:pt-10"
        >

          {/* LEFT HEADING */}
          <div>

            {/* SMALL LABEL */}
            <div className="mb-3 flex items-center gap-3">

              <Quote
                size={29}
                fill="#f2b52e"
                stroke="#f2b52e"
                className="rotate-180"
              />

              <span className="text-[15px] font-bold text-white sm:text-base">
                {testimonialsContentData.eyebrow}
              </span>

              <span className="h-[2px] w-[78px] bg-[#e9aa2c]" />

            </div>

            {/* MAIN HEADING */}
            <h2 className="text-[29px] font-extrabold leading-[1.15] tracking-[-1.5px] text-white sm:text-[46px] md:text-[50px] lg:text-[48px] xl:text-[52px]">

              {testimonialsContentData.heading}{" "}
              <span className="text-[#f4b832]">
                {testimonialsContentData.highlight}
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-2 max-w-[750px] text-[14px] font-medium leading-relaxed text-white/90 sm:text-base">
              {testimonialsContentData.description}
            </p>

          </div>

          {/* VIEW ALL BUTTON */}
          <Link
            href={testimonialsContentData.viewAllHref}
            className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#efb42f] to-[#ffd05a] px-6 py-3 text-[14px] font-extrabold text-[#063b2d] shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] sm:text-base"
          >

            {testimonialsContentData.viewAllLabel}

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </motion.div>

        {/* ================================= */}
        {/* TESTIMONIAL CAROUSEL */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="relative mt-9 sm:mt-10 lg:mt-9"
        >

          <Suspense
            fallback={
              <div
                aria-hidden="true"
                className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
              >
                {testimonialsContentData.items.slice(0, 3).map((item, index) => (
                  <div
                    key={item.id}
                    className={
                      index === 1
                        ? "hidden sm:block"
                        : index === 2
                          ? "hidden lg:block"
                          : ""
                    }
                  >
                    <TestimonialCard item={item} reduceMotion={reduceMotion} />
                  </div>
                ))}
              </div>
            }
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              spaceBetween={18}
              grabCursor={true}
              watchOverflow={true}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              pagination={{
                clickable: true,
                el: ".testimonial-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="testimonial-swiper overflow-visible"
            >
              {testimonialsContentData.items.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto">
                  <TestimonialCard item={item} reduceMotion={reduceMotion} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Suspense>

        </motion.div>

      </div>
    </section>
  );
}

type TestimonialItem = (typeof testimonialsContentData.items)[number];

function TestimonialCard({
  item,
  reduceMotion,
}: {
  item: TestimonialItem;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      whileHover={reduceMotion ? {} : { y: -7 }}
      className="group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[22px] border border-[#e7f0eb] bg-white px-5 pb-5 pt-6 transition-shadow duration-500 hover:shadow-[0_18px_35px_rgba(0,65,42,0.15)] sm:min-h-[330px] sm:px-6 sm:pb-6"
    >
      <div className="flex items-center gap-4">
        <div className="relative h-[85px] w-[85px] shrink-0 rounded-full border-[2.5px] border-[#e9ac2d] p-[3px] sm:h-[96px] sm:w-[96px]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={item.image}
              alt={testimonialsContentData.imageAltTemplate.replace(
                "{name}",
                item.name,
              )}
              fill
              sizes="96px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-1 -right-3 flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white bg-[#00513b] shadow-md">
            <Quote
              size={17}
              fill="white"
              stroke="white"
              className="rotate-180"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[17px] font-extrabold leading-tight tracking-[-0.5px] text-[#073d2d] sm:text-[18px]">
            {item.name}
          </h3>
          <p className="mt-1.5 text-[14px] font-medium leading-snug text-[#506071] sm:text-[15px]">
            {item.role}
          </p>
        </div>
      </div>

      <div className="mt-5 flex-1">
        <p className="text-[14px] font-medium leading-[1.65] text-[#171d27] sm:text-[15px]">
          {testimonialsContentData.reviewQuotePrefix}
          {item.review}
          {testimonialsContentData.reviewQuoteSuffix}
        </p>
      </div>

      <div className="my-4 h-px w-full bg-[#cce0d6]" />

      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Image
            src={finSecureBrandData.clientLogo}
            alt={finSecureBrandData.clientLogoAlt}
            width={30}
            height={30}
            className="h-[29px] w-[29px] shrink-0 object-contain"
          />
          <span className="truncate text-[13px] font-bold tracking-[-0.4px] text-[#122d25] sm:text-sm">
            {finSecureBrandData.clientLabel}
          </span>
        </div>

        <span className="h-[23px] w-px shrink-0 bg-[#b5d3c4]" />

        <div
          className="flex shrink-0 items-center gap-[2px]"
          aria-label={testimonialsContentData.starLabelTemplate.replace(
            "{rating}",
            String(item.rating),
          )}
        >
          {Array.from({ length: item.rating }).map((_, starIndex) => (
            <Star
              key={starIndex}
              size={19}
              fill="#efa900"
              stroke="#efa900"
              strokeWidth={1.5}
              className="sm:h-[20px] sm:w-[20px]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
