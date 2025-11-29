import React from 'react';
import Footer from '../components/Footer';

export default function BusinessProduct() {
  const features = [
    { icon: '🧬', title: 'Patented Indigenous Technology', text: 'Developed in collaboration with IIT Delhi.' },
    { icon: '📈', title: 'Real-Time Monitoring', text: 'Capture structural health data continuously.' },
    { icon: '⚡', title: 'Energy Harvesting', text: 'Converts structural vibrations into sustainable power.' },
    { icon: '🛡️', title: 'Durable Design', text: 'Operates reliably in diverse environmental conditions.' },
    { icon: '🚀', title: 'Scalable Deployment', text: 'Suitable for bridges, buildings and industrial plants.' },
  ];

  const applications = [
    { icon: '🌉', title: 'Bridges' },
    { icon: '🏙️', title: 'Buildings' },
    { icon: '🏭', title: 'Industrial Plants' },
  ];

  const steps = [
    'Sensors capture responses',
    'Data is processed',
    'Insights drive decisions',
  ];

  const benefits = [
    { icon: '🛠️', text: 'Proactive monitoring reduces maintenance costs and prevents failures.' },
    { icon: '📊', text: 'Real-time insights enable informed decision-making for safety and longevity.' },
    { icon: '🌱', text: 'Sustainable design with energy harvesting reduces operational dependency.' },
    { icon: '✅', text: 'Compliant with industry standards and regulations.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
  <div>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="text-center py-16 md:py-20 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
            <div className="max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Product</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 ">
          {/* Product Overview */}
          <section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Structural Health Monitoring (SHM) Sensors</h2>
              <p className="mt-4 text-gray-800 leading-relaxed text-justify">
                Our SHM sensors are designed to measure structural responses such as stress, strain, vibration and environmental effects. They combine precision monitoring with energy-harvesting capabilities to enable long-term autonomous operation in bridges, buildings and industrial facilities.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Advanced SHM Sensors</h2>
              <p className="mt-4 text-gray-800 leading-relaxed text-justify">
                SPPL provides indigenous sensors that monitor the health of critical infrastructure while harnessing energy from structural vibrations. Developed with IIT Delhi technology, our sensors deliver accurate, real-time insights for safer, smarter and more sustainable structures.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Key Features</h3>
              <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-stretch gap-6 ">
              {features.map((f) => (
                <div key={f.title} className="group h-full min-h-[220px] bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all transform flex flex-col">
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">
                      <span className="text-2xl">{f.icon}</span>
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{f.title}</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section>
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Applications</h3>
              <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((a) => (
                <div key={a.title} className="h-full bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="text-3xl">{a.icon}</div>
                  <h4 className="mt-3 font-semibold text-gray-900">{a.title}</h4>
                  <p className="mt-1.5 text-gray-700">Reliable monitoring and insights for safer operations.</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section>
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">How It Works</h3>
              <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="h-full bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="text-3xl">{i + 1}</div>
                  <p className="mt-2 text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section>
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Why Choose SPPL Integrated Sensors</h3>
              <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
            </div>
            <div className="grid sm:grid-cols-2 items-stretch gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="h-full min-h-[120px] bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all transform">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white flex items-center justify-center text-xl shadow-md">{b.icon}</div>
                    <p className="text-gray-800 leading-relaxed">{b.text}</p>
                  </div>
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
