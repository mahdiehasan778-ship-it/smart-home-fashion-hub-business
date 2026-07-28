// src/components/HeroCarousel.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { heroSlides } from "../data/heroSlides";

const AUTOPLAY_MS = 6000;

const THEME = {
  cyan: {
    accentText: "text-[#00E5C7]",
    accentBg: "bg-[#00E5C7]",
    accentBorder: "border-[#00E5C7]",
    orbFrom: "from-[#00E5C7]/40",
    orbTo: "to-[#16305C]/0",
    ring: "ring-[#00E5C7]/30",
  },
  gold: {
    accentText: "text-[#E7A96B]",
    accentBg: "bg-[#E7A96B]",
    accentBorder: "border-[#E7A96B]",
    orbFrom: "from-[#E7A96B]/40",
    orbTo: "to-[#16305C]/0",
    ring: "ring-[#E7A96B]/30",
  },
};

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slide = heroSlides[index];
  const theme = THEME[slide.theme] ?? THEME.cyan;

  const goTo = useCallback(
    (next) => {
      setDirection(next > index || (index === heroSlides.length - 1 && next === 0) ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const goNext = useCallback(() => {
    goTo((index + 1) % heroSlides.length);
  }, [goTo, index]);

  const goPrev = useCallback(() => {
    goTo((index - 1 + heroSlides.length) % heroSlides.length);
  }, [goTo, index]);

  useEffect(() => {
    if (isPaused) return undefined;
    timerRef.current = setTimeout(goNext, AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [goNext, isPaused, index]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  return (
    <section
      className="relative overflow-hidden bg-[#0B1B3A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured promotions"
    >
      {/* ambient background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20 lg:px-8">
        {/* LEFT: text content */}
        <div className="relative z-10 order-2 md:order-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id + "-text"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span
                className={`inline-flex items-center gap-2 rounded-full border ${theme.accentBorder} px-3 py-1 font-['Space_Mono',monospace] text-xs tracking-widest ${theme.accentText}`}
              >
                {slide.eyebrow}
              </span>

              <h1 className="mt-5 font-['Space_Grotesk',sans-serif] text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
                {slide.heading}
                <br />
                <span className={theme.accentText}>{slide.headingAccent}</span>
              </h1>

              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                {slide.copy}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={slide.primaryCta.href}
                  className={`rounded-md ${theme.accentBg} px-6 py-3 text-sm font-bold tracking-wide text-[#0B1B3A] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                >
                  {slide.primaryCta.label}
                </a>
                <a
                  href={slide.secondaryCta.href}
                  className="rounded-md border border-slate-500 px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {slide.secondaryCta.label}
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {slide.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs font-medium text-slate-400"
                  >
                    <ShieldCheck className={`h-4 w-4 ${theme.accentText}`} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: image with glow-orb signature element */}
        <div className="relative order-1 flex items-center justify-center md:order-2">
          <div
            className={`absolute h-72 w-72 rounded-full bg-gradient-to-br ${theme.orbFrom} ${theme.orbTo} blur-3xl transition-colors duration-700 sm:h-96 sm:w-96`}
            aria-hidden="true"
          />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id + "-image"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl ring-4 ${theme.ring} shadow-2xl`}
            >
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* controls */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/5 p-2 text-white backdrop-blur transition-colors hover:bg-white/15 md:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/5 p-2 text-white backdrop-blur transition-colors hover:bg-white/15 md:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="relative z-20 flex justify-center gap-2 pb-6">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
              i === index ? `w-8 ${theme.accentBg}` : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}