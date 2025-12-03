"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";
import SkillIcons from "./SkillIcons";

export default function Homepage() {
  return (
    <>
      {/* SOCIAL BAR */}
      <div
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 right-0
             bg-white/10 text-white 
             py-6 px-4 rounded-l-2xl 
             shadow-lg z-50 flex-col gap-6"
      >
        <a
          href="https://github.com"
          target="_blank"
          className="flex justify-center hover:text-gray-300 transition"
        >
          <SiGithub size={26} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="flex justify-center hover:text-blue-400 transition"
        >
          <SiLinkedin size={26} />
        </a>

        <a href="mailto:your@email.com" className="flex justify-center hover:text-red-400 transition">
          <SiGmail size={26} />
        </a>
      </div>

      <section id="home" className="min-h-screen flex flex-col px-4 md:px-12 lg:px-32 pt-5 md:pt-20 pb-40 md:pb-24 font-consolas overflow-hidden">
        <div className="w-full relative">
          {/* Mobile Layout - Text + Mockup side by side with overlap */}
          <div className="md:hidden relative h-[520px]">
            {/* Phone Mockup - positioned absolutely, no rotation, larger size */}
            <div className="absolute top-0 left-1/2 -translate-x-1/3">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-[260px] h-[480px] rounded-[45px] p-2 shadow-2xl border-[3px] border-gray-700">
                  {/* Notch */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-10"></div>

                  {/* Screen content */}
                  <div className="w-full h-full bg-gray-600 rounded-[38px] overflow-hidden relative">
                    <Image
                      src="/Farhan.jpeg"
                      fill
                      className="object-cover"
                      alt="Farhan Fadholy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text overlapping on lower part of mockup */}
            <div className="absolute left-4 bottom-36 text-left max-w-[320px] z-10">
              <p className="text-white/90 text-xs mb-1.5">
                Hi, i'm Farhan Fadholy 👋
              </p>
              <h1 className="text-5xl text-white leading-[1.1] mb-2 font-bold">
                FullStack
                <br />
                Developer
              </h1>
              <p className="text-white/80 text-xs leading-relaxed mb-3">
                I specialize in creating modern and responsive web applications
                using the latest technologies. Let's build something amazing
                together!
              </p>
              <a
                href="/certificates/CV-FARHANFADHOLY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-col items-start gap-0">
            <div className="text-left w-full max-w-xl relative z-10">
              <p className="text-white/70 text-lg mb-3">
                Hi, i'm Farhan Fadholy 👋
              </p>
              <h1 className="text-6xl lg:text-7xl text-white leading-[1.1] mb-5 font-bold">
                FullStack
                <br />
                Developer
              </h1>
              <p className="text-white/70 text-base max-w-md leading-relaxed mb-6">
                I specialize in creating modern and responsive web applications
                using the latest technologies. Let's build something amazing
                together!
              </p>
              <a
                href="/certificates/CV-FARHANFADHOLY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            {/* Phone Mockup - overlapping with text, moved up */}
            <div className="relative -mt-96 ml-auto mr-16">
              <div className="relative rotate-[8deg]">
                {/* Phone frame */}
                <div className="w-[230px] h-[450px] rounded-[45px] p-3 shadow-2xl border-4 border-gray-700">
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10"></div>

                  {/* Screen content */}
                  <div className="w-full h-full bg-gray-600 rounded-[35px] overflow-hidden relative">
                    <Image
                      src="/Farhan.jpeg"
                      fill
                      className="object-cover"
                      alt="Farhan Fadholy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SkillIcons />
        </div>
      </section>
    </>
  );
}
