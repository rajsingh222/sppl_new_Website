import React from 'react';
import Footer from '../../components/Footer';

export default function TrainingConsultation() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Training & Consultation</h1>
            <p className="text-base md:text-lg text-blue-100">Building a skilled SHM workforce with practical training and expert advisory.</p>
            <span className="block mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-white/60 to-blue-200/60"></span>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-gray-800">
            <div className="bg-white/70 backdrop-blur-sm shadow-sm rounded-2xl p-6 md:p-10">
              <div className="prose max-w-none prose-slate">
                {/* Intro */}
                <h2 className="text-2xl font-semibold text-gray-900">Building a Skilled SHM Workforce</h2>
                <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                  Sanrachna Prahari is committed to developing a trained workforce in structural health monitoring (SHM) to meet India’s growing infrastructure needs. Through specialized training and expert consultation, we equip engineers, contractors and industry professionals with practical skills in SHM technologies, methods and best practices. Our initiative also supports national programs such as the Skill India Mission, ensuring that the country is ready for the future of infrastructure management.
                </p>

                {/* Why Training */}
                <h2 className="mt-10 text-2xl font-semibold text-gray-900">Why SHM Training is Essential</h2>
                <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                  India’s expanding infrastructure — from bridges, highways and tunnels to smart cities and industrial facilities — demands constant monitoring to ensure safety and longevity. A trained SHM workforce can:
                </p>
                <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
                  <li>Enable proactive maintenance and reduce sudden failures</li>
                  <li>Improve safety through real-time monitoring and data-driven decisions</li>
                  <li>Strengthen local expertise and reduce dependence on external solutions</li>
                  <li>Support national missions like Make in India and Smart Cities</li>
                </ul>

                {/* Programs */}
                <h2 className="mt-10 text-2xl font-semibold text-gray-900">SPPL Training Programs</h2>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Our programs cover every stage of SHM, designed for both beginners and professionals:
                </p>
                <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
                  <li><span className="font-medium text-gray-900">Introduction to SHM</span> – fundamentals, applications and monitoring benefits</li>
                  <li><span className="font-medium text-gray-900">Sensor Technologies</span> – accelerometers, strain gauges, fiber optics and more</li>
                  <li><span className="font-medium text-gray-900">Data Acquisition &amp; Analysis</span> – techniques, interpretation and advanced tools</li>
                  <li><span className="font-medium text-gray-900">System Implementation</span> – hands-on training for installation and configuration</li>
                  <li><span className="font-medium text-gray-900">Case Studies &amp; Best Practices</span> – real-world insights from Indian projects</li>
                </ul>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  We also provide on-site training and field testing, allowing participants to gain practical exposure by working on live infrastructure projects.
                </p>

                {/* Consultation */}
                <h2 className="mt-10 text-2xl font-semibold text-gray-900">Consultation Services</h2>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Beyond training, SPPL offers consultation for infrastructure owners, engineers and construction firms. Our experts provide:
                </p>
                <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
                  <li>Customized SHM solutions suited to project needs</li>
                  <li>Full lifecycle support from design and installation to long-term monitoring</li>
                  <li>Knowledge transfer and in-house team training for sustainable operations</li>
                </ul>

                {/* Impact */}
                <div className="mt-10 border-l-4 border-sky-300 pl-4 ">
                  <h3 className="text-xl font-semibold text-gray-900">The Impact</h3>
                  <p className="mt-2 text-gray-800 text-justify">
                    By combining training with expert consultation, SPPL is building a future-ready workforce capable of advancing SHM adoption across India. This initiative ensures safer, more resilient and longer-lasting infrastructure while creating opportunities for engineers and institutions to lead in this vital field.
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
