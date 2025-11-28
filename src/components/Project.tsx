"use client";

import Image from "next/image";
import { Github, Globe, FileText, Download } from "lucide-react";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";

export default function Projects() {
  return (
    <>
      <section id="project" className="min-h-screen px-6 md:px-16 lg:px-32 pt-10 pb-20 text-white">
        {/* ========================= */}
        {/*      PROJECT SECTION      */}
        {/* ========================= */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p: any, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-2xl overflow-hidden shadow-xl 
                       backdrop-blur-lg border border-white/10
                       hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={p.thumbnail}
                  fill
                  alt={p.title}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-1">{p.title}</h2>
                <p className="text-white/60 text-sm mb-4">{p.description}</p>

                <div className="flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                  >
                    <Github size={20} /> GitHub
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                  >
                    <Globe size={20} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/*    CERTIFICATE SECTION    */}
        {/* ========================= */}
        <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-12">
          Certificates
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-2xl overflow-hidden shadow-xl 
                       backdrop-blur-lg border border-white/10
                       hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={cert.thumbnail}
                  fill
                  alt={cert.title}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold">{cert.title}</h2>
                <p className="text-white/60 text-sm mb-4">{cert.platform}</p>

                <div className="flex gap-4">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                  >
                    <FileText size={20} /> View
                  </a>

                  <a
                    href={cert.pdf}
                    download
                    className="flex items-center gap-2 text-white/80 hover:text-white transition"
                  >
                    <Download size={20} /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
