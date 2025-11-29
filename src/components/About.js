// import React, { useRef, useEffect, useState } from 'react';

// const About = () => {
//   const features = [
//   {
//   icon: "🏗️",
//   title: "Bridge & Track Monitoring",
//   description: "Specialized solutions for continuous health monitoring of bridges and railway tracks"
// },
// {
//   icon: "📡",
//   title: "Real-Time Insights",
//   description: "Live monitoring systems that keep you informed about infrastructure condition"
// },
// {
//   icon: "🔍",
//   title: "Issue Detection",
//   description: "Spot potential structural problems early to prevent costly failures"
// },
// {
//   icon: "🛡️",
//   title: "Reliability & Safety",
//   description: "Strengthening public safety and trust through smarter infrastructure management"
// }

//   ];

//   const aboutRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new window.IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.2 }
//     );
//     if (aboutRef.current) {
//       observer.observe(aboutRef.current);
//     }
//     return () => {
//       if (aboutRef.current) {
//         observer.unobserve(aboutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       id="about"
//       ref={aboutRef}
//       className={`relative scroll-mt-28 py-20 bg-gradient-to-b from-white via-slate-50 to-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//     >
//       {/* Decorative ambient accents */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-200/40 via-cyan-200/30 to-transparent blur-3xl" />
//         <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-200/30 via-sky-200/20 to-transparent blur-3xl" />
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="section-title relative inline-block text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-600 to-sppl-dark-blue">
//             About SPPL
//             <span className="block mt-3 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue"></span>
//           </h2>
//           <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//            An IIT Delhi incubated company with leading expertise in technical operations and research
//           </p>
//         </div>

//   <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//           <div className="space-y-6 flex flex-col justify-center h-full">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               Pioneering Structural Health Monitoring
//             </h3>
//             <div className="space-y-4 text-justify">
//               <div className="group flex items-start gap-3 bg-white/80 rounded-xl shadow-sm p-4 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✨</span>
//                 <span className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
//                   At SPPL Sanrachna Prahari Pvt Ltd, we develop and provide advanced monitoring solutions that enable infrastructure to communicate its health in real time.
//                 </span>
//               </div>
//               <div className="group flex items-start gap-3 bg-white/80 rounded-xl shadow-sm p-4 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✨</span>
//                 <span className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
//                   We help metro systems, railways and critical structures shift from reactive checks to proactive, continuous monitoring.
//                 </span>
//               </div>
//               <div className="group flex items-start gap-3 bg-white/80 rounded-xl shadow-sm p-4 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✨</span>
//                 <span className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
//                   Our expertise ensures safer, more reliable and future-ready infrastructure through smart, data-driven monitoring solutions.
//                 </span>
//               </div>
//             </div>
//             {/* Merged: feature chips and phone callout moved below text */}
//             <div className="space-y-4 ">
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="group flex items-center gap-3 bg-white/80 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
//                   <span className="text-lg">🏆</span>
//                   <span className="text-sm md:text-base font-medium text-gray-800">Award Winning</span>
//                 </div>
//                 <div className="group flex items-center gap-3 bg-white/80 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
//                   <span className="text-lg">👩‍💼</span>
//                   <span className="text-sm md:text-base font-medium text-gray-800">Professional Staff</span>
//                 </div>
//                 <div className="group flex items-center gap-3 bg-white/80 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
//                   <span className="text-lg">🕘</span>
//                   <span className="text-sm md:text-base font-medium text-gray-800">24/7 Support</span>
//                 </div>
//                 <div className="group flex items-center gap-3 bg-white/80 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
//                   <span className="text-lg">💰</span>
//                   <span className="text-sm md:text-base font-medium text-gray-800">Fair Prices</span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
//                 <span className="text-2xl">📞</span>
//                 <div className="flex-1">
//                   <p className="text-xs md:text-sm text-gray-600 leading-tight">Call to ask any question</p>
//                   <p className="text-base md:text-lg font-semibold text-gray-800">+91 7055559999</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center items-center h-full">
//             <div className="w-full max-w-[180px] md:max-w-[240px] lg:max-w-[300px] flex items-center">
//               <video
//                 className="rounded-2xl shadow-2xl border-2 border-blue-200 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
//                 src="/videos/intro.mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 poster="/images/hero-fallback.jpg"
//                 style={{ width: '100%', height: '100%', aspectRatio: '9/16' }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Features Grid - unified card styling */}
//         <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative flex flex-col rounded-2xl p-6 bg-white/95 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 hover:shadow-[0_14px_38px_rgba(2,132,199,0.14)] hover:ring-sky-300 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-[1.01]"
//               style={{ fontFamily: "'Poppins','Segoe UI',sans-serif" }}
//             >
//               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-sky-50 via-cyan-50 to-transparent" />
//               <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400" />

//               <div className="relative flex flex-col h-full">
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 ring-1 ring-slate-200 text-2xl select-none shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:ring-sky-300">
//                     {feature.icon}
//                   </div>
//                   <h4 className="font-semibold text-slate-900 text-base md:text-lg leading-snug tracking-tight">{feature.title}</h4>
//                 </div>

//                 <div className="mt-6 h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 translate-y-2 group-hover:translate-y-0" />

//                 <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-[0.95rem] text-center flex-1">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React, { useRef, useEffect, useState } from 'react';

const About = () => {
  const features = [
    { icon: "🏗️", title: "Bridge & Track Monitoring", description: "Specialized solutions for continuous health monitoring of bridges and railway tracks" },
    { icon: "📡", title: "Real-Time Insights", description: "Live monitoring systems that keep you informed about infrastructure condition" },
    { icon: "🔍", title: "Issue Detection", description: "Spot potential structural problems early to prevent costly failures" },
    { icon: "🛡️", title: "Reliability & Safety", description: "Strengthening public safety and trust through smarter infrastructure management" }
  ];

  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = aboutRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`relative scroll-mt-28 py-20 bg-gradient-to-b from-white via-slate-50 to-white transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200/40 via-cyan-200/30 to-transparent blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-200/30 via-sky-200/20 to-transparent blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-600 to-sppl-dark-blue">
            About SPPL
            <span className="block mt-3 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue"></span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            An IIT Delhi incubated company with leading expertise in technical operations and research
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pioneering Structural Health Monitoring
            </h3>
            <div className="space-y-4 text-justify">
              {[
                "At SPPL Sanrachna Prahari Pvt Ltd, we develop and provide advanced monitoring solutions that enable infrastructure to communicate its health in real time.",
                "We help metro systems, railways and critical structures shift from reactive checks to proactive, continuous monitoring.",
                "Our expertise ensures safer, more reliable and future-ready infrastructure through smart, data-driven monitoring solutions."
              ].map((text, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 bg-white/90 rounded-xl shadow-md p-4 border border-gray-100 hover:border-sky-300 hover:shadow-sky-100/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✨</span>
                  <p className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Chips & Contact */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["🏆", "Award Winning"],
                  ["👩‍💼", "Professional Staff"],
                  ["🕘", "24/7 Support"],
                  ["💰", "Fair Prices"]
                ].map(([icon, label], i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/90 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="text-sm md:text-base font-medium text-gray-800">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 shadow-inner">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs md:text-sm text-gray-600 leading-tight">Call to ask any question</p>
                  <p className="text-base md:text-lg font-semibold text-gray-800">+91 7055559999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-[300px] md:max-w-[360px] lg:max-w-[400px] transition-transform duration-500 hover:scale-[1.03]">
              <video
                className="rounded-2xl shadow-2xl border-2 border-blue-200 w-full h-full object-cover object-center transition-all duration-500 hover:shadow-blue-200/60"
                src="/videos/intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/hero-fallback.jpg"
                style={{ aspectRatio: '9/16' }}
              />
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl p-6 bg-white/95 backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.06)] ring-1 ring-slate-200 hover:ring-sky-300 hover:shadow-[0_12px_35px_rgba(56,189,248,0.18)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]"
              style={{ fontFamily: "'Poppins','Segoe UI',sans-serif" }}
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-gradient-to-t from-sky-50 via-cyan-50 to-transparent" />
              <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 ring-1 ring-slate-200 text-2xl select-none shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:ring-sky-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-slate-900 text-base md:text-lg leading-snug tracking-tight">{feature.title}</h4>
                </div>
                <div className="mt-6 h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500" />
                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-[0.95rem] text-center flex-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe for floating bg */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default About;
