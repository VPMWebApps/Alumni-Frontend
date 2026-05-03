import { Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vpmLogo from "../../assets/VpmLogo.png";
import { Phone, Mail } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Youtube, href: "https://youtube.com" },
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
          background:
            "linear-gradient(120deg, #142A5D 0%, #1e3e8f 55%, #2f5ac7 100%)",
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
          {" "}
          {/* LEFT */}
          <motion.div variants={item}>
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-3 mb-4">
              {" "}
              <img
                src={vpmLogo}
                className="w-20 h-20 object-contain mx-auto lg:mx-0"
              />{" "}
              <div>
                <p
                  style={{ fontFamily: "Philosopher" }}
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold font-serif leading-tight"
                >
                  VPM's R.Z. SHAH COLLEGE
                </p>

                <p
                  style={{
                    fontFamily: "Kaushan Script",
                    letterSpacing: "1px",
                  }}
                  className="text-[#F2A20A] text-lg sm:text-xl lg:text-2xl transition-all duration-300"
                >
                  alumni
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
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
              ></iframe>
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
          {/* PHONE */}
          <span className="flex items-center gap-1 hover:text-white cursor-pointer">
            <Phone className="w-4 h-4" />
            022-25637313
          </span>

          <span>|</span>

          {/* EMAIL */}
          <span className="flex items-center gap-1 hover:text-white cursor-pointer">
            <Mail className="w-4 h-4" />
            vpmdcol@yahoo.co.in
          </span>

          <span>|</span>

          <span className="hover:text-white cursor-pointer">
            Staff Directory
          </span>

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
