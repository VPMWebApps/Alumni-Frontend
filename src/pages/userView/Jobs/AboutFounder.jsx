import React from "react";
import NBHKulkarniImage from "../../../assets/nbh_kulkarniNewImage.jpg";
import son1 from "../../../assets/shreRamKULKARNI.jpg";
import son2 from "../../../assets/shrikrishna.jpg";
import indoIsraelVD from "../../../assets/vid_flag.mp4";
import { useRef, useEffect } from "react";

const articles = [
  {
    tag: "Diplomacy",
    title: "NBH Kulkarni and the Early Foundations of Indo-Israeli Relations",
    excerpt:
      "An insight into how early diplomatic efforts helped shape India–Israel ties and laid the groundwork for long-term cooperation.",
    href: "https://www.csp.indica.in/nbh-kulkarni-the-man-who-nurtured-indo-israeli-ties-from-its-infancy/",
  },
  {
    tag: "Economy",
    title: "India–Israel Business Synergies and Strategic Partnerships",
    excerpt:
      "A closer look at how India and Israel collaborate across sectors like technology, agriculture, and trade to drive mutual growth.",
    href: "https://www.gatewayhouse.in/india-israel-business-synergies/",
    // ⚠️ fixed link (removed #_ednref13)
  },
  {
    tag: "Industry",
    title: "Technochem Group: Industrial Growth and Global Collaboration",
    excerpt:
      "Exploring the journey of Technochem Group and its contributions to industrial development and international partnerships.",
    href: "http://www.technochemgroup.com/about-us.html",
  },
  {
    tag: "Legacy",
    title: "Humble Beginnings: The Story Behind a Remarkable Journey",
    excerpt:
      "A look into the early life and achievements that shaped a legacy of persistence, vision, and impact.",
    href: "https://www.dnaindia.com/mumbai/report-humble-beginnings-1872198",
  },
];

const AboutFounder = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <div className="w-full bg-white">
      {/* ================= HERO / FOUNDER ================= */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-visible">
        {/* ── BACKGROUND VIDEO ── */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={indoIsraelVD}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* ── OVERLAYS ── */}
        <div className="absolute inset-0 bg-black/65 md:hidden" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

        {/* ── BOTTOM FADE into white ── */}
        <div className="absolute bottom-0 w-full h-32 sm:h-40 md:h-56 bg-gradient-to-t from-white to-transparent z-10" />

        {/* ── HERO CONTENT ──
            Extra bottom padding (pb-36 mobile / pb-44 md) ensures the text
            is never hidden behind the overlapping cards.
        ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 pt-16 pb-36 sm:pb-40 md:pb-44 md:pt-0 md:min-h-[80vh] flex flex-col justify-center">
          <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-6 md:gap-10">
            {/* RIGHT: Portrait */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <img
                src={NBHKulkarniImage}
                alt="NBH Kulkarni"
                className="
                  h-[170px] sm:h-[240px] md:h-[370px] lg:h-[420px]
                  w-auto object-contain
                  drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]
                "
              />
            </div>

            {/* LEFT: Text */}
            <div className="text-white space-y-3 sm:space-y-4 md:space-y-6 order-2 md:order-1">
              <p className="uppercase tracking-widest text-[10px] sm:text-xs md:text-sm text-gray-300">
                Founder & Chairman Emeritus
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Late.Shri N. B. H. Kulkarni
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-medium">
                The Man Who Nurtured Indo–Israeli Ties
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-lg">
                A pioneering force in building early diplomatic and industrial
                bridges between India and Israel, shaping collaborations that
                continue to influence innovation, agriculture, and technology
                partnerships today.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE CARDS — half inside / half outside ── */}
        <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-30 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-7xl mx-auto flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-2 sm:overflow-visible sm:pb-0 scrollbar-hide">
            {articles.map((article, i) => (
              <div
                key={i}
                className="
               bg-white rounded-2xl border border-gray-200
               shadow-[0_8px_30px_rgba(0,0,0,0.12)]
               p-4 sm:p-5
               flex flex-col
               justify-between
               gap-2 sm:gap-3
               hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)]
               hover:-translate-y-1
               transition-all duration-300
           
               w-[80vw] sm:w-auto   
               h-[170px] sm:h-auto 
           
               snap-start flex-shrink-0 sm:flex-shrink
             "
              >
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {article.tag}
                </p>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
                  {article.excerpt}
                </p>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline transition mt-auto pt-1"
                >
                  Read Full Article
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPACER: half card height + breathing room per breakpoint ──
          mobile  (1-col cards ~170px tall) → need ~85px + gap  → h-28
          sm      (2-col cards ~160px tall) → need ~80px + gap  → h-24
          lg      (4-col cards ~155px tall) → need ~78px + gap  → h-20
      ── */}
      <div className="h-28 sm:h-24 lg:h-20" />

      {/* ================= SONS ================= */}
      <section className="pb-20 md:pb-32 mt-4 md:mt-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-12 md:mb-20">
            <h2
              style={{ fontFamily: "serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
            >
              Carrying the Legacy Forward
            </h2>
            <p className="text-gray-500 mt-3 md:mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The next generation continues to strengthen the foundation with
              innovation, leadership, and long-term vision.
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 gap-8 md:gap-14">
            {/* SON 1 — SriKrishna */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.15)] transition duration-500">
              <div className="flex flex-col items-center text-center">
                <img
                  src={son2}
                  alt="SriKrishna Kulkarni"
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-top mb-6 md:mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                />
                <h3 className="text-xl md:text-3xl font-semibold text-gray-900 tracking-wide">
                  SriKrishna Kulkarni
                </h3>
                <p className="text-indigo-500 font-medium text-base md:text-lg mt-2 tracking-wide">
                  Trustee
                </p>
                <div className="w-10 h-[2px] bg-[#8B6B2E] my-4 opacity-60" />
                <p className="text-gray-600 mt-2 text-sm md:text-lg leading-relaxed max-w-md">
                  Focused on operational excellence and sustainability, ensuring
                  that the organization continues to grow while preserving its
                  core values and long-standing legacy.
                </p>
              </div>
            </div>

            {/* SON 2 — SriRam */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.15)] transition duration-500">
              <div className="flex flex-col items-center text-center">
                <img
                  src={son1}
                  alt="SriRam Kulkarni"
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mb-6 md:mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                />
                <h3 className="text-xl md:text-3xl font-semibold text-gray-900 tracking-wide">
                  SriRam Kulkarni
                </h3>
                <p className="text-indigo-500 font-medium text-base md:text-lg mt-2 tracking-wide">
                  Vice Chairman
                </p>
                <div className="w-10 h-[2px] bg-[#8B6B2E] my-4 opacity-60" />
                <p className="text-gray-600 mt-2 text-sm md:text-lg leading-relaxed max-w-md">
                  Driving strategic growth and digital transformation, bringing
                  a forward-thinking vision that expands the organization's
                  reach while aligning with global advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFounder;
