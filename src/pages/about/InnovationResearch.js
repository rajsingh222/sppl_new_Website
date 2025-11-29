import React from 'react';
import Footer from '../../components/Footer';

export default function InnovationResearch() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Innovation & Research</h1>
            <p className="text-base md:text-lg text-blue-100">Investing in technologies that enable safer, smarter, and sustainable infrastructure.</p>
            <span className="block mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-white/60 to-blue-200/60"></span>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-gray-800">
            <div className="bg-white/70 backdrop-blur-sm shadow-sm rounded-2xl p-6 md:p-10">
              <div className="prose max-w-none prose-slate">
                <p className="text-gray-700 leading-relaxed text-justify">
                  At Sanrachna Prahari, innovation is not just a goal, it is the foundation of our approach to structural health monitoring. We continuously invest in research and development to design advanced technologies that ensure safer, smarter and more sustainable infrastructure.
                </p>

                <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                  Our R&amp;D initiatives go beyond product development. We actively collaborate with leading academic institutions, government bodies and industry experts to exchange knowledge and pioneer solutions tailored to India’s unique infrastructure challenges. From developing intelligent sensor networks and predictive diagnostic tools to creating energy-efficient monitoring systems, our focus is on delivering technologies that are both practical and future-ready.
                </p>

                <div className="mt-8 border-l-4 border-sky-300 pl-4">
                  <p className="text-gray-800 font-medium text-justify">
                    Through this commitment to innovation, we are shaping the next generation of civil engineering solutions that will extend the lifespan of assets, reduce risks and support the nation’s vision of resilient infrastructure.
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
