import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';
import Card from '../components/Card';

const ProductCard = ({ image, name, description, category, id, imgSrc }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imgIndex, setImgIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const isTouch = React.useMemo(() => (typeof window !== 'undefined' ? matchMedia('(hover: none)').matches : false), []);
  const toggleFlip = React.useCallback((e) => {
    if (!isTouch) return; // keep hover for non-touch
    if (e.target.closest('button[data-readmore]')) return; // don't toggle when clicking button
    setFlipped(f => !f);
  }, [isTouch]);
  const candidates = React.useMemo(() => {
    const list = [];
    if (imgSrc) list.push(imgSrc);
    // Single, safe fallback
    list.push(`/img/sppl-logo.png`);
    return list;
  }, [imgSrc]);

  const currentSrc = candidates[imgIndex];

  // Ensure we always start from the provided imgSrc when the product changes
  React.useEffect(() => {
    setImgIndex(0);
  }, [id, imgSrc, name]);

  // Single-line truncation for front side
  const oneLine = (description || '').length > 60 ? description.slice(0,57)+'…' : description;
  const backExcerpt = (description || '').length > 150 ? description.slice(0,147)+'…' : description;

  return (
  <div
    className={`group flip-scene flip-hover flip-smooth ${flipped ? 'is-flipped' : ''} ${isTouch ? 'flip-touch' : ''}`}
    onClick={toggleFlip}
    onKeyDown={(e) => { if (isTouch && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setFlipped(f=>!f);} }}
    role={isTouch ? 'button' : undefined}
    tabIndex={isTouch ? 0 : -1}
    aria-pressed={isTouch ? flipped : undefined}
  >
      <div className="flip-card flip-gradient-border rounded-2xl w-full h-full min-h-[340px] shadow-xl">
        {/* Front Face */}
        <div className="flip-face absolute inset-0 flex flex-col bg-white/85 rounded-2xl overflow-hidden">
          <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-sky-50">
            {currentSrc && (
              <img
                src={currentSrc}
                alt={name}
                loading="lazy"
                className="max-h-48 max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                onError={() => setImgIndex((idx) => (idx + 1 < candidates.length ? idx + 1 : idx))}
              />
            )}
          </div>
          <div className="px-5 pb-5 pt-3 flex flex-col">
            <span className="self-center mb-2 inline-block px-3 py-1 bg-blue-100 text-sppl-blue text-[11px] font-semibold rounded-full tracking-wide">
              {category}
            </span>
            <h3 className="text-base sm:text-lg font-semibold text-center text-gray-800 mb-1 line-clamp-2 leading-snug">
              {name}
            </h3>
            <p className="text-xs text-gray-600 text-center leading-snug line-clamp-1 mb-1">{oneLine}</p>
            <p className="text-[10px] text-gray-400 text-center italic">Hover to flip ↻</p>
          </div>
        </div>
        {/* Back Face */}
        <div className="flip-face flip-back absolute inset-0 flex flex-col rounded-2xl bg-gradient-to-br from-white via-[#f2f9ff] to-[#dbeeff] text-slate-800 p-5">
          <div className="flex-1 overflow-hidden">
            <h3 className="text-lg font-bold mb-2 tracking-tight text-sppl-blue">{name}</h3>
            <p className="text-sm leading-relaxed text-slate-700 mb-4 line-clamp-5">
              {backExcerpt || 'High performance structural monitoring component.'}
            </p>
          </div>
          <button
            data-readmore
            onClick={(e) => { e.stopPropagation(); navigate(`/myproducts/${id}${location.search || ''}`);} }
            className="mt-auto inline-flex items-center justify-center w-full gap-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-semibold text-sm py-2 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Read More <span className="text-base">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ title, description, cards, category, overview, features, hideDetails }) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-sppl-blue mb-4 drop-shadow-lg tracking-tight">{title}</h2>
  <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium text-justify">{description}</p>
      </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
    {cards.map((card, index) => (
          <ProductCard
      key={`${category}-${(card.id || card.name)}-${index}`}
            {...card}
            category={category}
            id={(card.id || card.name)}
          />
        ))}
      </div>
     

      {!hideDetails && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl p-10 border border-blue-200 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold text-sppl-blue mb-4">Overview</h3>
            <p className="text-gray-800 leading-relaxed text-base text-justify">
              {overview || (
                <>Our {title.toLowerCase()} solutions provide comprehensive monitoring capabilities designed for modern infrastructure needs. Built with cutting-edge technology and user-centric design principles, these systems deliver reliable performance and actionable insights.</>
              )}
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-100 via-white to-sky-50 rounded-2xl p-10 border border-sky-200 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold text-sppl-blue mb-4">Key Features</h3>
            <ul className="space-y-3 text-gray-800">
              {(features && features.length ? features : [
                'Real-time data monitoring and analysis',
                'Advanced AI-powered insights',
                'Scalable architecture for growth',
                'User-friendly interface design'
              ]).map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-1 bg-sppl-blue rounded-full animate-pulse"></span>
                  <span className="font-semibold leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center mt-12">
        <div className="h-1 w-2/3 bg-gradient-to-r from-sppl-blue via-sppl-dark-blue to-sky-400 rounded-full opacity-40"></div>
      </div>
    </div>
  </section>
);



const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productSections = [
    {
      title: "Decentralized Systems",
      category: "Decentralized",
      overview: "This Systems distributes Structural Health Monitoring (SHM) solution, designed to instrument large and complex structures with networks of intelligent sensors. By combining multiple IoT‑based acquisition units, it provides a scalable, modular and reliable way to capture the dynamic response of structures in real time.",
      features: [
'Scalable & Modular: Supports large number of units per star topology, expandable with parallel networks.',
'Integration: These units can work standalone or as part of larger SHM networks.',
'Noise-Free Data: No noise in cables due to digitalization at sensor location.',
'Flexible Communication: Supports Ethernet, Wi-Fi, GSM.',
'Low Power Consumption: System powered over PoE, enabling simple deployment.',
'Real-Time Structural Health Monitoring: Continuous acquisition with configurable triggers for events.',
'Automated Reporting: Generates PDF reports including FFT, PSD, peak-to-peak, RMS and other key metrics.',
'Quick Analysis: Provides rapid estimation of dominant modes and damping parameters.',
'Event Management: Pre/post event recording, ring buffer recording, FTP uploads, SeedLink stream and automated email notifications.',
'Wide Sensor Compatibility: Supports accelerometers, displacement, strain, temperature, pressure, wind, inclination, piezometers and more.',
'Easy Maintenance: Plug-and-play modular units for straightforward installation and replacement.',
'Cost Efficient: Low installation and operational costs compared to conventional wired SHM systems.'

      ],
      cards: [
        { id: "xInc", name: "Digital Inclinometer Unit", imgSrc: "/products/items/12.jpg", description: "Precision tilt and angular displacement monitoring."},
        { id: "xAlarm", name: "Digital Alarming Unit", imgSrc: "/products/items/dist1-Photoroom.jpg", description: "Event-triggered alarming & relay control."},
        { id: "xGeo", name: "Digital Geophone Unit", imgSrc: "/products/items/dist2-Photoroom.jpg", description: "Tri-axial vibration & ground motion sensing." },
        { id: "xPlorer", name: "Central Recording and Processing", imgSrc: "/products/items/dist3-Photoroom.jpg", description: "Edge processing & central data aggregation." },
        { id: "xStrain", name: "Bridge Sensor Digitizer", imgSrc: "/products/items/dist4-Photoroom.jpg", description: "High-resolution bridge sensor digitization." },
        { id: "xWave", name: "Digital Accelerometer Unit", imgSrc: "/products/items/dist5-Photoroom.jpg", description: "Low-noise structural vibration acquisition." },
        { id: "xSense", name: "Voltage Sensor Digitizer", imgSrc: "/products/items/dist6-Photoroom.jpg", description: "Multi-channel voltage & RTD digitizer." },
        { id: "xMet", name: "Weather Station", imgSrc: "/products/items/dist7-Photoroom (1).jpg", description: "Modular atmospheric sensing gateway." }
      ]
    },
    {
      title: "Centralized Systems",
      category: "Centralized",
      overview: "High-density synchronized acquisition with centralized computation and advanced structural analytics.",
      features: [
        'Scalable multi-channel backplanes',
        'Low-noise digitization & timing integrity',
        'Automated reporting & archiving',
        'Multi-sensor protocol integration',
        'Cloud & local hybrid workflows'
      ],
      cards: [
        { id: "xRover", name: "Multi-channel Real-Time Data", imgSrc: "/products/items/cent8-Photoroom.jpg", description: "Central hub for synchronized acquisition." },
        { id: "Accelerometers", name: "Analog Accelerometers", imgSrc: "/products/items/cent9-Photoroom.jpg", description: "High-precision structural accelerometers." }
      ]
    },
    {
      title: "All-in-One Solutions",
      category: "All-in-One",
      overview: "Integrated, rugged, standalone units combining sensing, edge computing, storage and communications.",
      features: [
        'Rugged IP-rated enclosure',
        'Edge analytics & compression',
        'Wide thermal operating range'
      ],
      cards: [
        { id: "xWave Max", name: "Digital Standalone Unit", imgSrc: "/products/download/image.png", description: "Fully digital edge SHM platform." }
      ]
    },
    {
      title: "Portable Systems",
      category: "Portable",
      overview: "Battery-powered, quickly deployable systems for campaign-based SHM and diagnostics.",
      features: [
        'Rapid tool-less deployment',
        'Extended battery autonomy',
        'Adaptive wireless mesh options',
        'Low-latency streaming'
      ],
      cards: [
        { id: "xWave-Ambient", name: "Portable Digital Accelerometer Unit", imgSrc: "/products/items/port11-Photoroom.jpg", description: "High-fidelity ambient vibration recorder." },
        { id: "xPlorer-Ambient", name: "Central Portable Acquisition Unit", imgSrc: "/products/items/port215-Photoroom.jpg", description: "Field analysis & multi-sensor hub." },
        { id: "Carry Box", name: "Ambient Equipment Carry Box", imgSrc: "/products/items/portable/portable2-16.png", description: "Rugged transport & protection system." },
        { id: "xNet-Ambient", name: "Portable Network Unit", imgSrc: "/products/items/xNet-Photoroom.jpg", description: "Resilient wireless networking node." }
      ]
    },
    {
      title: "User-Focused Solutions",
      category: "User-Focused",
      overview: "Human-centric interfaces and adaptive monitoring tailored to diverse operational stakeholders.",
      features: [
        'Context-aware visualization',
        'Remote fleet management',
        'Secure cloud integration',
        'Semantic event tagging'
      ],
      cards: [
        { id: "xPlorer-Home", name: "Intelligent interface that adapts to users", imgSrc: "/products/items/xplo-Photoroom.jpg", description: "Adaptive multi-role monitoring portal." }
      ]
    },
    {
      title: "Sensors",
      category: "Sensors",
      hideDetails: true,
      features: [
        'Low-noise broadband performance',
        'Temperature & drift compensated',
        'Energy harvesting options',
        'Environmental sealing (IP rated)',
        'Calibration traceability'
      ],
      cards: [
        { id: "smart-sensors", name: "Smart Sensors", imgSrc: "/products/download/sara3-Photoroom.jpg", description: "Short-period seismometers for microtremor & geophysical studies." },
        { id: "environmental-monitor", name: "Environmental Monitor", imgSrc: "/products/download/sara2-Photoroom.jpg", description: "Ultra-low noise force-balance accelerometer." },
        { id: "power-monitor", name: "Power Monitor", imgSrc: "/products/items/sensors/3.jpg", description: "Broadband structural & seismic sensing." },
        { id: "structural-sensors", name: "Structural Sensors", imgSrc: "/products/items/sensors/4.jpg", description: "Deep deployment structural sensing solutions." },
        { id: "vibration-sensors", name: "Vibration Sensors", imgSrc: "/products/download/sara5-Photoroom.jpg", description: "Rugged geophones for exploration & diagnostics." },
        { id: "multi-sensor-array", name: "Multi-Sensor Array", imgSrc: "/products/download/sara4-Photoroom.jpg", description: "Downhole modular high-channel array." }
      ]
    }
  ];

  // Section icons for buttons
  const sectionIcons = [
    '🔗', // Decentralized
    '🏢', // Centralized
    '📦', // All-in-One
    '📱', // Portable
    '👤', // User-Focused
    '📡', // Sensors
  ];

  // Show all 6 sections (including Sensors)
  const visibleSections = productSections;
  const sectionKeys = React.useMemo(
    () => visibleSections.map(s => (s.title || '').toString().toLowerCase().replace(/\s+/g, '-')),
    [visibleSections]
  );
  const [activeSection, setActiveSection] = useState(0); // default: first section open
  // Removed showAll feature

  // On mount and when URL changes, sync active section from ?section=
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionParam = params.get('section');
    if (sectionParam) {
      const idx = sectionKeys.indexOf(sectionParam);
      if (idx !== -1 && idx !== activeSection) setActiveSection(idx);
    }
  }, [location.search, sectionKeys, activeSection]);

  // Example data for 5 headings
const headingsData = [
  
  {
    heading: 'Static Monitoring of Structure',
    description: 'These sensors are used to measure the displacement/deformation of structural components to assess stress and strain.',
    cards: [
      { name: 'LVDT Sensors', image: '/sensors/lvdt.png', detailPath: '/details/1A' },
      { name: 'Strain Gauges', image: '/sensors/strain.png', detailPath: '/details/1B' },
      { name: 'Fibre Optic Sensor', image: '/sensors/fibre.png', detailPath: '/details/1C' },
      { name: 'Laser Displacement Sensors', image: '/sensors/laser.png', detailPath: '/details/1D' },
    ],
  },
  {
    

    heading: 'Dynamic Monitoring of Structure',
    description: 'These sensors are used to measuring vibrations and dynamic responses to traffic or environmental loads.',
    cards: [
      { name: 'Accelerometers', image: '/sensors/acc.png', detailPath: '/details/4A' },
      { name: 'Piezo Sensors', image: '/sensors/piezo.png', detailPath: '/details/4B' },
      { name: 'Concrete Vibration Sensors', image: '/sensors/con.png', detailPath: '/details/4C' },
      { name: 'Acoustic Emission Sensors', image: '/sensors/em.png', detailPath: '/details/4D' },
      { name: 'Seismometers', image: '/sensors/seis.jpg', detailPath: '/details/4E' },
    ],
  },
  {
    heading: 'Temperature Monitoring of Structure',
    description: 'Below sensors monitor environmental conditions that could contribute to material degradation or structural stress.',
    cards: [
      { name: 'Thermocouples', image: '/sensors/thermo.png', detailPath: '/details/3A' },
      { name: 'Fibre Optic Sensors', image: '/sensors/fibre.png', detailPath: '/details/3B' },
      { name: 'Thermistors', image: '/sensors/ther.png', detailPath: '/details/3C' },
      { name: 'Resistance Detectors', image: '/sensors/rtds.png', detailPath: '/details/3D' },
    ],
  },
  {
    heading: 'Corrosion Monitoring of Structure',
    description: 'These sensors are useful for continuous corrosion monitoring improves the safety of critical infrastructure by reducing the risk of sudden failures.',
    cards: [
      { name: 'Electrochemical Sensors', image: '/sensors/electro.png', detailPath: '/details/2A' },
      { name: 'Corrosion Coupons', image: '/sensors/corosion.png', detailPath: '/details/2B' },
      { name: 'Corrosion Probes', image: '/sensors/corosionprobe.png', detailPath: '/details/2C' },
      { name: 'Impedance Spectroscopy', image: '/sensors/im.png', detailPath: '/details/2D' },
    
    ],
    
  },
  {
    heading: 'Settlement Monitoring of Structure',
    description: 'These sensors help detect early signs of settlement, allowing for timely interventions that prevent structural damage and ensure the safety and longevity of the structure.',
    cards: [
      { name: 'Tiltmeters', image: '/sensors/titl.png', detailPath: '/details/5A' },
      { name: 'Inclinometers', image: '/sensors/inc.png', detailPath: '/details/5B' },
      { name: 'Extensometers', image: '/sensors/extenso.png', detailPath: '/details/5C' },
      { name: 'Laser Distance Sensors', image: '/sensors/laserdi.png', detailPath: '/details/5D' },
    ],
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
  <div>
        <div className="text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
          <div className="max-w-4xl mx-auto px-6">
             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Comprehensive monitoring solutions designed for modern infrastructure needs. 
              From decentralized networks to portable field systems, we provide cutting-edge technology 
              that delivers reliable performance and actionable insights.
            </p>
          </div>
        </div>

        {/* Section Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
          {visibleSections.map((section, idx) => (
            <button
              key={section.title}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300 border-2 focus:outline-none text-xl tracking-tight
                ${activeSection === idx ? 'bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white border-sppl-blue scale-105 shadow-2xl' : 'bg-white text-sppl-blue border-blue-200 hover:bg-blue-50 hover:scale-105'} animate-fade-in`}
              style={{ boxShadow: activeSection === idx ? '0 8px 32px 0 rgba(44, 62, 80, 0.15)' : undefined }}
              onClick={() => {
                setActiveSection(idx);
                const key = sectionKeys[idx];
                const params = new URLSearchParams(location.search);
                params.set('section', key);
                navigate({ pathname: location.pathname, search: `?${params.toString()}` }, { replace: false });
              }}
            >
              {idx !== 0 && (
                <span className={`text-3xl transition-transform duration-300 ${activeSection === idx ? 'scale-125 drop-shadow-lg' : ''}`}>
                  {section.cards[0]?.image || sectionIcons[idx]}
                </span>
              )}
              {section.title}
            </button>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
          {visibleSections.map((section, idx) => (
            <button
              key={section.title}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300 border-2 focus:outline-none text-xl tracking-tight ${activeSection === idx ? 'bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white border-sppl-blue scale-105 shadow-2xl' : 'bg-white text-sppl-blue border-blue-200 hover:bg-blue-50 hover:scale-105'} animate-fade-in`}
              style={{ boxShadow: activeSection === idx ? '0 8px 32px 0 rgba(44, 62, 80, 0.15)' : undefined }}
              onClick={() => {
                setActiveSection(idx);
                const key = sectionKeys[idx];
                const params = new URLSearchParams(location.search);
                params.set('section', key);
                navigate({ pathname: location.pathname, search: `?${params.toString()}` }, { replace: false });
              }}
            >
              {idx !== 0 && (
                <span className={`text-3xl transition-transform duration-300 ${activeSection === idx ? 'scale-125 drop-shadow-lg' : ''}`}>
                  {section.cards[0]?.image || sectionIcons[idx]}
                </span>
              )}
              {section.title}
            </button>
          ))}
        </div>


        {/* Expanded Section with background blur and divider */}
        <div className="max-w-7xl mx-auto px-6 relative space-y-8">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-lg rounded-3xl -z-10" />
          <div id={visibleSections[activeSection].title.toLowerCase().replace(/\s+/g,'-')}>
            <ProductSection key={visibleSections[activeSection].title} {...visibleSections[activeSection]} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Only show sensor headings when the Sensor Technology section is active */}
          {(() => {
            const sensorsIndex = visibleSections.findIndex(s => (s.category || '').toString().toLowerCase() === 'sensors');
            if (sensorsIndex !== -1 && activeSection === sensorsIndex) {
              return headingsData.map((section, idx) => (
                <section key={idx} className="mb-16 text-center">
                  {/* <h2 className="text-3xl font-bold text-sppl-blue mb-4">{section.heading}</h2> */}
                  {section.description && (
                    <p className="text-base text-gray-700 mb-6 text-center max-w-2xl mx-auto">{section.description}</p>
                  )}
                  {section.cards.length < 5 ? (
                    <div className="flex justify-center gap-6 w-full">
                      <div className="flex justify-center gap-6 w-full" style={{maxWidth: '100%'}}>
                        {section.cards.map((card, cidx) => (
                          <div style={{flex: '0 1 20%'}}>
                            <Card key={cidx} {...card} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center place-items-center">
                      {section.cards.map((card, cidx) => (
                        <Card key={cidx} {...card} />
                      ))}
                    </div>
                  )}
                </section>
              ));
            }

            return null;
          })()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Export headingsData for use in SensorDetail
export const headingsData = [
  {
    heading: 'Static Monitoring of Structure',
    description: 'These sensors are used to measure the displacement/deformation of structural components to assess stress and strain.',
    cards: [
      { name: 'LVDT Sensors', image: '/sensors/lvdt.png', detailPath: '/details/1A', description: 'LVDTs measure linear displacement by detecting changes in the magnetic flux of a ferromagnetic core moving within a coil. The output voltage correlates to the displacement.',application: 'Commonly used for monitoring bridge deflections, tunnel deformations and building subsidence. They are ideal for long-term structural health monitoring.' },
      { name: 'Strain Gauges', image: '/sensors/strain.png', detailPath: '/details/1B' ,description:'Strain gauges measure small deformations or strains in structural components by detecting changes in resistance when a material is stretched or compressed.', application: 'Used in monitoring strain in beams, columns, and structural joints in bridges, buildings, and dams.'},
      { name: 'Fibre Optic Sensor', image: '/sensors/fibre.png', detailPath: '/details/1C',description:'These sensors measure displacement through light transmission changes in fiber optic cables. They are often based on the Bragg Grating principle, where changes in strain alter the wavelength of reflected light.',application:'Widely used in monitoring large-scale structures such as bridges, tunnels, and dams for long-distance, real-time displacement measurements.' },
      { name: 'Laser Displacement Sensors', image: '/sensors/laser.png', detailPath: '/details/1D',description:'These sensors use laser beams to measure the distance between the sensor and the target. The time it takes for the laser to reflect back provides the displacement data.',application:'Ideal for monitoring structural movement, cracks, and surface deformation in civil infrastructure projects.' },
    ],
  },
  {
    heading: 'Dynamic Monitoring of Structure',
    description: 'These sensors are used to measuring vibrations and dynamic responses to traffic or environmental loads.',
    cards: [
      { name: 'Accelerometers', image: '/sensors/acc.png', detailPath: '/details/4A' ,description:'Accelerometers measure the acceleration of a structure in one or multiple directions. They can detect vibrations and changes in velocity due to dynamic loads.' , application:'Used to measure vibrations and structural responses in bridges, high-rise buildings, and dams under wind, traffic, or seismic loads.'},

      { name: 'Piezo Sensors', image: '/sensors/piezo.png', detailPath: '/details/4B',description:'Piezoelectric materials (like quartz or certain ceramics) produce an electrical charge when they are mechanically deformed. The amount of charge is directly proportional to the force or pressure applied. This makes piezo sensors ideal for dynamic monitoring, as they can detect rapid changes in force or pressure and convert them into a measurable electrical signal. ', application:'Piezo sensors can detect even small changes in dynamic forces, vibrations, and impacts, making them ideal for early detection of structural issues. '},
      { name: 'Concrete Vibration Sensors', image: '/sensors/con.png', detailPath: '/details/4C' ,description:'An embeddable piezo composite concrete vibration sensor for structural health monitoring of reinforced concrete. ',application:'Used to measure vibrations and structural responses in bridges, high-rise buildings, and dams under wind, traffic, or seismic loads.' },

      { name: 'Acoustic Emission Sensors', image: '/sensors/em.png', detailPath: '/details/4D' ,description:'Acoustic emission sensors detect the high-frequency waves emitted by cracks or other stress-induced events in materials. These sensors are particularly useful for detecting the initiation and growth of structural damage.',application :'Used for real-time monitoring of cracks or faults in critical structures like bridges, dams, and buildings under dynamic loads.'},
      { name: 'Seismometers', image: '/sensors/seis.jpg', detailPath: '/details/4E',description:'Seismometers measure ground motion or structural vibration caused by seismic events or other dynamic forces. They are highly sensitive to even small vibrations.' ,application:'Used for monitoring the dynamic response of buildings, bridges, or dams during earthquakes or seismic activity.'},
    ],
  },
  {
    heading: 'Temperature Monitoring of Structure',
    description: 'Below sensors monitor environmental conditions that could contribute to material degradation or structural stress.',
    cards: [
      { name: 'Thermocouples', image: '/sensors/thermo.png', detailPath: '/details/3A',description:'Thermocouples consist of two different metals joined at one point, generating a voltage based on temperature changes. ' ,application:'Used for monitoring concrete curing in bridges and buildings, as well as assessing temperature changes in tunnels or large-scale structures. Thermocouples are suitable for high-temperature environments, such as during fire or heat exposure tests on structures.'},
      { name: 'Fibre Optic Sensors', image: '/sensors/fibre.png', detailPath: '/details/3B' ,description:'fiber optic cables sense temperature changes by detecting variations in light transmission through the fiber, typically based on the Brillouin or Raman scattering principle.' , application:'Widely used in monitoring large structures like dams, bridges, and tunnels. Fiber optic sensors can measure temperature over long distances, making them ideal for extensive infrastructure projects.'},
      { name: 'Thermistors', image: '/sensors/ther.png', detailPath: '/details/3C' ,description:'These sensors are made of ceramic materials that change resistance with temperature. Negative Temperature Coefficient (NTC) thermistors are more commonly used.',application:'Suitable for monitoring localized temperature changes in structures like concrete elements, retaining walls, and structural foundations.'},

      { name: 'Resistance Detectors', image: '/sensors/rtds.png', detailPath: '/details/3D' ,description:'RTDs operate on the principle that the resistance of metals (often platinum) changes with temperature.',application:'Often used in bridges, large-scale buildings, and tunnels to monitor temperature gradients over time, especially in regions with significant seasonal temperature fluctuations.'},
    ],
  },
  {
    heading: 'Corrosion Monitoring of Structure',
    description: 'These sensors are useful for continuous corrosion monitoring improves the safety of critical infrastructure by reducing the risk of sudden failures.',
    cards: [
      { name: 'Electrochemical Sensors', image: '/sensors/electro.png', detailPath: '/details/2A',description:'These sensors measure electrochemical activity on the surface of metals to detect corrosion initiation. They typically measure parameters like corrosion potential, polarization resistance, or galvanic currents between two electrodes.',application:'Widely used in monitoring the corrosion of steel reinforcements in concrete structures such as bridges, tunnels, and buildings.' },
      { name: 'Corrosion Coupons', image: '/sensors/corosion.png', detailPath: '/details/2B' ,description:'These are small metal strips made from the same material as the structure, exposed to the same environment. Over time, the corrosion on the coupon can be measured to estimate the corrosion rate.',application:'Used in bridges, pipelines and offshore structures to estimate the rate of corrosion in harsh environments.'},
      { name: 'Corrosion Probes', image: '/sensors/corosionprobe.png', detailPath: '/details/2C',description:'These probes, made from the same metal as the structure, measure corrosion activity in real time by detecting changes in resistivity or potential.',application:'Used in harsh environments, such as offshore structures, bridges exposed to de-icing salts, and underground structures.' },
      { name: 'Impedance Spectroscopy', image: '/sensors/im.png', detailPath: '/details/2D',description:'These sensors measure the impedance of the material in response to an alternating current. Changes in impedance can indicate the presence of corrosion or degradation of protective coatings.',application:'Used in monitoring the corrosion of steel structures or protective coatings in marine environments, tunnels, or buried pipelines.' },
    
    ],
    
  },
  {
    heading: 'Settlement Monitoring of Structure',
    description: 'These sensors help detect early signs of settlement, allowing for timely interventions that prevent structural damage and ensure the safety and longevity of the structure.',
    cards: [
      { name: 'Tiltmeters', image: '/sensors/titl.png', detailPath: '/details/5A' ,description:'Tiltmeters measure changes in the angle or tilt of a structure. If part of a structure settles unevenly, tiltmeters can detect the slight angular displacement.',application:'Used in monitoring the settlement of buildings, bridges, tunnels, and dams.'},
      { name: 'Inclinometers', image: '/sensors/inc.png', detailPath: '/details/5B',description:'Inclinometers are used to measure horizontal displacements and lateral movements of soil or structural components, which can indicate settlement or shifting of the foundation.',application:'Typically used in embankments, retaining walls, deep excavations, and other structures where lateral soil movement might contribute to settlement.' },
      { name: 'Extensometers', image: '/sensors/extenso.png', detailPath: '/details/5C' ,description:'Extensometers measure the distance between two fixed points in a structure, tracking changes that may indicate settlement or subsidence. They can be mechanical, electrical, or optical.',application:'Often used in monitoring the settlement of foundations, embankments, and retaining walls.'},
      { name: 'Laser Distance Sensors', image: '/sensors/laserdi.png', detailPath: '/details/5D' ,description:'Laser sensors measure the distance between a fixed reference point and the structure, allowing for precise measurement of vertical displacement due to settlement.',application:'Used in tall buildings, bridges, and tunnels to monitor any downward or uneven settlement.'},
    ],
  },
];

export default Products;
