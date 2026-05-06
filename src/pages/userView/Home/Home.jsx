import { useState, useEffect, useRef } from "react";
import {
  Tag,
  ArrowRight,
  Users,
  Calendar,
  Award,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

//maim hero video
// import HeroVideo from "../../../../public/icons/HeroVideo.mp4"

//video with committee
import HeroVideo from "../../../assets/MCvideo.mp4"
import { FloatingDockHelper } from "./FloatingDock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance.js";





const useIntersection = (
  threshold = 0.12,
  rootMargin = "-15% 0px -10% 0px",
) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

const Home = () => {
  const [heroRef, heroVisible] = useIntersection(0.1, "0px");
  const [eventsRef, eventsVisible] = useIntersection(0.12, "-10% 0px -5% 0px");
  // const [newsRef, newsVisible] = useIntersection(0.12, "-10% 0px -5% 0px");
  // const [donationRef, donationVisible] = useIntersection(
  //   0.12,
  //   "-10% 0px -5% 0px",
  // );
  const [careerRef, careerVisible] = useIntersection(0.12, "-10% 0px -5% 0px");
  const [socialRef, socialVisible] = useIntersection(0.12, "-10% 0px -5% 0px");

  // ─── LOCAL state for home-page events ───────────────────────────────────
  // Deliberately NOT using shared Redux eventList — UserEvents writes to the
  // same slice (filter=all), which would clobber this and make _id undefined,
  // breaking the ?eventId= link and the scroll-to-event feature.
  const [homeEvents, setHomeEvents] = useState([]);
  const [homeEventsLoading, setHomeEventsLoading] = useState(true);

  useEffect(() => {
    const fetchHomeEvents = async () => {
      try {
        setHomeEventsLoading(true);
        const { data } = await axiosInstance.get("/api/user/events/filter", {
          params: { filter: "upcoming", page: 1, limit: 10 },
        });
        if (data.success) {
          setHomeEvents(data.events || []);
        }
      } catch (e) {
        console.error("Failed to fetch home events", e);
      } finally {
        setHomeEventsLoading(false);
      }
    };
    fetchHomeEvents();
  }, []);

  const featuredEvent = homeEvents[0] || null;
  const sideEvents = homeEvents.slice(1, 3);
  // ────────────────────────────────────────────────────────────────────────

  // const galleryRef = useRef(null);
  // const [galleryVisible, setGalleryVisible] = useState(false);

  // useEffect(() => {
  //   const el = galleryRef.current;
  //   if (!el) return;

  //   // const observer = new IntersectionObserver(
  //   //   ([entry]) => {
  //   //     if (entry.isIntersecting) {
  //   //       setGalleryVisible(true);
  //   //       observer.disconnect();
  //   //     }
  //   //   },
  //   //   { threshold: 0.12, rootMargin: "-10% 0px -5% 0px" },
  //   // );

  //   observer.observe(el);
  //   return () => observer.disconnect();
  // }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-[60vh] sm:min-h-[75vh] md:min-h-[calc(100vh-80px)] lg:min-h-[calc(135vh-197px)] overflow-hidden text-white"
      >
        {/* 🎥 BACKGROUND VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto" // ← tells browser to download immediately
          poster="/hero-poster.jpg" // ← shows image while video loads (add a screenshot frame)
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>

        {/* CONTENT */}
        <div className="container mx-auto px-4 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* TITLE */}
            <h1
              className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold mb-3 mt-8 sm:mt-10 md:mt-12 lg:mt-15 leading-tight tracking-tight transition-all duration-700
  ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <span className="drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">
                Connect. Inspire.
              </span>
              <br />
              <span className="text-yellow-400 drop-shadow-[0_0_16px_rgba(255,215,0,0.9)]">
                Succeed Together.
              </span>
            </h1>

            {/* <h1 className={font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold mb-3 mt-8 sm:mt-10 md:mt-12 lg:mt-15 leading-tight tracking-tight transition-all duration-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] ${ heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6" }} > Connect. Inspire. <br /> <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(255,215,0,0.8)]"> Succeed Together. </span> </h1> */}

            {/* SUBTEXT */}
            <p
              className={`text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto transition-all duration-700 delay-100 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              Join our thriving community of graduates making an impact
              worldwide.
            </p>

            {/* BUTTON */}
            <div
              className={`flex justify-center mb-10 sm:mb-14 transition-all duration-700 delay-200 ${heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              <Link
                to="/user/community"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold flex items-center gap-2 justify-center transition-all duration-300 text-sm sm:text-base"
                style={{
                  background: "linear-gradient(135deg, #EBAB09, #f4c430)",
                  boxShadow: "0 6px 20px rgba(235,171,9,0.35)",
                }}
              >
                Explore Alumni Network
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0 leading-none overflow-hidden">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ display: "block", marginBottom: "-1px" }}
          >
            <path
              d="M0 80L60 70C120 60 240 50 360 45C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V80H0Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>
      {/* EVENTS SECTION */}
      <section id="events" ref={eventsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 transition-all duration-700 ${eventsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <div>
              <span className="text-[#EBAB09] font-semibold text-sm uppercase tracking-wider">
                Upcoming Events
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#142A5D] mt-2">
                Connect in Person
              </h2>
            </div>
            <Link
              to="/user/events"
              className="mt-4 md:mt-0 px-6 py-3 rounded-lg border border-[#142A5D] text-[#142A5D] font-medium hover:bg-[#142A5D] hover:text-white transition"
            >
              View All Events
              <ArrowRight className="inline w-4 h-4 ml-2" />
            </Link>
          </div>

          {homeEventsLoading ? (
            <div className="flex items-center justify-center py-24 text-slate-400 text-lg">
              Loading events...
            </div>
          ) : homeEvents.length === 0 ? (
            <div className="flex items-center justify-center py-24 text-slate-400 text-lg">
              No upcoming events yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* FEATURED EVENT */}
              {featuredEvent && featuredEvent._id && (
                <div
                  className={`lg:row-span-2 relative rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ease-out ${eventsVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                    }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142A5D]/95 via-[#142A5D]/70 to-transparent" />
                  <div className="relative min-h-[520px] p-10 flex flex-col justify-end">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#EBAB09] text-white text-sm font-semibold w-fit mb-4">
                      Featured Event
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-white mb-4">
                      {featuredEvent.title}
                    </h3>
                    <div className="flex flex-wrap gap-5 text-white/80 mb-6 text-sm">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredEvent.date).toDateString()}
                        {featuredEvent.time && `, ${featuredEvent.time}`}
                      </span>
                      {featuredEvent.category && (
                        <span className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          {featuredEvent.category}
                        </span>
                      )}
                      {featuredEvent.isVirtual !== undefined && (
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {featuredEvent.isVirtual
                            ? "Virtual Event"
                            : "In Person"}
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/user/events?eventId=${featuredEvent._id}`}
                      className="w-fit px-8 py-4 rounded-xl bg-[#EBAB09] text-white font-semibold hover:opacity-90 transition"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              )}

              {/* SIDE EVENTS */}
              {sideEvents.map(
                (event, index) =>
                  event._id && (
                    <div
                      key={event._id}
                      className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 ${eventsVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                        }`}
                      style={{ transitionDelay: `${200 + index * 150}ms` }}
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-40 h-40 overflow-hidden shrink-0">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <h3 className="font-serif text-lg font-bold text-[#142A5D] mb-3">
                            {event.title}
                          </h3>
                          <div className="space-y-2 text-slate-600 text-sm mb-4">
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-[#EBAB09]" />
                              {new Date(event.date).toDateString()}
                              {event.time && `, ${event.time}`}
                            </span>
                            {event.category && (
                              <span className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-[#EBAB09]" />
                                {event.category}
                              </span>
                            )}
                            {event.isVirtual !== undefined && (
                              <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#EBAB09]" />
                                {event.isVirtual
                                  ? "Virtual Event"
                                  : "In Person"}
                              </span>
                            )}
                          </div>
                          <Link
                            to={`/user/events?eventId=${event._id}`}
                            className="inline-block px-4 py-2 rounded-lg border border-[#142A5D] text-[#142A5D] text-sm font-medium hover:bg-[#142A5D] hover:text-white transition"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          )}
        </div>
      </section>

      {/* CAREER SECTION */}
      <section ref={careerRef} className="py-16 mt5 bgwhite">
        <div
          className={`max-w-6xl mx-auto px-6 text-center mb-10 transition-all duration-700 ${careerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#142A5D]">
            Unlock Your Career Potential
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl mt-2 leading-relaxed">
            From internships to full-time roles, discover opportunities designed
            for our alumni community.
            <br /> Take the next step toward shaping your future.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`border border-neutral-300 rounded-lg p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center transition-all duration-700 ${careerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div
              className={`w-full h-full transition-all duration-700 ${careerVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
                }`}
              style={{ transitionDelay: "250ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=650&auto=format"
                alt="Career Opportunities"
                className="w-full h-[260px] md:h-[320px] object-cover rounded-md"
                loading="lazy"
              />
            </div>

            <div
              className={`transition-all duration-700 ${careerVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
                }`}
              style={{ transitionDelay: "350ms" }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
                Career Opportunities
              </h2>
              <p className="text-neutral-600 mt-3 text-lg leading-relaxed">
                Explore job openings, internships, and mentorship resources to
                help you grow professionally and connect with alumni in top
                industries.
              </p>
              <Link
                to="/user/jobs"
                className="inline-block mt-6 text-yellow-500 font-semibold text-lg hover:underline"
              >
                Explore job listings →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section
        ref={socialRef}
        className="py-28 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[20vw] font-black text-slate-100 leading-none tracking-tighter whitespace-nowrap"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            SOCIAL
          </span>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-700 ${socialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="text-[#EBAB09] font-semibold text-sm uppercase tracking-widest">
              Stay Connected
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#142A5D] mt-2">
              Follow Our Community
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base md:text-lg">
              Join thousands of alumni across our social channels — share moments,
              celebrate wins, and never miss an update.
            </p>
          </div>

          <div
            className={`grid grid-cols-12 gap-4 transition-all duration-700 ${socialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .marquee-track { display: flex; width: max-content; }
        .marquee-track-anim { animation: marquee 18s linear infinite; }
        .marquee-track:hover, .marquee-track-anim:hover {
          animation-play-state: paused;
        }
        @keyframes fb-float {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-8px) rotate(-6deg); }
        }
        @keyframes yt-scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/vpm.rz.shah.official?igsh=b2hka2ptZmo3cms4"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-12 md:col-span-5 group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ minHeight: "420px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop"
                alt="Instagram"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#F58529]/80 via-[#DD2A7B]/70 to-[#8134AF]/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div
                className="relative p-8 flex flex-col justify-between"
                style={{ minHeight: "420px" }}
              >
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">Instagram</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white -rotate-45" />
                  </div>
                </div>

                <div>
                  <p className="text-white/90 text-sm leading-relaxed max-w-xs mb-5">
                    Campus life, alumni spotlights & behind-the-scenes moments.
                  </p>
                  <div className="text-white/60 text-sm font-medium">
                    @vpm.rz.shah.official
                  </div>
                </div>
              </div>
            </a>

            {/* Right column */}
            <div className="col-span-12 md:col-span-7 flex flex-col gap-4">
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/vpm-s-r-z-shah-college-of-arts-science-and-commerce/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl overflow-hidden p-8 hover:-translate-y-1 hover:shadow-[0_25px_60px_-10px_rgba(10,102,194,0.6)] transition-all duration-500"
                style={{
                  minHeight: "170px",
                  background: "linear-gradient(135deg, #0A66C2 0%, #0952A5 40%, #063E85 100%)",
                }}
              >
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute rounded-full border border-white/20"
                    style={{
                      width: `${140 + i * 90}px`,
                      height: `${140 + i * 90}px`,
                      top: `-${60 + i * 45}px`,
                      left: `-${60 + i * 45}px`,
                      animation: `ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite`,
                      animationDelay: `${i * 0.45}s`,
                      opacity: 0.5 - i * 0.1,
                    }}
                  />
                ))}
                <div
                  className="absolute -top-10 -left-10 w-52 h-52 rounded-full blur-3xl"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
                    animation: "pulse 2.5s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)",
                    animation: "shimmer 2s linear infinite",
                  }}
                />
                <div className="absolute right-0 top-0 bottom-0 w-64 opacity-[0.07]">
                  <div
                    className="w-full h-full bg-white"
                    style={{ clipPath: "polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                  />
                </div>
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center justify-center w-14 h-14">
                        <span
                          className="absolute inset-0 rounded-xl bg-white/30 animate-ping"
                          style={{ animationDuration: "1.8s" }}
                        />
                        <span
                          className="absolute inset-[-4px] rounded-xl bg-white/15 animate-ping"
                          style={{ animationDuration: "1.8s", animationDelay: "0.3s" }}
                        />
                        <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                          <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-extrabold text-xl tracking-tight leading-none">LinkedIn</p>
                        <p className="text-white/50 text-xs tracking-[0.15em] uppercase mt-1">Alumni Network</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0A66C2] -rotate-45 transition-colors duration-300" />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl">
                    <div className="marquee-track marquee-track-anim">
                      {[...Array(2)].map((_, di) => (
                        <div key={di} className="flex gap-2 pr-2">
                          {["💼 Job Openings", "📈 Career Growth", "🤝 Referrals", "🏢 Industry News", "🎯 Skill Building", "🌐 Networking"].map((item) => (
                            <span
                              key={item}
                              className="bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit">
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80"
                        style={{ animationDuration: "1.2s" }}
                      />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
                    </span>
                    <span className="text-white/90 text-xs font-semibold">Active community</span>
                  </div>
                </div>
              </a>

              {/* FACEBOOK + YOUTUBE row */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {/* FACEBOOK */}
                <a
                  href="https://facebook.com/YOUR_PAGE_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="group relative rounded-3xl overflow-hidden cursor-pointer"
style={{ minHeight: "220px", background: "#1877F2" }}
                >
                  {/* Big watermark "f" */}
                  <div
                    className="absolute -bottom-6 right-6 text-[180px] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:opacity-100"
                    style={{
                      color: "rgba(255,255,255,0.18)",
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      letterSpacing: "-8px",
                    }}
                  >
                    f
                  </div>
                  {/* Hover glow orb */}
                  <div
                    className="absolute -top-10 -left-10 w-52 h-52 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                      filter: "blur(20px)",
                    }}
                  />


                  {/* Subtle top gradient shine */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                  {/* Hover shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
                      animation: "shimmer 2s linear infinite",
                    }}
                  />

<div className="relative z-10 p-5 sm:p-7 flex flex-col justify-between h-full" style={{ minHeight: "180px" }}>
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* Official Facebook "f" badge */}
                        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                          <svg viewBox="0 0 36 36" className="w-6 h-6" fill="#1877F2">
                            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" fill="#1877F2" />
                            <path d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" fill="white" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg leading-tight">Facebook</p>
                          <p className="text-white/60 text-xs mt-0.5">Follow our page</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 text-white -rotate-45" />
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className="mt-auto pt-4">
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        Events, announcements & alumni highlights from our community.
                      </p>
                      {/* Reaction row */}
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-1">
                          {["👍", "❤️", "🎉"].map((emoji, i) => (
                            <span
                              key={i}
                              className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-xs"
                            >
                              {emoji}
                            </span>
                          ))}
                        </div>
                        <span className="text-white/60 text-xs">Alumni are reacting</span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* YOUTUBE */}
                <a
                  href="https://youtube.com/@vpmstudio7604?si=Ze2UN13Wp6YHTDf2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-[0_25px_60px_-10px_rgba(255,0,0,0.4)] transition-all duration-500"
style={{ minHeight: "180px", background: "#0f0f0f" }}                >
                  {/* Red bottom glow */}
                  <div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse, rgba(255,0,0,0.4) 0%, transparent 70%)",
                      animation: "pulse 3s ease-in-out infinite",
                      filter: "blur(16px)",
                    }}
                  />

                  {/* Scan line animation */}
                  <div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent pointer-events-none"
                    style={{ animation: "yt-scan 4s linear infinite" }}
                  />

                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />

                  {/* Hover shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)",
                      animation: "shimmer 2s linear infinite",
                    }}
                  />

                  <div className="relative z-10 p-5 sm:p-7 flex flex-col justify-between h-full" style={{ minHeight: "180px" }}>                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* Official YouTube logo pill */}
                        <div className="flex items-center gap-1.5 bg-[#FF0000] rounded-lg px-3 py-2 shadow-[0_0_16px_rgba(255,0,0,0.5)]">
                          {/* YT play icon */}
                          <svg viewBox="0 0 90 63" className="h-4 w-auto" fill="white">
                            <path d="M88 9.8A11.3 11.3 0 0 0 80.2 2C73.2 0 45 0 45 0S16.8 0 9.8 2A11.3 11.3 0 0 0 2 9.8C0 16.8 0 31.5 0 31.5s0 14.7 2 21.7A11.3 11.3 0 0 0 9.8 61C16.8 63 45 63 45 63s28.2 0 35.2-2A11.3 11.3 0 0 0 88 53.2C90 46.2 90 31.5 90 31.5S90 16.8 88 9.8z" />
                            <path d="M36 45L59.3 31.5 36 18z" fill="#FF0000" />
                          </svg>
                          <span className="text-white font-bold text-sm tracking-tight">YouTube</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-500/60 group-hover:bg-red-500/10 transition-all flex-shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-white -rotate-45 transition-colors" />
                      </div>
                    </div>

                    {/* Channel identity */}
                    <div className="mt-auto pt-4">
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        Event recaps, convocations, cultural fests & campus films.
                      </p>
                      {/* Subscribe CTA style */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 group-hover:bg-red-500 transition-colors duration-300">
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-[#FF0000] group-hover:text-white transition-colors" >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span className="text-[#0f0f0f] group-hover:text-white text-xs font-bold transition-colors">Subscribe</span>
                        </div>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-white/40 text-xs">@vpmstudio7604</span>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
