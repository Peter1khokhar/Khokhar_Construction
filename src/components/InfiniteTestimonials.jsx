import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Responsive Testimonial Carousel with centered heading

const TESTIMONIALS = [
  {
    name: "Parul Mahajan",
    role: "Owner of Mahajan Hospital",
    quote:
      "Khokhar Construction delivered exactly what we needed—on time and with excellent communication. The site team was professional and safety-focused.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6pQ07raK0eFP8upSDOf5XLJDeI16K9I_AQ&s",
  },
  {
    name: "Jugal Kishore",
    role: "Owner, Noor Villas",
    quote:
      "From excavation to finishing, the workmanship was superb. Transparent billing and zero surprises—highly recommended!",
    avatar:
      "https://media.istockphoto.com/id/177383755/photo/indian-businessman.jpg?s=612x612&w=0&k=20&c=WPeUUHVTPeYxemSCQL-s9GIzy5vYZRB_ozmA35blK9Q=",
  },
  {
    name: "Rohit Sharma",
    role: "Owner of Outlook Showroom",
    quote:
      "They moved fast without compromising quality. Our warehouse renovation finished a week early and under budget.",
    avatar:
      "https://thumbs.dreamstime.com/b/handsome-indian-businessman-11093951.jpg",
  },
  {
    name: "Dr. Amit Malhotra",
    role: "Owner of Pgi Hospital",
    quote:
      "Impressed by their coordination with our design team. Detailing and finishes stood out across the project.",
    avatar:
      "https://static.toiimg.com/thumb/imgsize-867355,msid-108969018/108969018.jpg?width=500&resizemode=4",
  },
];

export default function TestimonialCarousel({ autoPlayMs = 3500 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);
  const pressTimer = useRef(null);
  const itemCount = TESTIMONIALS.length;

  const goTo = (i) => setIndex(((i % itemCount) + itemCount) % itemCount);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (paused || itemCount <= 1) return;
    const id = setInterval(next, autoPlayMs);
    return () => clearInterval(id);
  }, [index, paused, autoPlayMs, itemCount]);

  useEffect(() => {
    const onVisibility = () => setPaused((p) => (document.hidden ? true : p));
    document.addEventListener("visibilitychange", onVisibility);

    const obs = new IntersectionObserver(
      ([entry]) => setPaused((p) => (entry.isIntersecting ? p : true)),
      { threshold: 0.2 }
    );
    if (containerRef.current) obs.observe(containerRef.current);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      obs.disconnect();
    };
  }, []);

  const handleTouchStart = () => {
    setPaused(true);
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = setTimeout(() => setPaused(true), 60);
  };
  const handleTouchEnd = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    setPaused(false);
  };

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  const handleMouseDown = () => setPaused(true);
  const handleMouseUp = () => setPaused(false);

  const dragThreshold = 60;

  const variants = useMemo(
    () => ({
      enter: { opacity: 0, x: 40 },
      center: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -40 },
    }),
    []
  );

  return (
    <section
      ref={containerRef}
      className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12"
      aria-label="Client testimonials"
    >
      {/* Centered heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        <span className="text-blue-600">Our</span> Testimonials
      </h2>

      <div
        className="relative select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={index}
              drag="x"
              dragElastic={0.2}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setPaused(true)}
              onDragEnd={(e, info) => {
                const offset = info.offset.x;
                if (offset < -dragThreshold) next();
                else if (offset > dragThreshold) prev();
                setPaused(false);
              }}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="p-6 md:p-8"
              aria-live="polite"
            >
              <Slide {...TESTIMONIALS[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile nav buttons */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:hidden pointer-events-none">
          <button
            onClick={prev}
            aria-label="Previous"
            className="pointer-events-auto rounded-full bg-white/90 backdrop-blur px-3 py-2 text-base shadow"
          >
            ◀
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="pointer-events-auto rounded-full bg-white/90 backdrop-blur px-3 py-2 text-base shadow"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gray-900" : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Slide({ name, role, quote, avatar }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[120px,1fr] gap-5 md:gap-8 items-center">
      <img
        src={avatar}
        alt={`${name} avatar`}
        className="h-24 w-24 md:h-28 md:w-28 rounded-2xl object-cover ring-1 ring-gray-200"
        loading="lazy"
      />
      <div>
        <svg
          aria-hidden
          className="h-6 w-6 opacity-20 mb-2"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.17 6.17C4.5 8.83 3 12 3 16h6V8H6.83c.11-.66.45-1.28 1-1.83l-.66-.66zM14.17 6.17C11.5 8.83 10 12 10 16h6V8h-2.17c.11-.66.45-1.28 1-1.83l-.66-.66z" />
        </svg>
        <p className="text-lg md:text-xl leading-relaxed">{quote}</p>
        <div className="mt-4 flex items-center gap-3">
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
