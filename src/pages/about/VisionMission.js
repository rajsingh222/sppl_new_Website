import React from 'react';
import Footer from '../../components/Footer';
// Reveal removed

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
  <div>
  <div className="relative text-center py-16 md:py-20 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-white/20 to-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Vision & Mission</h1>
            <p className="text-lg md:text-xl text-blue-100">Safeguarding India’s infrastructure through innovation, research and technology.</p>
            <span className="block mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-white/60 to-blue-200/60"></span>
          </div>
        </div>
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">At Sanrachna Prahari Pvt Ltd</h2>
              <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              <p className="mt-4 text-gray-800 leading-relaxed text-justify">
                At Sanrachna Prahari Pvt Ltd, we believe in safeguarding India’s civil infrastructure through innovation, research and technology. Our vision, mission and aim reflect our unwavering commitment to safety, sustainability and excellence in Structural Health Monitoring (SHM).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-full bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">👁️</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <blockquote className="text-gray-800 leading-relaxed italic">
                  "To ensure safety, longevity and sustainability of infrastructure through cutting-edge technology, innovative research and world-class services in Structural Health Monitoring."
                </blockquote>
              </div>
              <div className="h-full bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">🎯</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <blockquote className="text-gray-800 leading-relaxed italic text-justify">
                  “To deliver advanced Structural Health Monitoring solutions using cutting-edge, IoT and AI-driven, sensor technologies through reliable, scalable and cost-effective systems for infrastructure management.”
                </blockquote>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 rounded-2xl border border-blue-100 shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">🚀</span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Aim</h3>
              </div>
              <p className="text-gray-800 leading-relaxed">
                "To revolutionize infrastructure management by providing real-time, intelligent and sustainable Structural Health Monitoring systems that ensure safety, reliability and long-term resilience."
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
