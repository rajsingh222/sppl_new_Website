import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IconLocation = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const IconPhone = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h2l2 4-2 1a11 11 0 006 6l1-2 4 2v2a2 2 0 01-2 2h-1C8.82 18 6 15.18 6 12V11a2 2 0 00-2-2H3V5z" />
  </svg>
);

const IconMail = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
  </svg>
);

const IconFacebook = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v6h3v-6h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5z" />
  </svg>
);

const IconLinkedIn = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.94 7.5A1.94 1.94 0 115 5.56 1.94 1.94 0 016.94 7.5zM5.5 9h2.9v9.5H5.5zM10.5 9h2.78v1.3h.04c.39-.7 1.33-1.43 2.74-1.43 2.93 0 3.47 1.93 3.47 4.45v5.18h-2.9v-4.6c0-1.1-.02-2.52-1.53-2.52-1.54 0-1.77 1.2-1.77 2.44v4.68H10.5z" />
  </svg>
);

const IconInstagram = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm0 2.5A2.5 2.5 0 1112 15a2.5 2.5 0 010-5zM18 6.8a1 1 0 100 2 1 1 0 000-2z" />
  </svg>
);

const INFO_BAR_HEIGHT_PX = 36; // matches h-9

const TopInfoBar = ({ show }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--topbar-offset',
      show ? `${INFO_BAR_HEIGHT_PX}px` : '0px'
    );
  }, [show]);

  return (
  <div className={`fixed top-0 left-0 right-0 z-[100] ${show ? '' : 'hidden'}`}>
  <div className="w-full bg-white border-b border-sppl-blue/20">
        <div className="w-full px-6 sm:px-8">
          <div className="flex items-center justify-between h-9 text-[13px] text-gray-900">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-medium"><IconLocation /><span>2-A-2A, Second Floor Research & Innovation Park IIT Delhi- 110016 India</span></div>
              <div className="hidden md:flex items-center gap-2 font-medium"><IconPhone /><a href="tel:+917055559999" className="hover:text-sppl-blue">+91-9013933333</a></div>
              <div className="hidden sm:flex items-center gap-2 font-medium"><IconMail /><a href="mailto:ceo@spplindia.org" className="hover:text-sppl-blue">ceo@spplindia.org</a></div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              {/* OSHM popup button - shows meaning on hover and opens modal on click */}
              <div className="relative group">
                <button
                  onClick={() => navigate('/oshm')}
                  aria-label="OSHM - Online Structural Health Monitoring"
                  title="OSHM: Online Structural Health Monitoring"
                  className="px-3 py-1 rounded-lg bg-yellow-50 text-yellow-800 font-semibold text-sm border border-yellow-100 hover:bg-yellow-100 transition-colors"
                >
                  OSHM
                </button>
                <div className="pointer-events-none absolute right-0 top-full mt-2 hidden group-hover:block w-max max-w-xs z-[110]">
                  <div className="rounded-xl bg-white border border-gray-200 shadow-lg px-3 py-2 text-xs text-gray-800">
                    <strong className="block text-sm">OSHM</strong>
                    <span className="block">Online Structural Health Monitoring</span>
                  </div>
                </div>
              </div>
              <a
                href="https://www.facebook.com/share/1CWGyN1tJW/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-sppl-blue transition-colors"
                title="Facebook"
              >
                <IconFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/sanrachna-prahari-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-sppl-blue transition-colors"
                title="LinkedIn"
              >
                <IconLinkedIn className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/sanrachnaprahari_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-sppl-blue transition-colors"
                title="Instagram"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;

/* Example CSS for Top Info Bar and Navbar */
// filepath: c:\Users\Sanrachna Prahari 3\sppl-website\client\src\index.css

