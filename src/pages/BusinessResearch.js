import React from 'react';
import Footer from '../components/Footer';
// Reveal removed

export default function BusinessResearch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
  <div>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="text-center py-16 md:py-20 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
            <div className="max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Research and Development</h1>
              {/* Keep only the main heading for consistency */}
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-12 text-justify">
          {/* Overview */}
            <section className="max-w-3xl mx-auto">
              <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Driving Innovation in Infrastructure Monitoring</h2>
                <p className="mt-4 text-gray-800 leading-relaxed">
                  At SPPL, research and development form the backbone of our mission. We are dedicated to advancing civil engineering practices, structural materials, monitoring technologies and building designs to create safer, smarter and more resilient infrastructure.
                </p>
              </div>
            </section>

          {/* Our Core Focus Areas */}
          <section>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Core Focus Areas</h3>
                <div className="mt-3 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {[
                { icon: '🏗️', title: 'Civil Engineering Innovation', text: 'Developing modern approaches to infrastructure design and sustainability.' },
                { icon: '🧪', title: 'Structural Materials Research', text: 'Creating and testing advanced materials with improved durability and performance.' },
                { icon: '📡', title: 'Monitoring Technologies', text: 'Pioneering SHM solutions with energy-harvesting capabilities.' },
                { icon: '🏢', title: 'Smart Building Design', text: 'Leveraging data-driven insights for intelligent, future-ready structures.' }
              ].map((f, i) => (
                <div key={f.title} className="group h-full bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all transform ring-1 ring-blue-100/60">
                  <div className="mb-3">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">
                      <span className="text-2xl">{f.icon}</span>
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{f.title}</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">{f.text}</p>
                  <div className="mt-4 h-1 w-0 group-hover:w-16 transition-all bg-gradient-to-r from-sppl-blue to-sppl-dark-blue rounded-full" />
                </div>
              ))}
            </div>
          </section>

          {/* Key R&D Services */}
          <section>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Key R&D Services</h3>
                <div className="mt-3 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  icon: '🤝',
                  title: 'Academic & Industry Collaborations',
                  points: [
                    'Partnering with IITs, universities and research institutes.',
                    'Joint projects for cutting-edge sensor and material development.'
                  ]
                },
                {
                  icon: '🧬',
                  title: 'Advanced Materials & SHM Technology Development',
                  points: [
                    'Researching next-generation structural materials.',
                    'Enhancing SHM sensor capabilities for accuracy and scalability.'
                  ]
                },
                {
                  icon: '🧾',
                  title: 'Testing & Certification',
                  points: [
                    'Providing testing facilities for new building materials and methods.',
                    'Offering certification services in line with national and international standards.'
                  ]
                },
                {
                  icon: '🎓',
                  title: 'Knowledge Sharing & Training',
                  points: [
                    'Certification Courses: SHM, NDT, and advanced diagnostics.',
                    'Workshops & Seminars: sessions for engineers and decision-makers.',
                    'Custom Training Programs: tailored for infra projects.'
                  ]
                }
        ].map((s, i) => (
          <div key={s.title} className="group relative bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-all">
                    <span className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-sppl-blue to-sppl-dark-blue" />
                    <div className="flex items-start gap-4 pl-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md shrink-0">
                        <span className="text-2xl">{s.icon}</span>
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900">{s.title}</h4>
                        <ul className="mt-3 space-y-2 text-gray-600">
                          {s.points.map((p, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <span className="mt-0.5 text-green-600">✔️</span>
                              <span className="leading-relaxed">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
          </div>
              ))}
            </div>
          </section>

          {/* Why SPPL's R&D Matters */}
          <section>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Why SPPL’s R&D Matters</h3>
                <div className="mt-3 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {[
                { icon: '🚀', text: 'Translates research into practical, deployable solutions.' },
                { icon: '🇮🇳', text: 'Strengthens India’s indigenous technology ecosystem.' },
                { icon: '🏗️', text: 'Helps clients adopt future-ready infrastructure practices.' },
                { icon: '👥', text: 'Creates a skilled ecosystem of engineers, researchers and industry experts.' }
              ].map((t, i) => (
          <div key={i} className="h-full bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="mb-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">
                        <span className="text-lg">{t.icon}</span>
                      </span>
                    </div>
                    <p className="text-gray-800 leading-relaxed">{t.text}</p>
          </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
