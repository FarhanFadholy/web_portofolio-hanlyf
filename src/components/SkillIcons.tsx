import Marquee from "react-fast-marquee";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiMysql,
  SiSvelte,
  SiBootstrap,
  SiPhp,
} from "react-icons/si";

export default function SkillIcons() {
  return (
    <div className="mt-8 md:mt-16 pb-20 md:pb-0">
      <Marquee
        gradientWidth={40}
        speed={40}
        pauseOnHover={true}
        className="mt-2 md:mt-8"
      >
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiHtml5 className="w-6 h-6 sm:w-8 sm:h-8 text-[#E34F26]" />
          <span className="text-gray-400 text-sm sm:text-base">HTML5</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiCss3 className="w-6 h-6 sm:w-8 sm:h-8 text-[#1572B6]" />
          <span className="text-gray-400 text-sm sm:text-base">CSS3</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8 text-[#F7DF1E]" />
          <span className="text-gray-400 text-sm sm:text-base">JavaScript</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiTailwindcss className="w-6 h-6 sm:w-8 sm:h-8 text-[#06B6D4]" />
          <span className="text-gray-400 text-sm sm:text-base">TailwindCSS</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiNextdotjs className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <span className="text-gray-400 text-sm sm:text-base">Next.js</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiNodedotjs className="w-6 h-6 sm:w-8 sm:h-8 text-[#339933]" />
          <span className="text-gray-400 text-sm sm:text-base">Node.js</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-[#61DAFB]" />
          <span className="text-gray-400 text-sm sm:text-base">React</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiSupabase className="w-6 h-6 sm:w-8 sm:h-8 text-[#3ECF8E]" />
          <span className="text-gray-400 text-sm sm:text-base">Supabase</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiMysql className="w-6 h-6 sm:w-8 sm:h-8 text-[#4479A1]" />
          <span className="text-gray-400 text-sm sm:text-base">MySQL</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiSvelte className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF3E00]" />
          <span className="text-gray-400 text-sm sm:text-base">Svelte</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiBootstrap className="w-6 h-6 sm:w-8 sm:h-8 text-[#7952B3]" />
          <span className="text-gray-400 text-sm sm:text-base">Bootstrap</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mx-6 sm:mx-8">
          <SiPhp className="w-6 h-6 sm:w-8 sm:h-8 text-[#777BB4]" />
          <span className="text-gray-400 text-sm sm:text-base">PHP</span>
        </div>
      </Marquee>
    </div>
  );
}
