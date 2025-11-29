import React, { useEffect, useMemo, useRef, useState } from 'react';

const people = [
  { name: 'Col Rohit Gogna', role: 'FOUNDER & CEO', img: '/img/RG Pic.png' },
  { name: 'Ms. Shipra Prakash', role: 'CO-FOUNDER & DIRECTOR', img: '/img/shipra2.jpeg' },
  { name: 'Prof. Suresh Bhalla', role: 'MENTOR & TECH HEAD', img: '/img/SBimg.png' },
  { name: 'Prof. Alok Madan', role: 'MENTOR & TECH HEAD', img: '/img/madan2.jpg' },
];

const Card = ({ p, active, width }) => (
  <div className="shrink-0" style={{ width }}>
    <div className={`rounded-2xl p-[1px] bg-gradient-to-br from-sppl-blue/20 via-sky-500/20 to-sppl-dark-blue/20 transition-transform duration-500 ${active ? 'scale-[1.015]' : 'scale-[0.985] opacity-95'}`}>
      <div className={`group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-500 ${active ? 'shadow-md' : 'hover:shadow-md'}`}>
        <div className="aspect-[9/10] relative overflow-hidden">
          <img
            src={p.img}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover [content-visibility:auto] transform transition-transform duration-500 group-hover:scale-[1.03] saturate-90 group-hover:saturate-100"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6 text-center">
          <div className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">{p.name}</div>
          <div className="mt-0.5 text-sm text-slate-600">{p.role}</div>
        </div>
      </div>
    </div>
  </div>
);

const TeamMembers = () => {
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const N = people.length;
  const items = useMemo(() => [...people, ...people, ...people], []);
  const [index, setIndex] = useState(N); // start at middle block for seamless loop
  const [step, setStep] = useState(304); // default fallback
  const [cardWidth, setCardWidth] = useState(320);
  const [gapPx, setGapPx] = useState(20);
  // columns state removed (was not used elsewhere); layout measured directly in effect
  const [isInstant, setIsInstant] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), 7200);
    return () => clearInterval(id);
  }, [paused]);

  // Kick off movement soon after mount so it doesn't sit still
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => i + 1), 600);
    return () => clearTimeout(t);
  }, [paused]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transform = `translateX(${-index * step}px)`;
  }, [index, step]);

  // Seamless reset when reaching cloned edges
  useEffect(() => {
    if (index >= 2 * N) {
      setIsInstant(true);
      setIndex(N);
      requestAnimationFrame(() => setIsInstant(false));
    } else if (index < 0) {
      setIsInstant(true);
      setIndex(N - 1);
      requestAnimationFrame(() => setIsInstant(false));
    }
  }, [index, N]);

  // Manual controls removed; hover still pauses auto-advance

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const containerWidth = viewport.clientWidth;
      const isDesktop = window.innerWidth >= 1024;
      const isTablet = window.innerWidth >= 768;
  const cols = isDesktop ? 3 : isTablet ? 2 : 1;
  const gap = isDesktop ? 24 : isTablet ? 20 : 16;
      const width = Math.max(240, Math.floor((containerWidth - gap * (cols - 1)) / cols));
      setGapPx(gap);
      setCardWidth(width);
      setStep(width + gap);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-green-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-600 to-sppl-dark-blue">Our team</span>
          </h2>
          <div className="mt-3 flex justify-center">
            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
          </div>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Professional leaders with thirty years of SHM experience.</p>
        </div>
        <div
          className="relative overflow-hidden"
          ref={viewportRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={`flex transition-transform ${isInstant ? 'duration-0' : 'duration-500'} ease-out will-change-transform`} ref={trackRef} style={{ gap: `${gapPx}px` }}>
            {items.map((p, i) => {
              const activeBase = index % N;
              const isActive = (i % N) === activeBase;
              return <Card key={`${p.name}-${i}`} p={p} active={isActive} width={cardWidth} />;
            })}
          </div>
          {/* Removed side gradients and arrow controls as requested */}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
