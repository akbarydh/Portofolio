"use client";

import { motion } from "framer-motion";

export default function Home() {
  // ini animasi
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Data Proyek
  const projectData = [
    {
      title: "SILAB LMS",
      tech: "Next.js • Tailwind",
      desc: "A collaborative web-based Learning Management System where I led frontend development and improved code maintainability by refactoring large components into modular, reusable structures.",
      github: null
    },
    {
      title: "PlayLater",
      tech: "Flutter • Firebase • REST API",
      desc: "A mobile watchlist management app with CRUD features, filtering, search functionality, OMDb API integration, and Firestore database.",
      github: "https://github.com/akbarydh/tugas_akhir_tekmob.git"
    },
    {
      title: "UX Evaluation – Adisty App",
      tech: "UX Research • UI Design • Figma",
      desc: "Conducted user experience evaluation, data collection, usability analysis, and feature redesign to improve academic support functionality.",
      link: "https://www.figma.com/design/0BWOhY7U1mYLbds1syG743/Untitled?node-id=0-1&t=PH2Npj3TTHhItit8-1",
      linkLabel: "View Case Study"
    },
    {
      title: "ResepKu",
      tech: "React / Vite • Tailwind • JSON Server",
      desc: "A CRUD-based recipe management web application using a local mock REST API for dynamic data handling.",
      github: "https://github.com/akbarydh/Resepkuu_tugas_akhir.git"
    },
    {
      title: "Our Story",
      tech: "Next.js • Supabase • Tailwind",
      desc: "A fullstack memory web application designed to document relationship milestones with real-time bucket list management, photo galleries, and a custom music player.",
      github: "https://github.com/akbarydh/Our-Story-Web.git"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-x-hidden font-sans selection:bg-emerald-500/30">
      
      {/* BACKGROUND  */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="fixed w-full top-0 z-[100] backdrop-blur-md bg-gray-950/70 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter text-emerald-400"
          >
            Akbar Yudho Intiyo
          </motion.h1>
          <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/*  HERO SECTION */}
      <section className="relative pt-32 pb-20 z-10 min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative group">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-500/40 transition-colors duration-500"></div>
              <div className="relative w-full h-full bg-gray-900 border border-emerald-500/20 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/porto.jpeg" 
                  alt="Akbar"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-gray-900 border border-emerald-500/30 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-xl">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Turning Ideas into <span className="text-emerald-400">Functional</span> Applications.
            </h1>
            <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              Information Systems Student focused on building <span className="text-gray-200">scalable and modern</span> web and mobile applications.
            </p>
            <div className="mt-10">
              <a href="#projects" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-gray-950 px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95 text-center">
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 relative z-10 border-t border-gray-900/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About <span className="text-emerald-400">Me</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
              I enjoy building clean and efficient web applications. Currently exploring the fundamentals of system architecture and scalable design.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Education", desc: "Information Systems student with strong interest in software development and system design." },
              { title: "Experience", desc: "Experienced in developing web-based applications using modern frameworks and backend integration." },
              { title: "Focus", desc: "Focused on building structured, scalable, and user-centered digital solutions." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-colors backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="py-24 md:py-32 bg-gray-900/20 border-y border-gray-900/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 md:mb-16">Tech <span className="text-emerald-400">Stack</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Frontend & Mobile</h3>
              <ul className="space-y-2 text-gray-400 font-medium">
                <li>React / Next.js</li>
                <li>Flutter</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Backend</h3>
              <ul className="space-y-2 text-gray-400 font-medium">
                <li>Node.js</li>
                <li>Firebase</li>
                <li>Supabase</li>
              </ul>
            </div>
            <div>
              <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Tools</h3>
              <ul className="space-y-2 text-gray-400 font-medium">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 italic font-serif">Featured <span className="text-emerald-400 underline underline-offset-8 decoration-gray-900">Projects</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectData.map((proj, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-gray-900/40 border border-gray-800 rounded-3xl p-6 md:p-8 hover:border-emerald-500/50 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{proj.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{proj.desc}</p>
                </div>
                
                <div className="flex flex-col gap-4 mt-4">
                  <div className="text-[10px] font-mono font-bold text-emerald-500 bg-emerald-500/10 inline-block px-3 py-1 rounded-full uppercase tracking-tighter self-start">
                    {proj.tech}
                  </div>
                  
                  {(proj.github || proj.link) && (
                    <a 
                      href={proj.github || proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-gray-500 hover:text-emerald-400 flex items-center gap-1 transition-colors w-fit uppercase tracking-widest"
                    >
                      {proj.github ? "View on GitHub" : proj.linkLabel}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 relative z-10 bg-emerald-500/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic font-serif">Let's <span className="text-emerald-400 underline underline-offset-8 decoration-gray-800">Connect</span></h2>
            <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed max-w-lg mx-auto">Interested in collaboration or internship opportunities? Feel free to reach out.</p>
            
            <div className="flex flex-col items-center gap-8 mt-10">
              {/* Alamat Email Langsung - Responsive break-all untuk mobile */}
              <div className="group relative w-full overflow-hidden">
                <span className="text-lg sm:text-2xl md:text-3xl font-mono font-bold text-gray-200 group-hover:text-emerald-400 transition-colors break-all">
                  2300016085@webmail.uad.ac.id
                </span>
                <div className="h-px w-full bg-gray-800 scale-x-100 group-hover:bg-emerald-400 transition-all mt-2"></div>
              </div>

              {/* Tombol GitHub */}
              <a 
                href="https://github.com/akbarydh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-700 hover:border-emerald-400 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 backdrop-blur-sm group"
              >
                <span className="text-sm md:text-base">Check my GitHub</span>
                <svg className="w-5 h-5 fill-current group-hover:text-emerald-400" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-gray-900/50 text-gray-600 text-[10px] tracking-[0.3em] uppercase px-6">
        © 2026 Akbar Portfolio — Yogyakarta, Indonesia
      </footer>
    </main>
  );
}