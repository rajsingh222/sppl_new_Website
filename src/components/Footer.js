import React from 'react';

const Footer = () => {
  // Partner/client logos used in the marquee
  const logos = [
    'AIIMS_New_Delhi.png',
    'avgc.png',
    
    'arctic.png',
    'Fitt.png',
    'Indian_Institute_of_Technology_Delhi_Logo.svg.png',
    'ishms-logo.png',
    'Larsen&Toubro_logo.svg',
    'moc 1.svg',
    'ms.jpg',
    'nhai.jpg',
    'rail.webp',
    'richter.png',
    'en.jpg',
    
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white">
      {/* Logo Slider (preserved) */}
      <div className="bg-gray-50 border-t border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative overflow-hidden" aria-label="Partner logos">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            <div className="flex items-center gap-8 animate-marquee will-change-transform">
              {[...Array(2)].map((_, dupIdx) => (
                <div key={dupIdx} className="flex items-center gap-6 shrink-0">
                  {logos.map((file, i) => {
                    const src = encodeURI(`/logo/${file}`);
                    const label = file.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ');
                    return (
                      <div key={`${dupIdx}-${i}`} className="h-14 w-[110px] flex items-center justify-center bg-white rounded-md ring-1 ring-gray-200/70 shadow-sm p-2">
                        <img
                          src={src}
                          alt={label}
                          loading="lazy"
                          decoding="async"
                          className="max-h-10 w-auto object-contain"
                          onError={(e) => {
                            const card = e.currentTarget.parentElement;
                            if (card) card.classList.add('hidden');
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: SPPL brand block */}
          <div>
            <div className="mt-2 flex items-center gap-5">
              <div className="h-16 w-16 rounded-2xl bg-white ring-1 ring-white/20 shadow-sm flex items-center justify-center overflow-hidden hover:ring-sppl-blue hover:shadow-md transition-transform duration-200 hover:scale-[1.04]">
                <img src="/img/sppl-logo.png" alt="SPPL" className="h-14 w-14 object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-2xl font-extrabold tracking-tight text-white">SPPL India</div>
                <div className="text-[13px] text-gray-200">Incubated at FITT, IIT Delhi</div>
              </div>
            </div>
          </div>

          {/* Middle: Get in touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in touch</h3>
            <ul className="space-y-3 text-[15px] text-gray-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  {/* location icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white/90"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z"/></svg>
                </span>
                <span>2-A-2A, Second Floor<br/>Research & Innovation Park<br/>IIT Delhi - 110016</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white/90"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z"/></svg>
                </span>
                <span>Mapsko Mountville, Sector - 79<br/>Gurgaon Haryana - 122004</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  {/* mail icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4 text-white/90"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.236-8 5.333L4 8.236V6l8 5.333L20 6v2.236Z"/></svg>
                </span>
                <span>
                  <a href="mailto:ceo@spplindia.org" className="hover:text-white transition-colors">ceo@spplindia.org</a><br/>
                  <a href="mailto:office@spplindia.org" className="hover:text-white transition-colors">office@spplindia.org</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  {/* phone icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white/90"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.38 2.33.59 3.57.59.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h2.47c.55 0 1 .45 1 1 0 1.24.2 2.45.59 3.57.11.35.03.74-.24 1.02l-2.2 2.2Z"/></svg>
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center text-gray-200">
                    <a href="tel:+919013933333" className="hover:text-white transition-colors">+91-9013933333</a>
                    <span className="mx-2 text-white/60">,</span>
                    <a href="tel:+919319352890" className="hover:text-white transition-colors">+91-9319352890</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  {/* id/badge icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white/90"><path d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-7 2h2v2h-2V5Zm-5 4h12v8H7V9Zm2 2v4h8v-4H9Z"/></svg>
                </span>
                <span>GSTIN: 06ABNCS8407Q1ZH</span>
              </li>
            </ul>
          </div>

          {/* Right: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-[15px]">
              {[
                { label: 'About SPPL', href: '/about' },
                { label: 'Vision and Mission', href: '/about/vision-mission' },
                { label: 'Our Scope', href: '/about/scope' },
                { label: 'Partnerships', href: '/about/partnership' },
                { label: 'Innovation & Research', href: '/about/innovation-research' },
                
                { label: 'Business Policy', href: '/about/business-policy' },
                { label: 'Training & Consultation', href: '/about/training-consultation' },
                { label: 'Rules for Clients and Partners', href: '/about/rules-clients-partners' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-gray-200 hover:text-white transition-colors"
                  >
                    <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 ring-1 ring-white/10 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social icons row */}
        {/* <div className="mt-10 flex items-center gap-4">
          <a href="https://www.facebook.com/share/1CWGyN1tJW/" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center ring-1 ring-white/10 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/90">https://www.facebook.com/share/1CWGyN1tJW/<path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9V12.06h2.54V9.88c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.85h2.76l-.44 2.91h-2.32V22c4.78-.8 8.44-4.94 8.44-9.94Z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center ring-1 ring-white/10 transition">
            <svg xmlns="https://www.linkedin.com/company/sanrachna-prahari-pvt-ltd/" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/90"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V24h-4V8.5Zm7 0h3.84v2.11h.05c.54-1.02 1.86-2.11 3.83-2.11 4.1 0 4.86 2.7 4.86 6.21V24h-4v-7.29c0-1.74-.03-3.98-2.43-3.98-2.44 0-2.81 1.9-2.81 3.86V24h-4V8.5Z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center ring-1 ring-white/10 transition">
            <svg xmlns="https://www.instagram.com/sanrachnaprahari_official/" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/90"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-1.9.3-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.1.3-.2.9-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.3 1.9.2.5.3.8.6 1.1.3.3.6.5 1.1.6.3.1.9.2 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.3 1.1-.6.3-.3.5-.6.6-1.1.1-.3.2-.9.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.3-1.9-.2-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.3-.1-.9-.2-1.9-.3-1.3-.1-1.7-.1-4.8-.1m0 2.7a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8m0 8.9a3.5 3.5 0 1 0 0-7.1 3.5 3.5 0 0 0 0 7.1M18 6.4a1.3 1.3 0 1 1 0-2.7 1.3 1.3 0 0 1 0 2.7Z"/></svg>
          </a>
        </div> */}
        {/* Social icons row */}
<div className="mt-10 flex items-center gap-4">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1CWGyN1tJW/"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center ring-1 ring-white/10 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9V12.06h2.54V9.88c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.85h2.76l-.44 2.91h-2.32V22c4.78-.8 8.44-4.94 8.44-9.94Z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/sanrachna-prahari-pvt-ltd/"
    aria-label="LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center ring-1 ring-white/10 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-700">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V24h-4V8.5Zm7 0h3.84v2.11h.05c.54-1.02 1.86-2.11 3.83-2.11 4.1 0 4.86 2.7 4.86 6.21V24h-4v-7.29c0-1.74-.03-3.98-2.43-3.98-2.44 0-2.81 1.9-2.81 3.86V24h-4V8.5Z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/sanrachnaprahari_official/"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center ring-1 ring-white/10 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-pink-500">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.5.9.5.5.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.9 1.5-.5.5-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.5-.9-.5-.5-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .9-1.5.5-.5.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-1.9.3-.5.2-.8.3-1.1.6-.3.3-.5.6-.6 1.1-.1.3-.2.9-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.3 1.9.2.5.3.8.6 1.1.3.3.6.5 1.1.6.3.1.9.2 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.3 1.1-.6.3-.3.5-.6.6-1.1.1-.3.2-.9.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.3-1.9-.2-.5-.3-.8-.6-1.1-.3-.3-.6-.5-1.1-.6-.3-.1-.9-.2-1.9-.3-1.3-.1-1.7-.1-4.8-.1m0 2.7a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8m0 8.9a3.5 3.5 0 1 0 0-7.1 3.5 3.5 0 0 0 0 7.1M18 6.4a1.3 1.3 0 1 1 0-2.7 1.3 1.3 0 0 1 0 2.7Z"/>
    </svg>
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;
