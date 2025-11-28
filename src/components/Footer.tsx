"use client";

import { Heart } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { useState } from "react";

export default function FooterSection() {
  const [likes, setLikes] = useState(0);

  return (
    <footer className="px-6 md:px-16 lg:px-32 py-20 mt-12 text-white">

      {/* Garis atas */}
      <div className="border-t max-w-5xl mx-auto border-white/10 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center">
        
        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank">
            <SiGithub className="w-7 h-7 text-white/80 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <SiLinkedin className="w-7 h-7 text-white/80 hover:text-white transition" />
          </a>
          <a href="mailto:your@email.com">
            <SiGmail className="w-7 h-7 text-white/80 hover:text-white transition" />
          </a>
        </div>

        {/* BUILT WITH */}
        <div className="space-y-2 text-white/70 text-sm">
          <p className="flex items-center gap-2">
            Built with <SiNextdotjs className="w-4 h-4" /> <span className="text-white">Next.js</span>
          </p>
          <p className="flex items-center gap-2">
            Styled with <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> <span className="text-white">TailwindCSS</span>
          </p>
          <p className="flex items-center gap-2">
            Deployed on <SiVercel className="w-4 h-4" /> <span className="text-white">Vercel</span>
          </p>
        </div>

        {/* LIKE BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={() => setLikes(likes + 1)}
            className="flex items-center gap-3 border border-purple-500 text-purple-300 
                         hover:bg-purple-600/10 transition px-6 py-3 rounded-full"
          >
            <Heart className="w-5 h-5" /> {likes} Likes
          </button>
        </div>

      </div>

      {/* Garis bawah */}
      <div className="border-t max-w-5xl mx-auto border-white/10 mt-8"></div>


      {/* COPYRIGHT */}
      <p className="text-center text-white/50 text-sm mt-16">
        Copyright © 2025 Farhan Fadholy. All rights reserved.
      </p>

    </footer>
  );
}
