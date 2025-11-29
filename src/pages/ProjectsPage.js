import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const Section = React.forwardRef(({ id, children, className = '' }, ref) => (
  <section ref={ref} id={id} className={`py-16 md:py-20 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
));
Section.displayName = 'Section';

const Hero = ({ onExploreClick }) => {
  const heroImage = '/Projects/my4.jpg';

  return (
    <div className="relative overflow-hidden h-[53vh]">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Projects background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-slate-900/40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,rgba(2,6,23,0.20),transparent)]" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
        className="relative z-10 h-full"
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">Our <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">Projects</span></h1>
            <p className="mt-6 text-lg md:text-2xl font-medium text-blue-100/95 max-w-3xl leading-relaxed">
              "We deliver advanced structural health monitoring solutions for bridges, buildings and heritage sites—blending technology and innovation for safer infrastructure."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center rounded-lg px-6 py-3 font-semibold text-white bg-white/10 hover:bg-white/15 ring-1 ring-white/30 backdrop-blur-sm"
              >
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CategoryCard = ({ title, description, img, onClick, icon }) => (
  <motion.button
    whileHover={{ y: -4 }}
    onClick={onClick}
    className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden text-left hover:shadow-md transition-all h-full flex flex-col"
  >
    <div className="aspect-video relative">
  <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover [content-visibility:auto]" loading="lazy" decoding="async" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
    </div>
    <div className="p-4 flex-1">
      <div className="flex items-center gap-2 mb-1 text-gray-900 font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.button>
);

const useReveal = (options) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true, ...options });
  return { ref, isInView };
};

const ProjectsPage = () => {
  const projectsRef = useRef(null);
  const { ref: bridgeRef, isInView: bridgeIn } = useReveal();
  const { ref: buildingRef, isInView: buildingIn } = useReveal();
  const { ref: heritageRef, isInView: heritageIn } = useReveal();

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTo = (el) => el?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero onExploreClick={scrollToProjects} />
      <div className="w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400/80" />

      <Section id="projects" className="pt-4" ref={projectsRef}>
        <div className="mb-6">
          <span className="text-[11px] font-semibold tracking-widest uppercase bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Explore</span>
          <h2 className="mt-1 text-2xl md:text-3xl font-bold text-slate-900">
            Project <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Categories</span>
          </h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <CategoryCard
            title="Bridge Health Monitoring"
            description="Structural integrity and safety insights for bridges."
            img="/Projects/gara2.jpg"
            icon={<span className="inline-block w-2.5 h-2.5 rounded-full bg-sppl-blue" />}
            onClick={() => scrollTo(bridgeRef.current)}
          />
          <CategoryCard
            title="Building Health Monitoring"
            description="Smart buildings and critical facilities monitoring."
            img="/img/ai2.jpg"
            icon={<span className="inline-block w-2.5 h-2.5 rounded-full bg-sppl-blue" />}
            onClick={() => scrollTo(buildingRef.current)}
          />
          <CategoryCard
            title="Heritage Structural Health Monitoring"
            description="Preserving historical structures with modern tech."
            img="/Projects/baouli1.jpg"
            icon={<span className="inline-block w-2.5 h-2.5 rounded-full bg-sppl-blue" />}
            onClick={() => scrollTo(heritageRef.current)}
          />
        </motion.div>
      </Section>

      {/* Subtle divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-slate-200/80" />
      </div>

      <Section id="bridge">
        <motion.div
          ref={bridgeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={bridgeIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Bridge</span> Health Monitoring
          </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[{
              name: 'Rail Over Bridge at Chipyana',
              status: 'Ongoing',
              description: 'Structural monitoring and analytics for critical bridge components.',
              image: '/Projects/bridge.avif'
            },
            {
              name: 'Garra River Bridge NH-30',
              status: 'Ongoing',
              description: 'Real-time SHM with alerts and predictive maintenance.',
              image: '/Projects/gara2.jpg'
            }
            ].map((p) => (
              <motion.div
                key={p.name}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden h-full flex flex-col"
              >
                <div className="aspect-video relative">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover [content-visibility:auto]" loading="lazy" decoding="async" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                    <span className="text-xs px-2 py-1 rounded bg-blue-50 text-sppl-blue font-medium">{p.status}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Subtle divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-slate-200/80" />
      </div>

      {/* Combined Building + Heritage in a side-by-side grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Building Column */}
          <motion.div
            id="building"
            ref={buildingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={buildingIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Building</span> Health Monitoring
            </h2>
            <div className="h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 items-stretch">
              {[{
                name: 'AIIMS , New Delhi',
                status: 'Ongoing',
                description: 'Smart building monitoring for critical healthcare infrastructure.',
                image: '/img/ai2.jpg'
              }].map((p) => (
                <motion.div key={p.name} whileHover={{ y: -4 }} className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden h-full flex flex-col">
                  <div className="aspect-video relative">
                    <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover [content-visibility:auto]" loading="lazy" decoding="async" sizes="(min-width: 1024px) 50vw, 100vw" />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                      <span className="text-xs px-2 py-1 rounded bg-blue-50 text-sppl-blue font-medium">{p.status}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Heritage Column */}
          <motion.div
            id="heritage"
            ref={heritageRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heritageIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Heritage Structural</span> Health Monitoring
            </h2>
            <div className="h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 items-stretch">
              {[{
                name: 'Agrasen Ki Baoli, New Delhi',
                status: 'Ongoing',
                description: 'Preservation monitoring for heritage stepwell with sensors and analytics.',
                image: '/Projects/baouli1.jpg'
              }].map((p) => (
                <motion.div key={p.name} whileHover={{ y: -4 }} className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden h-full flex flex-col">
                  <div className="aspect-video relative">
                    <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover [content-visibility:auto]" loading="lazy" decoding="async" sizes="(min-width: 1024px) 50vw, 100vw" />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                      <span className="text-xs px-2 py-1 rounded bg-blue-50 text-sppl-blue font-medium">{p.status}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA: Blue gradient band with minimal content */}
      <div className="relative isolate">
        <div className="bg-gradient-to-r from-sky-600 via-blue-700 to-cyan-600">
          <Section className="py-14 md:py-20">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build safer, smarter infrastructure</h3>
              <p className="mt-2 text-blue-100">Talk to our team about your bridge, building, or heritage project.</p>
              <div className="mt-6">
                <Link to="/contact/client" className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white ring-1 ring-white/20">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <span className="relative">Contact Us</span>
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
