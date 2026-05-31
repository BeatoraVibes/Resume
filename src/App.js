import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200/60">
        {/* HEADER SECTION */}
        <header className="bg-slate-900 text-white px-8 py-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between border-b-4 border-blue-600">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Daksh</h1>
            <p className="text-blue-400 font-medium text-lg mt-1 tracking-wide">
              Frontend Developer & Web Designer
            </p>
          </div>
          <div className="mt-4 sm:mt-0 text-sm text-slate-300 space-y-1 font-mono text-center sm:text-right">
            <p>📍 Mumbai/Virar, Maharashtra</p>
            <p>✉️ dakshm31007@gmail.comm</p>
            <p>📞 +91 9021268038</p>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* PROFESSIONAL SUMMARY */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-1 flex items-center gap-2">
              <span className="text-blue-600">🚀</span> Professional Summary
            </h2>
            <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
              Detail-oriented and highly motivated Frontend Developer passionate
              about building high-performance, visually striking, and responsive
              web applications. Expert in leveraging <strong>React</strong>,{" "}
              <strong>Tailwind CSS</strong>, and modern UI/UX principles to
              transform intangible concepts into premium user experiences.
              Proven track record of developing functional e-commerce
              prototypes, real-time collaborative applications, and localized
              business websites.
            </p>
          </section>

          {/* TECHNICAL SKILLS */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-1 flex items-center gap-2">
              <span className="text-blue-600">🛠️</span> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 text-sm">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                <span className="font-bold text-slate-700 block mb-1">
                  Languages & Core Web
                </span>
                <span className="text-slate-600">
                  HTML5, CSS3, JavaScript (ES6+), WebSockets (Socket.io)
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                <span className="font-bold text-slate-700 block mb-1">
                  Frameworks & Tools
                </span>
                <span className="text-slate-600">
                  React.js, Tailwind CSS, Git, GitHub, VS Code, CodeSandbox
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                <span className="font-bold text-slate-700 block mb-1">
                  Deployment & Hosting
                </span>
                <span className="text-slate-600">
                  Vercel, Render Cloud Hosting, GitHub Pages
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                <span className="font-bold text-slate-700 block mb-1">
                  Design & Architecture
                </span>
                <span className="text-slate-600">
                  UI/UX Wireframing, Responsive Design, Core SaaS Visual
                  Architectures
                </span>
              </div>
            </div>
          </section>

          {/* TECHNICAL PROJECTS */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-1 flex items-center gap-2">
              <span className="text-blue-600">💻</span> Technical Projects
            </h2>

            {/* Project 1 */}
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Media Hub – Real-Time Collaborative Streaming Platform
                </h3>
                <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 mt-1 sm:mt-0 inline-block self-start">
                  React • Socket.io • Render
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-600 text-sm mt-2 space-y-1 leading-relaxed">
                <li>
                  Developed a dynamic, cloud-hosted web app enabling
                  synchronized room-based multimedia streaming.
                </li>
                <li>
                  Built a secure custom room-generation engine utilizing unique
                  codes and dynamic shareable invite links.
                </li>
                <li>
                  Integrated HTML5 Video APIs with WebSockets to lock play,
                  pause, and seek actions across all live clients.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border-l-4 border-indigo-500 pl-4 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  ShopEase – Modern E-Commerce Application
                </h3>
                <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 mt-1 sm:mt-0 inline-block self-start">
                  React.js • Tailwind CSS • Vercel
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-600 text-sm mt-2 space-y-1 leading-relaxed">
                <li>
                  Engineered an intuitive frontend web store focused on
                  ultra-fast asset navigation and quick loading times.
                </li>
                <li>
                  Implemented dynamic catalog filters, responsive UI grids,
                  persistent state carts, and sleek checkout flows.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Veloura Café – Boutique Business Landing Page
                </h3>
                <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 mt-1 sm:mt-0 inline-block self-start">
                  HTML5 • Tailwind • JavaScript
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-600 text-sm mt-2 space-y-1 leading-relaxed">
                <li>
                  Created a high-end, fully responsive single-page marketing
                  layout for a localized premium venue.
                </li>
                <li>
                  Designed fluid scroll animations, an interactive digital menu,
                  and integrated vector map sections.
                </li>
              </ul>
            </div>
          </section>

          {/* EDUCATION & EXPERIENCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-1 flex items-center gap-2">
                <span className="text-blue-600">🎓</span> Education
              </h2>
              <div className="mt-3">
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                  Bachelor of Commerce (B.Com)
                </h3>
                <p className="text-blue-600 text-xs sm:text-sm font-medium">
                  Mumbai University — First Year (F.Y.B.Com)
                </p>
                <p className="text-slate-500 text-xs mt-1 font-mono">
                  2025 – Present
                </p>
                <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                  Coursework: Business Management, Financial Analysis, and
                  Market Structures.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-200 pb-1 flex items-center gap-2">
                <span className="text-blue-600">🏆</span> Experience &
                Achievements
              </h2>
              <ul className="list-disc list-inside text-slate-600 text-xs sm:text-sm mt-3 space-y-2 leading-relaxed">
                <li>
                  Collaborated on freelance design briefs executing modern,
                  trustworthy UI assets matching target guidelines.
                </li>
                <li>
                  Built modular web interface elements within interactive cloud
                  sandboxes to run rapid live product demonstrations.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
