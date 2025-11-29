import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = ({ isLoading }) => {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const [avoidVideo, setAvoidVideo] = useState(false);

  useEffect(() => {
    const node = heroRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // Detect reduced motion and save-data to avoid autoplaying background video
  useEffect(() => {
    const mql = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : { matches: false, addEventListener: () => {}, removeEventListener: () => {} };
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    const compute = () => {
      const reduced = !!mql.matches;
      const saveData = !!(conn && conn.saveData);
      const slow = !!(conn && typeof conn.effectiveType === 'string' && /^(slow-2g|2g)$/.test(conn.effectiveType));
      setAvoidVideo(reduced || saveData || slow);
    };
    compute();

    try { mql.addEventListener('change', compute); } catch {}
    try { conn && conn.addEventListener('change', compute); } catch {}

    return () => {
      try { mql.removeEventListener('change', compute); } catch {}
      try { conn && conn.removeEventListener('change', compute); } catch {}
    };
  }, []);

  // Play/pause video based on visibility and settings
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    let t;
    const onVis = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        if (document.visibilityState === 'hidden' || !isVisible || avoidVideo) {
          try { el.pause(); } catch {}
        } else {
          try { el.play(); } catch {}
        }
      }, 220);
    };
    onVis();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      clearTimeout(t);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [isVisible, avoidVideo]);

  // NOTE: removed videoReady state and listeners (was unused). Video play/pause is controlled
  // by visibility and user preferences instead.

  const messages = [
    { heading: 'We Offer', sub: 'Affordable and Sustainable Structural Health Monitoring' },
    { heading: 'We Provide', sub: 'Real-Time Monitoring for Safer Infrastructure' },
    { heading: 'We Ensure', sub: 'Early Detection of Structural Issues' },
    { heading: 'We Prepare', sub: 'AI & Machine Learning Insights for the Future' },
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    let intervalId = null;
    let localTimeout = null;

    // Ensure the first message is shown immediately after loading
    setVisible(true);

    const cycleOnce = () => {
      // Fade out, then advance index, then fade back in
      setVisible(false);
      localTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 600); // match the transition duration for smoothness
    };

    // Start a repeating cycle: show each message for ~3200ms
    intervalId = setInterval(cycleOnce, 3200);

    // Also run one cycle after initial show so the first transition happens
    localTimeout = setTimeout(cycleOnce, 3200);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (localTimeout) clearTimeout(localTimeout);
    };
  }, [isLoading, messages.length]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-[100svh] min-h-[100svh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
  <div className="absolute inset-0 w-full h-full z-0" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
        {!avoidVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover video-stabilize"
            src="/videos/construction.mp4"
            
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            style={{ opacity: 1, transform: 'translateZ(0)', willChange: 'transform' }}
          />
        )}

        {/* Subtle vertical gradient overlay for readability; static to avoid flicker */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      {/* Hero Content - cycling text */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-8"></div>
            <div className="h-16 bg-white/20 rounded-lg mx-auto mb-4 max-w-2xl"></div>
            <div className="h-8 bg-white/20 rounded-lg mx-auto max-w-lg"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center" style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}>
            <div
              className={`transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
              style={{ willChange: 'opacity, transform' }}
              aria-hidden={!visible}
            >
              <div className="inline-block px-4 py-3 md:px-6 md:py-4">
                <div className="mb-2 md:mb-3">
                  <span className="inline-block text-5xl md:text-7xl font-semibold tracking-tight text-white font-hero-heading">
                    {messages[index].heading}
                  </span>
                </div>
                <p className="text-2xl md:text-4xl text-white font-semibold max-w-5xl leading-snug md:leading-relaxed mx-auto tracking-tight font-hero-sub">
                  {messages[index].sub}
                </p>
                <div className="mt-8 flex items-center gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => navigate('/solutions/bridges')}
                    className="btn-sweep-base btn-sweep-primary"
                  >
                    Explore Solutions
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/contact/client')}
                    className="btn-sweep-base btn-sweep-ghost"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
