import React from 'react';
import Footer from '../../components/Footer';

export default function RulesClientsPartners() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Rules for Clients &amp; Partners</h1>
            <p className="text-base md:text-lg text-blue-100">Clear, transparent collaboration guidelines for success.</p>
            <span className="block mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-white/60 to-blue-200/60"></span>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 text-justify">
          <div className="max-w-5xl mx-auto px-6 text-gray-800">
            <div className="bg-white/70 backdrop-blur-sm shadow-sm rounded-2xl p-6 md:p-10">
              <div className="prose max-w-none prose-slate">
                <p className="text-gray-700 leading-relaxed text-justify">
                  Sanrachna Prahari Pvt Ltd (SPPL) is committed to transparent, professional and mutually beneficial partnerships. To ensure smooth collaboration and uphold the highest standards of integrity, all clients, contractors, suppliers, consultants and partners are expected to follow these rules:
                </p>

                <div className="mt-8 space-y-6">
                  {/* Compliance */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 4h16v14H4z"/>
                        <path d="M7 8h10M7 12h8"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Compliance with Laws and Standards</h3>
                      <p className="mt-2 text-gray-700 text-justify">All parties must adhere to applicable local, national and international laws. This includes obtaining necessary permits, following building codes and complying with safety, structural and environmental regulations. Intellectual property rights and NDAs must always be respected.</p>
                    </div>
                  </div>

                  {/* Ethics */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-amber-50 ring-1 ring-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 10h18M7 10v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7M12 3v3"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Ethical Business Practices</h3>
                      <p className="mt-2 text-gray-700 text-justify">We expect complete honesty and integrity in all dealings. Partners must avoid corruption, bribery or misrepresentation, and disclose any conflicts of interest before entering agreements.</p>
                    </div>
                  </div>

                  {/* Quality & Delivery */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-emerald-50 ring-1 ring-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 17l6-6 4 4 7-7"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Quality and Timely Deliveries</h3>
                      <p className="mt-2 text-gray-700">All deliverables must meet SPPL’s quality standards and agreed timelines. Any deviations should be communicated immediately with corrective measures taken to minimise project impact.</p>
                    </div>
                  </div>

                  {/* Confidentiality */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-cyan-50 ring-1 ring-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 3c3 2 7 2 7 2v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V5s4 0 7-2z"/>
                        <path d="M9 12h6"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Confidentiality and Data Security</h3>
                      <p className="mt-2 text-gray-700">Sensitive information shared by SPPL must remain confidential and used only for its intended purpose. Partners are responsible for secure handling of data and must report any breaches immediately.</p>
                    </div>
                  </div>

                  {/* HSE */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-lime-50 ring-1 ring-lime-200 flex items-center justify-center text-lime-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z"/>
                        <path d="M9 11h6M12 8v6"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Health, Safety and Environment</h3>
                      <p className="mt-2 text-gray-700">Partners must maintain safe work environments, provide appropriate safety training and equipment, and adopt eco-friendly practices to reduce waste, pollution and environmental risks.</p>
                    </div>
                  </div>

                  {/* Communication */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-indigo-50 ring-1 ring-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 5h16M4 12h12M4 19h10"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Communication and Reporting</h3>
                      <p className="mt-2 text-gray-700">Clear and timely communication is essential. Partners must provide regular updates, report issues promptly and maintain transparency in financial and project-related documentation.</p>
                    </div>
                  </div>

                  {/* IP */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-fuchsia-50 ring-1 ring-fuchsia-200 flex items-center justify-center text-fuchsia-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 7V3m0 0L9 6m3-3 3 3"/>
                        <path d="M4 8h16v12H4z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Respect for Intellectual Property</h3>
                      <p className="mt-2 text-gray-700">All proprietary technologies, systems and methods developed by SPPL remain our property unless otherwise agreed in writing. Unauthorized sharing, replication or use is strictly prohibited.</p>
                    </div>
                  </div>

                  {/* Non-Compete */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-orange-50 ring-1 ring-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M4 12h16"/>
                        <path d="M8 8l4 4-4 4"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Non-Compete and Exclusivity</h3>
                      <p className="mt-2 text-gray-700">Where applicable, partners may be required to agree to non-compete or exclusivity clauses to protect SPPL’s business interests.</p>
                    </div>
                  </div>

                  {/* Dispute */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-rose-50 ring-1 ring-rose-200 flex items-center justify-center text-rose-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 6l8 4-8 4-8-4 8-4z"/>
                        <path d="M12 14v6"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Dispute Resolution</h3>
                      <p className="mt-2 text-gray-700">We encourage disputes to be resolved through dialogue. If necessary, arbitration or legal proceedings will follow the mechanisms outlined in the contract.</p>
                    </div>
                  </div>

                  {/* Termination */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-red-50 ring-1 ring-red-200 flex items-center justify-center text-red-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M6 6h12M9 6v12m6-12v12"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Termination of Agreement</h3>
                      <p className="mt-2 text-gray-700">SPPL reserves the right to terminate agreements in case of breaches such as unethical practices, confidentiality violations or failure to meet quality standards.</p>
                    </div>
                  </div>

                  {/* Diversity */}
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-md bg-teal-50 ring-1 ring-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M7 11a4 4 0 1 1 6.8-2.8"/>
                        <path d="M3 21s2-4 7-4 7 4 7 4"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Diversity and Non-Discrimination</h3>
                      <p className="mt-2 text-gray-700">Partners must not engage in discrimination of any form and should promote diversity and equal opportunity within their workforce.</p>
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
