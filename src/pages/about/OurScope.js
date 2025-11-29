import React from 'react';
import Footer from '../../components/Footer';

export default function OurScope() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      <div>
        {/* Hero */}
        <div className="relative text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-white/20 to-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Scope in India</h1>
            <p className="text-base md:text-lg text-blue-100 ">Aligned with India’s development priorities across transport, urban, rural and industrial infrastructure.</p>
            <span className="block mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-white/60 to-blue-200/60"></span>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-gray-800">
            <div className="bg-white/70 backdrop-blur-sm shadow-sm rounded-2xl p-6 md:p-10">
              <div className="prose max-w-none prose-slate">
                {/* Intro */}
                <p className="text-gray-700 leading-relaxed text-justify">
                  Sanrachna Prahari Pvt Ltd (SPPL) is emerging as a vital contributor to India’s rapidly evolving infrastructure landscape. With large-scale investments in civil infrastructure, the demand for structural health monitoring, research and proactive maintenance solutions has never been greater. Our scope is aligned with India’s development priorities across transportation, urban growth, rural advancement and industrial infrastructure.
                </p>

                {/* Ensuring Longevity */}
                <h2 className="mt-10 text-2xl font-semibold text-gray-900">Ensuring Longevity of Infrastructure</h2>
                <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                  India’s growth depends on the resilience of its assets. With projects like Smart Cities, Bharatmala, Sagarmala, expressways, highways and metro networks, maintaining structural integrity is crucial. SPPL provides expertise in bridges, buildings, tunnels and transportation systems to reduce failures, control maintenance costs and extend service life. Our real-time monitoring systems, predictive diagnostics and smart sensors safeguard projects while ensuring efficiency over time.
                </p>

                {/* Bridging the Deficit */}
                <h2 className="mt-10 text-2xl font-semibold text-gray-900">Bridging the Infrastructure Deficit</h2>
                <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                  Aging bridges, flyovers, industrial plants and heritage structures require urgent attention. SPPL delivers proactive monitoring solutions to identify weaknesses, enable timely repairs and prevent disasters. With rising urbanisation and the growth of mega-cities, we also serve the growing demand for monitoring skyscrapers, commercial hubs and public assets through advanced SHM technologies tailored for India.
                </p>

                {/* National Initiatives */}
                <h2 className="mt-10 text-2xl font-semibold text-gray-900">Supporting National Initiatives</h2>
                <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                  SPPL aligns with India’s vision for infrastructure safety and sustainability by contributing to:
                </p>
                <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <span className="font-medium text-gray-900">Atmanirbhar Bharat</span> – advancing indigenous SHM research and reducing reliance on imports
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Make in India</span> – delivering locally developed products and services that strengthen domestic capacity
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">National Infrastructure Pipeline (NIP)</span> – enabling long-term success of multi-trillion investment projects through reliable monitoring
                  </li>
                </ul>

                {/* Sustainability */}
                <h2 className="mt-10 text-2xl font-semibold text-gray-900">Driving Sustainable Practices</h2>
                <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                  We ensure infrastructure is built and maintained with sustainability at its core. Our solutions include energy-efficient monitoring, non-destructive testing and preventive maintenance that reduce environmental impact. This commitment supports India’s climate goals and the global Sustainable Development Goals (SDGs).
                </p>

                {/* Workforce */}
                <h2 className="mt-10 text-2xl font-semibold text-gray-900">Building Skilled Workforce</h2>
                <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                  India’s SHM sector requires highly trained professionals. SPPL enhances capacity by training engineers, contractors and infrastructure managers in the latest technologies. This ensures a strong workforce ready to support the country’s infrastructure future.
                </p>

                {/* Closing */}
                <div className="mt-10 border-l-4 border-sky-300 pl-4">
                  <p className="text-gray-800 font-medium text-justify">
                    SPPL’s scope extends across government projects and private sector developments, positioning us as a trusted partner in building a safer, sustainable and resilient India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
