import React from 'react';
import Footer from '../../components/Footer';
// Reveal removed

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
  <div>
        {/* Hero */}
        <div className="relative text-center py-16 md:py-20 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white overflow-hidden">
          {/* gradient accents */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-white/20 to-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-0">About SPPL</h1>
          </div>
        </div>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8 md:space-y-10">
            {/* Who We Are */}
            <section className="relative bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <span className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-sppl-blue to-sppl-dark-blue" />
              <div className="pl-4">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">🏢</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Who We Are</h2>
                <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
                <div className="mt-4 space-y-4 text-gray-800 leading-relaxed text-justify">
                  <p>
                    At Sanrachna Prahari Pvt Ltd (SPPL), we are redefining the future of Structural Health Monitoring (SHM) in India. Incubated at the Foundation for Innovation & Technology Transfer (FITT), IIT Delhi and guided by distinguished IIT Delhi faculty, SPPL combines academic excellence with industry expertise to deliver indigenous, cutting-edge monitoring solutions.
                  </p>
                  <p>
                    Our mission is simple yet transformative: to safeguard and extend the life of critical civil infrastructure—from high-rise buildings and heritage monuments to bridges, tunnels, industrial plants and transportation networks—through innovation, research and expert training.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Expertise */}
            <section className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Our Expertise</h2>
              <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              <p className="mt-4 text-gray-800 leading-relaxed">
                SPPL offers a comprehensive ecosystem of products, services and consulting tailored to the diverse needs of infrastructure stakeholders.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '📡', title: 'Advanced SHM Products', text: 'Indigenous sensors with patented technology for real-time monitoring and energy harvesting.' },
                  { icon: '🛠️', title: 'Specialized Services', text: 'Deployment, calibration, diagnostics and integration with advanced dashboards.' },
                  { icon: '📊', title: 'Data-Driven Insights', text: 'State-of-the-art analytics to predict risks, optimize maintenance and ensure safety.' },
                  { icon: '🎓', title: 'Consulting & Training', text: 'Expert advisory, workshops and certification programs for large-scale projects.' }
                ].map((f, i) => (
                  <div key={f.title} className="h-full bg-gradient-to-br from-blue-50 via-white to-sky-50 rounded-xl border border-blue-100 p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">{f.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{f.title}</p>
                        <p className="text-gray-800">{f.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-4">
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-sky-200/50 blur-3xl" />
                  </div>
                  <div className="flex items-start gap-3 relative">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white text-sm shadow-md">ℹ️</span>
                    <p className="text-gray-800 leading-relaxed">
                      Whether it’s a modern metro corridor, a centuries-old heritage site or a critical industrial facility, our solutions provide actionable intelligence to ensure long-term resilience and sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Commitment */}
            <section className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Our Commitment</h2>
              <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '💡', title: 'Innovation at the Core', text: 'Bridging research and industry for indigenous SHM technologies.' },
                  { icon: '🛡️', title: 'Proactive Safety', text: 'Moving from reactive maintenance to predictive, data-driven monitoring.' },
                  { icon: '🌿', title: 'Sustainability & Longevity', text: 'Extending infrastructure lifespans while reducing costs.' },
                  { icon: '🏫', title: 'Knowledge Leadership', text: 'Empowering engineers, developers and policymakers through training and certification.' }
                ].map((item, i) => (
                  <div key={item.title} className="h-full bg-gradient-to-br from-blue-50 via-white to-sky-50 rounded-xl border border-blue-100 p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-gray-800">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
