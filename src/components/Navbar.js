import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { DASHBOARD_URL } from '../config';

const CaretDown = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Derive active item from current path to avoid initial flicker
  const deriveActive = (path) => {
    if (path === '/myproducts') return 'products';
    if (path === '/projects') return 'projects';
    if (path === '/blogs') return 'blogs';
    if (path === '/dashboard') return 'dashboard';
  if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/business-verticals')) return 'business verticals';
    if (path.startsWith('/solutions')) return 'solutions';
    if (path === '/') return 'home';
    return '';
  };

  const [activeItem, setActiveItem] = useState(() => deriveActive(location.pathname));
  const [openDrops, setOpenDrops] = useState({});

  // Sync active item with current route/hash when they change
  useEffect(() => {
    setActiveItem(deriveActive(location.pathname));
  }, [location.pathname]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname, location.hash]);

  // Close search on outside click or Escape
  useEffect(() => {
    if (!isSearchOpen) return;
    const handleDocClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    document.addEventListener('mousedown', handleDocClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isSearchOpen]);

  const toggleDropdown = (label) => {
    setOpenDrops(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about', dropdown: [
      { label: 'About SPPL', to: '/about' },
      { label: 'Vision and Mission', to: '/about/vision-mission' },
      { label: 'Our Scope', to: '/about/scope' },
      { label: 'Partnerships', to: '/about/partnership' },
      { label: 'Innovation & Research', to: '/about/innovation-research' },
      { label: 'Training & Consultation', to: '/about/training-consultation' },
      // { label: 'Process Features', to: '/about/process-features' },
      { label: 'Business Policy', to: '/about/business-policy' },
      { label: 'Rules for Clients and Partners', to: '/about/rules-clients-partners' },
    ]},
    { label: 'Business Verticals', to: '/business-verticals/product', dropdown: [
      { label: 'Product', to: '/business-verticals/product' },
      { label: 'Services', to: '/business-verticals/services' },
      { label: 'Research and Development', to: '/business-verticals/research' },
    ]},
    { label: 'Solutions', to: '/solutions/building-health-monitoring', dropdown: [
       { label: 'Bridge Health Monitoring', to: '/solutions/bridges', icon: 'bridge' },
      { label: 'Building Health Monitoring', to: '/solutions/building-health-monitoring', icon: 'building' },
     
      { label: 'Rail & Road', to: '/solutions/track', icon: 'track' },
      { label: 'Tunnel Health Monitoring', to: '/solutions/tunnel', icon: 'tunnel' },
      { label: 'Airport & Runways', to: '/solutions/airport', icon: 'airport' },
      { label: 'Industrial Units', to: '/solutions/industries', icon: 'industry' },
      { label: 'Offshore & Hydraulic', to: '/solutions/offshore', icon: 'waves' },
      { label: 'Prestressed Structures', to: '/solutions/prestressed', icon: 'bolt' },
      { label: 'Electric Power & Communication', to: '/solutions/electric', icon: 'power' },
    ]},
  { label: 'Products', to: '/myproducts' },
    { label: 'Projects', to: '/projects' },
    { label: 'Blogs', to: '/blogs' },
    { label: 'Dashboard', to: '/dashboard' },
    // { label: 'Gallery', to: '/#gallery' },
    { label: 'Contact', to: '/contact', dropdown: [
      { label: 'Client', to: '/contact/client' },
      { label: 'Partnership', to: '/contact/partnership' },
      { label: 'Organisation', to: '/contact/organisation' },
    ]},
  ];

  const flatNavForSearch = navItems.flatMap(item =>
    item.dropdown ? [item, ...item.dropdown.map(d => ({ ...d, isChild: true, parent: item.label }))] : [item]
  );
  // Normalize strings for better matching (handles symbols like '&' and extra spaces)
  const norm = (s = '') => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
  const enrichedSearchPool = flatNavForSearch.map(i => ({
    ...i,
    searchText: norm((i.parent ? i.parent + ' ' : '') + (i.label || '') + ' ' + (i.to || '')),
  }));
  const q = norm(query);
  const qTerms = q ? q.split(' ').filter(Boolean) : [];
  const filtered = qTerms.length
    ? enrichedSearchPool.filter(i => qTerms.every(t => i.searchText.includes(t)))
    : [];

  // Helper to set active item by path
  const setActiveByPath = (path) => {
    if (path === '/') return setActiveItem('home');
    if (path.startsWith('/about')) return setActiveItem('about');
    if (path.startsWith('/business-verticals')) return setActiveItem('business verticals');
    if (path.startsWith('/solutions')) return setActiveItem('solutions');
    if (path.startsWith('/contact')) return setActiveItem('contact');
    if (path === '/myproducts') return setActiveItem('products');
    if (path === '/projects') return setActiveItem('projects');
    if (path === '/blogs') return setActiveItem('blogs');
    if (path === '/dashboard') return setActiveItem('dashboard');
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-[90] h-20 ${isScrolled ? 'backdrop-blur-sm bg-white/95 shadow-md border-b border-gray-100' : 'bg-white border-b border-gray-100 shadow-sm'}`}
      style={{ top: 'var(--topbar-offset)' }} // pushes down when TopInfoBar is visible
    >
  <div className="w-full px-4 sm:px-6">
        <div className="flex items-center h-20">
          {/* Logo and Company Name - pinned far left (clickable to go Home) */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'auto' });
                setActiveItem('home');
              }
            }}
            className="flex items-center space-x-2 ml-2 sm:ml-4 shrink-0 cursor-pointer group"
            aria-label="Go to home"
          >
            <img 
              src="/img/logo3.png" 
              alt="SPPL Logo" 
              className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
            />
            <div className="text-left">
              <div className="text-3xl font-bold text-sppl-blue leading-tight">SPPL India</div>
              <div className="text-base text-red-800 font-bold">An IIT Delhi Company</div>
            </div>
          </Link>

          {/* Right pane widened: starts slightly left of center, extends to right */}
          <div className="hidden md:flex items-center w-3/4 ml-auto">
            {/* Desktop Navigation - wraps with small gaps */}
            <div className="flex items-center gap-x-1 whitespace-nowrap flex-1 justify-end">
              {navItems.map(item => (
                <div key={item.label} className={`relative group`}>
                  <Link
                    to={item.to}
                    className={`nav-link-compact px-3 text-gray-800 ${item.dropdown ? 'pr-8' : ''} ${
                      (activeItem === 'home' && item.to === '/') ||
                      (activeItem === 'about' && item.to === '/about') ||
                      (activeItem === 'business verticals' && item.to.startsWith('/business-verticals')) ||
                      (activeItem === 'solutions' && item.to.startsWith('/solutions')) ||
                      (activeItem === 'contact' && item.to.startsWith('/contact')) ||
                      (activeItem === 'products' && item.to === '/myproducts') ||
                      (activeItem === 'projects' && item.to === '/projects')
                      || (activeItem === 'blogs' && item.to === '/blogs')
                      || (activeItem === 'dashboard' && item.to === '/dashboard')
                        ? 'bg-sppl-dark-blue text-white rounded-full'
                        : ''
                    }`}
                    onClick={(e) => {
                      // Disable base Contact navigation; only use dropdown links
                      if (item.label === 'Contact') {
                        e.preventDefault();
                        setActiveItem('contact');
                        return; // don't navigate to /contact (no route)
                      }
                      // External dashboard redirect full screen
                      if (item.label === 'Dashboard') {
                        e.preventDefault();
                        if (DASHBOARD_URL) {
                          window.location.href = DASHBOARD_URL; // leave the SPA for true full screen
                          return;
                        }
                      }
                      // Home
                      if (item.to === '/') {
                        e.preventDefault();
                        if (location.pathname !== '/') navigate('/');
                        window.scrollTo({ top: 0, behavior: 'auto' });
                        setActiveItem('home');
                        return;
                      }
                      // About root and children
                      if (item.to.startsWith('/about')) {
                        setActiveItem('about');
                      }
                      // Solutions
                      if (item.to.startsWith('/solutions')) {
                        setActiveItem('solutions');
                      }
                      // Contact
                      if (item.to.startsWith('/contact')) {
                        setActiveItem('contact');
                      }
                      // Business Verticals
                      if (item.to.startsWith('/business-verticals')) {
                        setActiveItem('business verticals');
                      }
                      if (item.to === '/myproducts') setActiveItem('products');
                      if (item.to === '/projects') setActiveItem('projects');
                      if (item.to === '/dashboard') setActiveItem('dashboard');
                      if (item.to === '/blogs') setActiveItem('blogs');
                    }}
                    aria-current={
                      (activeItem === 'home' && item.to === '/') ||
                      (activeItem === 'about' && item.to === '/about') ||
                      (activeItem === 'business verticals' && item.to.startsWith('/business-verticals')) ||
                      (activeItem === 'solutions' && item.to.startsWith('/solutions')) ||
                      (activeItem === 'contact' && item.to.startsWith('/contact')) ||
                      (activeItem === 'products' && item.to === '/myproducts') ||
                      (activeItem === 'projects' && item.to === '/projects')
                      || (activeItem === 'blogs' && item.to === '/blogs')
                      || (activeItem === 'dashboard' && item.to === '/dashboard')
                        ? 'page'
                        : undefined
                    }
                  >
                    {item.label}
                    {item.dropdown && (
                      <span className={`absolute right-2 top-1/2 -translate-y-1/2 transition-colors ${
                        (activeItem === 'about' && item.to === '/about') ||
                        (activeItem === 'business verticals' && item.to.startsWith('/business-verticals')) ||
                        (activeItem === 'solutions' && item.to.startsWith('/solutions')) ||
                        (activeItem === 'contact' && item.to.startsWith('/contact'))
                          ? 'text-white' : 'text-gray-700 group-hover:text-white'
                      }`}>
                        <CaretDown className="h-4 w-4" />
                      </span>
                    )}
                  </Link>
                  {item.dropdown && (
                    <div className="pointer-events-none absolute left-0 mt-2 min-w-max w-56 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-[95]">
                      <div className="rounded-xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-xl p-2 text-gray-800">
                        {item.dropdown.map(sub => (
                          <Link key={sub.label} to={sub.to} className="dropdown-item flex items-center gap-2">
                            {sub.icon && (
                              <span className="inline-flex h-4 w-4 text-gray-600">
                                {sub.icon === 'building' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M6 21V7l6-3 6 3v14M9 10h1m4 0h1m-6 3h1m4 0h1m-6 3h1m4 0h1"/></svg>
                                )}
                                {sub.icon === 'bridge' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 19V9m18 10V9M3 13h18M7 19v-6m10 6v-6"/></svg>
                                )}
                                {sub.icon === 'track' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M8 3v18M16 3v18M3 7h18M3 11h18M3 15h18"/>
                                  </svg>
                                )}
                                {sub.icon === 'tunnel' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M4 19V9a8 8 0 0116 0v10M9 19v-6a3 3 0 116 0v6"/></svg>
                                )}
                                {sub.icon === 'airport' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M2 19h20M12 3l3 7h5l-8 6 3 5-3-2-3 2 3-5-8-6h5l3-7z"/></svg>
                                )}
                                {sub.icon === 'industry' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 21V10l5 3V10l5 3V7l8 4v10"/>
                                    <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M7 21v-2m4 2v-2m4 2v-2m4 2v-2"/>
                                  </svg>
                                )}
                                {sub.icon === 'waves' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"/></svg>
                                )}
                                {sub.icon === 'bolt' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
                                )}
                                {sub.icon === 'power' && (
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 2v10m6.364-6.364a9 9 0 11-12.728 0"/></svg>
                                )}
                              </span>
                            )}
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon + Panel pinned at far right of right pane */}
            <div
              ref={searchRef}
              className="flex items-center relative ml-4"
            >
              <button
                aria-label="Search"
                onClick={() => { setIsSearchOpen(s => !s); setQuery(""); }}
                className="p-2 rounded-full text-gray-800 hover:text-white hover:bg-sppl-dark-blue bg-gray-100 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-72">
                  <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-xl p-2">
                    <div className="flex items-center gap-2 px-2 pb-2">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        autoFocus
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search navigation..."
                        className="w-full bg-gray-100 rounded-full px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sppl-blue"
                      />
                    </div>
                    {filtered.length > 0 ? (
                      <div className="max-h-64 overflow-auto">
                        {filtered.map(res => (
                          <Link
                            key={(res.parent ? res.parent + '-' : '') + res.label}
                            to={res.to || '#'}
                            className="dropdown-item"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsSearchOpen(false);
                              setQuery('');
                              // Special cases
                              if (res.label === 'Dashboard' && DASHBOARD_URL) {
                                window.location.href = DASHBOARD_URL;
                                return;
                              }
                              // Contact root is not directly navigated in top nav; default to client page
                              const target = res.to === '/contact' ? '/contact/client' : (res.to || '/');
                              if (target === '/') {
                                if (location.pathname !== '/') navigate('/');
                                window.scrollTo({ top: 0, behavior: 'auto' });
                                setActiveItem('home');
                                return;
                              }
                              setActiveByPath(target);
                              navigate(target);
                            }}
                          >
                            {res.parent && <span className="text-gray-400 mr-2">{res.parent} ›</span>}
                            {res.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-700">{query ? 'No matches' : 'Type to search menu'}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden ml-auto mr-1">
            <button
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="p-2 rounded-lg text-gray-800 hover:text-white hover:bg-sppl-dark-blue bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                // X icon
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute left-0 right-0 top-20 bg-white border-t border-gray-100 shadow-xl ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isDrop = !!item.dropdown;
            const isOpen = !!openDrops[item.label];
            return (
              <div key={item.label} className="">
                <div className="flex items-center">
                  <Link
                    to={item.to}
                    className={`flex-1 px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-50 ${
                      (activeItem === 'home' && item.to === '/') ||
                      (activeItem === 'about' && item.to.startsWith('/about')) ||
                      (activeItem === 'business verticals' && item.to.startsWith('/business-verticals')) ||
                      (activeItem === 'solutions' && item.to.startsWith('/solutions')) ||
                      (activeItem === 'contact' && item.to.startsWith('/contact')) ||
                      (activeItem === 'products' && item.to === '/myproducts') ||
                      (activeItem === 'projects' && item.to === '/projects') ||
                      (activeItem === 'blogs' && item.to === '/blogs') ||
                      (activeItem === 'dashboard' && item.to === '/dashboard')
                        ? 'bg-sppl-dark-blue text-white'
                        : ''
                    }`}
                    onClick={(e) => {
                      if (item.label === 'Contact') {
                        e.preventDefault();
                        setActiveItem('contact');
                        return;
                      }
                      if (item.label === 'Dashboard') {
                        e.preventDefault();
                        if (DASHBOARD_URL) {
                          window.location.href = DASHBOARD_URL;
                          return;
                        }
                      }
                      if (item.to === '/') {
                        e.preventDefault();
                        if (location.pathname !== '/') navigate('/');
                        window.scrollTo({ top: 0, behavior: 'auto' });
                        setActiveItem('home');
                        setIsMobileMenuOpen(false);
                        return;
                      }
                      if (item.to.startsWith('/about')) setActiveItem('about');
                      if (item.to.startsWith('/contact')) setActiveItem('contact');
                      if (item.to.startsWith('/business-verticals')) setActiveItem('business verticals');
                      if (item.to.startsWith('/solutions')) setActiveItem('solutions');
                      if (item.to === '/myproducts') setActiveItem('products');
                      if (item.to === '/projects') setActiveItem('projects');
                      if (item.to === '/blogs') setActiveItem('blogs');
                      if (item.to === '/dashboard') setActiveItem('dashboard');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                  {isDrop && (
                    <button
                      className="ml-2 p-2 text-gray-800 hover:text-sppl-blue"
                      aria-expanded={isOpen}
                      aria-controls={`mobile-drop-${item.label}`}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <CaretDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {isDrop && (
                  <div
                    id={`mobile-drop-${item.label}`}
                    className={`pl-3 mt-1 space-y-1 overflow-hidden transition-all ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-50"
                        onClick={() => {
                          setActiveItem(item.label.toLowerCase());
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
