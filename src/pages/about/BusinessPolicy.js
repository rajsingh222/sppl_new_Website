import React from 'react';
import Footer from '../../components/Footer';

export default function BusinessPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Business Policy</h1>
            <p className="text-base md:text-lg text-blue-100">Ethics, innovation and quality at the core of our engagements.</p>
            <span className="block mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-white/60 to-blue-200/60"></span>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-gray-800">
            <div className="bg-white/70 backdrop-blur-sm shadow-sm rounded-2xl p-6 md:p-10">
              <div className="prose max-w-none prose-slate">
                <p className="text-gray-700 leading-relaxed text-justify">
                  At Sanrachna Prahari Pvt Ltd (SPPL), our business policy is built on ethics, innovation and a commitment to delivering high-quality structural health monitoring (SHM) solutions. We follow clear principles that guide every aspect of our work, ensuring transparency, accountability and long-term trust with clients, partners and employees.
                </p>

                <div className="mt-8 space-y-6 text-justify">
                  {/* Quality and Innovation */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-sky-50 ring-1 ring-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M9 18h6M12 3c3.5 0 6 2.7 6 6 0 2.1-1.1 3.6-2.2 4.7-.6.6-.8 1.4-.8 2.3v.5H9v-.5c0-.9-.2-1.7-.8-2.3C7.1 12.6 6 11.1 6 9c0-3.3 2.5-6 6-6z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Quality and Innovation</h3>
                      <p className="mt-2 text-gray-700 text-justify">We deliver SHM products, services and training that meet global standards while addressing India’s unique infrastructure needs. Our R&amp;D team drives continuous innovation, ensuring every solution is thoroughly tested, safe and reliable.</p>
                    </div>
                  </div>

                  {/* Customer-Centric Approach */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-emerald-50 ring-1 ring-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M7 11a4 4 0 1 1 6.8-2.8M3 21s2-4 7-4 7 4 7 4"/>
                        <path d="M17 8l2 2 4-4"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Customer-Centric Approach</h3>
                      <p className="mt-2 text-gray-700">Clients are at the heart of our business. We tailor solutions to their needs, maintain transparent communication and provide full support from consultation to post-project services.</p>
                    </div>
                  </div>

                  {/* Ethical Business Conduct */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-amber-50 ring-1 ring-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 10h18M7 10v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7M12 3v3"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Ethical Business Conduct</h3>
                      <p className="mt-2 text-gray-700 text-justify">We uphold integrity in all dealings. SPPL rejects corruption and unethical practices while ensuring confidentiality, honesty and compliance with all regulations.</p>
                    </div>
                  </div>

                  {/* Environmental Responsibility */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-lime-50 ring-1 ring-lime-200 flex items-center justify-center text-lime-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 21c-4 0-7-3-7-7 0-5 5-9 11-9-1 6-5 11-11 11 0 0 3 5 7 5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Environmental Responsibility</h3>
                      <p className="mt-2 text-gray-700">Sustainability is central to our solutions. We use energy-efficient technologies, promote non-destructive testing and adopt eco-friendly practices that reduce environmental impact.</p>
                    </div>
                  </div>

                  {/* Health and Safety */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-rose-50 ring-1 ring-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z"/>
                        <path d="M9 11h6M12 8v6"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Health and Safety</h3>
                      <p className="mt-2 text-gray-700">We protect both our workforce and the public by ensuring safe work practices, complying with safety standards and designing SHM systems that safeguard critical infrastructure.</p>
                    </div>
                  </div>

                  {/* Employee Development */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-indigo-50 ring-1 ring-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M16 11a4 4 0 1 0-8 0"/>
                        <path d="M3 21s2-4 9-4 9 4 9 4"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Employee Development and Equal Opportunity</h3>
                      <p className="mt-2 text-gray-700">Our employees are our greatest strength. We foster diversity, equal opportunity and continuous professional growth through training and skill development.</p>
                    </div>
                  </div>

                  {/* Compliance */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 4h16v14H4z"/>
                        <path d="M7 8h10M7 12h8"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Compliance with Laws and Regulations</h3>
                      <p className="mt-2 text-gray-700">SPPL ensures strict compliance with local, national and international codes, standards and laws relevant to infrastructure and construction.</p>
                    </div>
                  </div>

                  {/* Data Privacy */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-cyan-50 ring-1 ring-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 3c3 2 7 2 7 2v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V5s4 0 7-2z"/>
                        <path d="M9 12h6"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Data Privacy and Security</h3>
                      <p className="mt-2 text-gray-700">We protect sensitive data with rigorous privacy and security measures, ensuring that all client and project information remains secure.</p>
                    </div>
                  </div>

                  {/* Sustainable Growth */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-orange-50 ring-1 ring-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 17l6-6 4 4 7-7"/>
                        <path d="M21 16v5H3v-3"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Sustainable Business Growth</h3>
                      <p className="mt-2 text-gray-700">SPPL is committed to long-term, responsible growth. We invest in people, technology and partnerships to deliver value while maintaining financial stability and scalability.</p>
                    </div>
                  </div>
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
