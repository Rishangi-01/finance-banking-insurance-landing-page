"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaRegFileLines,
  FaRegCommentDots,
  FaArrowRight,
  FaComments,
} from "react-icons/fa6";
import { contactContentData } from "@/data";

const contactIconMap = {
  location: FaLocationDot,
  phone: FaPhone,
  email: FaEnvelope,
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-[#eef1ec] lg:bg-size-[100%_100%]"
      style={{
        backgroundImage: `url('${contactContentData.backgroundImage}')`,
      }}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-stretch gap-5 px-4 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:gap-5 lg:px-8 xl:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative min-h-[260px] overflow-hidden rounded-[24px] sm:min-h-[530px] lg:min-h-[590px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#08382d]/20 via-transparent to-transparent" />

          {/* Contact Information Green Panel */}
          <div className="absolute inset-x-0 bottom-0 px-5 pb-7 pt-12 text-white sm:px-7 sm:pb-8 sm:pt-14 lg:px-8">
            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-3">
              {contactContentData.contactInfo.map((item, index) => {
                const Icon = Object.entries(contactIconMap).find(
                  ([name]) => name === item.icon,
                )?.[1];

                if (!Icon) {
                  throw new Error(`Unknown contact icon: ${item.icon}`);
                }

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 ${
                      index !== 2
                        ? "sm:border-r sm:border-white/30 sm:pr-3"
                        : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#e8b63b] text-[#f2c64c] transition-all duration-300 hover:rotate-6 hover:bg-[#e8b63b] hover:text-[#004b37]">
                      <Icon className="text-xl" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="mb-1 text-sm font-bold sm:text-[15px]">
                        {item.title}
                      </h3>

                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="break-words text-[11px] leading-[1.6] text-white/85 sm:text-xs"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="w-full rounded-[22px] border border-white/80 bg-white/95 px-5 py-5 shadow-[0_15px_55px_rgba(0,0,0,0.14)] backdrop-blur-md sm:px-7 sm:py-6 md:px-9 lg:min-h-[590px] lg:px-8 lg:py-6 xl:px-10 xl:py-6 my-12 sm:my-16 lg:my-16"
        >
          {/* Form Heading */}
          <div className="mb-4 text-center sm:mb-5">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-12 bg-[#c49316]" />

              <div className="flex items-center gap-2 rounded-full border-2 border-[#07523b] px-3 py-2 text-[#07523b]">
                <FaComments className="text-base hidden lg:block" />
                <span className="text-sm font-bold">                {contactContentData.badge}</span>
              </div>

              <span className="h-[2px] w-12 bg-[#c49316]" />
            </div>

            <h2 className="font-serif text-3xl font-bold leading-tight text-[#064432] sm:text-4xl lg:text-[36px] xl:text-[35px]">
              {contactContentData.heading}{" "}
              <span className="text-[#c18b0c]">
                {contactContentData.highlight}
              </span>
            </h2>

            <p className="mx-auto mt-1 max-w-[580px] text-sm leading-6 text-gray-600 sm:text-[15px]">
              {contactContentData.description}
            </p>
          </div>

          {/* Golden Green Divider */}
          <div className="mb-4 h-[2px] w-full bg-gradient-to-r from-[#c49316]/20 via-[#087a70] to-[#c49316]/20" />

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="relative group">
                <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#456044]" />

                <input
                  type={contactContentData.fields.firstName.type}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={contactContentData.fields.firstName.placeholder}
                  required
                  className="h-[43px] w-full rounded-lg border border-gray-300 bg-[#f8f8f9] pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#08745c] focus:border-[#08745c] focus:bg-white focus:ring-2 focus:ring-[#08745c]/15"
                />
              </div>

              <div className="relative group">
                <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#456044]" />

                <input
                  type={contactContentData.fields.lastName.type}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={contactContentData.fields.lastName.placeholder}
                  required
                  className="h-[43px] w-full rounded-lg border border-gray-300 bg-[#f8f8f9] pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#08745c] focus:border-[#08745c] focus:bg-white focus:ring-2 focus:ring-[#08745c]/15"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="relative">
                <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#456044]" />

                <input
                  type={contactContentData.fields.email.type}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={contactContentData.fields.email.placeholder}
                  required
                  className="h-[43px] w-full rounded-lg border border-gray-300 bg-[#f8f8f9] pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#08745c] focus:border-[#08745c] focus:bg-white focus:ring-2 focus:ring-[#08745c]/15"
                />
              </div>

              <div className="relative">
                <FaPhone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#456044]" />

                <input
                  type={contactContentData.fields.phone.type}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={contactContentData.fields.phone.placeholder}
                  required
                  className="h-[43px] w-full rounded-lg border border-gray-300 bg-[#f8f8f9] pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#08745c] focus:border-[#08745c] focus:bg-white focus:ring-2 focus:ring-[#08745c]/15"
                />
              </div>
            </div>

            {/* Subject Dropdown */}
            <div className="relative">
              <FaRegFileLines className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#456044]" />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="h-[43px] w-full appearance-none rounded-lg border border-gray-300 bg-[#f8f8f9] pl-12 pr-11 text-sm text-gray-600 outline-none transition-all duration-300 hover:border-[#08745c] focus:border-[#08745c] focus:bg-white focus:ring-2 focus:ring-[#08745c]/15"
              >
                <option value="" disabled>
                  {contactContentData.fields.subject.placeholder}
                </option>

                {contactContentData.subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-600">
                <FaArrowRight className="rotate-90 text-sm" />
              </span>
            </div>

            {/* Message */}
            <div className="relative">
              <FaRegCommentDots className="pointer-events-none absolute left-4 top-5 text-lg text-[#456044]" />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={contactContentData.fields.message.placeholder}
                required
                rows={4}
                className="min-h-[120px] w-full resize-y rounded-lg border border-gray-300 bg-[#f8f8f9] py-4 pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#08745c] focus:border-[#08745c] focus:bg-white focus:ring-2 focus:ring-[#08745c]/15 sm:min-h-[95px]"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-2 inline-flex min-h-[45px] items-center gap-5 rounded-full border-b-[4px] border-[#d5a322] bg-[#00543c] py-1 pl-7 pr-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#087458] sm:text-base"
            >
              <span>{contactContentData.submitLabel}</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#07523b] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#f5c64d]">
                <FaArrowRight className="text-lg" />
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
