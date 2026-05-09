import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Facebook, Phone, Mail } from "lucide-react";
import vpmLogo from "../../assets/VpmLogo.png";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const socials = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/vpm.rz.shah.official?igsh=b2hka2ptZmo3cms4", bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
  { Icon: Facebook, href: "https://wwww.facebook.com", bg: "bg-[#1877F2]" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/vpm-s-r-z-shah-college-of-arts-science-and-commerce/", bg: "bg-[#0A66C2]" },
  { Icon: Youtube, href: "https://youtube.com/@vpmstudio7604?si=Ze2UN13Wp6YHTDf2", bg: "bg-[#FF0000]" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(120deg, #142A5D 0%, #1e3e8f 55%, #2f5ac7 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
      <div className="absolute bottom-0 left-10 w-56 h-56 rounded-full bg-white/[0.04]" />
      <div className="absolute inset-0 shadow-[inset_0_80px_120px_rgba(0,0,0,0.35)]" />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-10 sm:py-12"
      >
        {/* TOP: BRAND + MAP */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* LEFT */}
          <motion.div variants={item}>
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-3 mb-4">
              <img src={vpmLogo} className="w-20 h-20 object-contain mx-auto lg:mx-0" />
              <div>
                <p
                  style={{ fontFamily: "Philosopher" }}
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold font-serif leading-tight"
                >
                  VPM's R.Z. SHAH COLLEGE
                </p>
                <p
                  style={{ fontFamily: "Kaushan Script", letterSpacing: "1px" }}
                  className="text-[#F2A20A] text-lg sm:text-xl lg:text-2xl transition-all duration-300"
                >
                  alumni
                </p>
              </div>
            </div>

            {/* SOCIAL */}
<div className="flex justify-center md:justify-start gap-2">
                {socials.map((social, i) => {
                const Icon = social.Icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href || undefined}
                    target={social.href ? "_blank" : undefined}
                    rel="noreferrer"
                    whileHover={social.href ? { scale: 1.1, y: -3 } : {}}
                    whileTap={social.href ? { scale: 0.95 } : {}}
                    onClick={social.href ? undefined : (e) => e.preventDefault()}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${social.href
                        ? `${social.bg} cursor-pointer shadow-md`
                        : "bg-white/10 cursor-not-allowed opacity-30"
                      }`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div variants={item}>
            <p className="text-xs uppercase tracking-wider mb-2">Find Us</p>
            <div className="rounded-lg overflow-hidden border border-white/20 shadow">
              <iframe
                src="https://www.google.com/maps?q=VPM%20R.Z.%20Shah%20College&output=embed"
                width="140%"
                height="160"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/W6s5kst64tB7RYiPA"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-1 text-xs text-[#EBAB09] hover:underline"
            >
              View on Google Maps →
            </a>
          </motion.div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap justify-center gap-3 text-lg text-white/80 text-center items-center">
          <span className="flex items-center gap-1 hover:text-white cursor-pointer">
            <Phone className="w-4 h-4" />
            022-25637313
          </span>
          <span>|</span>
          <span className="flex items-center gap-1 hover:text-white cursor-pointer">
            <Mail className="w-4 h-4" />
            vpmdcol@yahoo.co.in
          </span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer">Staff Directory</span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer">VAA Shop</span>
          <span>|</span>
          <span className="hover:text-white cursor-pointer">FAQ</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;