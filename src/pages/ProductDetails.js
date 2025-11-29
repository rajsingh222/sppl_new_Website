// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { findProductById } from '../data/productsData';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const result = findProductById(id);

//   React.useEffect(() => { try { window.scrollTo({ top: 0, behavior: 'auto' }); } catch {} }, [id]);

//   if (!result) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-white">
//         <div className="text-center">
//           <p className="text-lg font-semibold text-red-600 mb-4">Product not found</p>
//           <button onClick={() => navigate('/myproducts')} className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium">Back to Products</button>
//         </div>
//       </div>
//     );
//   }

//   const { product, section } = result;

//   return (
//     <div className="min-h-screen flex flex-col px-0">
//       {/* Blue heading bar */}
//       <div className="w-full bg-sppl-blue text-white">
//         <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center gap-4">
//           {/* Go Back button on the left */}
//           <div className="justify-self-start">
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="inline-flex items-center gap-2 rounded-lg border border-white/60 text-white/95 hover:bg-white/10 active:bg-white/15 px-3 py-2 text-sm font-medium transition-colors"
//             >
//               {/* simple chevron */}
//               <span className="inline-block rotate-180 select-none">➜</span>
//               Go Back
//             </button>
//           </div>

//           {/* Centered heading */}
//           <h1 className="col-start-2 text-center text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">{product.name}</h1>

//           {/* Right spacer to balance layout */}
//           <div />
//         </div>
//       </div>

//       {/* Content container with light gradient, centered on screen */}
//       <div className="flex-1 flex items-center justify-center px-6 py-8">
//         <div className="w-full max-w-7xl bg-gradient-to-br from-white via-sky-50 to-blue-50 rounded-2xl p-3 md:p-8 ring-1 ring-slate-200">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//             {/* Image */}
//             <div className="lg:col-span-5 flex items-center justify-center">
//             {product.imgSrc ? (
//               <img
//                 src={product.imgSrc}
//                 alt={product.name}
//                 className="max-h-36 md:max-h-52 lg:max-h-60 max-w-full object-contain"
//                 onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/img/sppl-logo.png'; }}
//                 loading="lazy"
//               />
//             ) : (
//               <img src="/img/sppl-logo.png" alt="Logo" className="h-24 opacity-70" />
//             )}
//             </div>

//             {/* Overview */}
//             <div className="lg:col-span-4">
//               <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">Overview</h2>
//               <p className="text-slate-700 leading-relaxed text-sm md:text-base">
//                 {section.overview || 'This solution delivers reliable, scalable structural monitoring with modern acquisition & analytics.'}
//               </p>
//             </div>

//             {/* Key Features */}
//             <div className="lg:col-span-3">
//               <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">Key Features</h2>
//               <ul className="space-y-2.5 text-slate-700">
//                 {(section.features && section.features.length ? section.features : [
//                   'Real-time data monitoring',
//                   'Scalable edge + cloud architecture',
//                   'AI-powered insights',
//                   'User-friendly interface'
//                 ]).map((f,i)=>(
//                   <li key={i} className="flex items-start gap-3">
//                     <span className="mt-1.5 w-2 h-2 rounded-full bg-sppl-blue/80 flex-shrink-0" />
//                     <span className="text-sm md:text-base leading-relaxed font-medium">{f}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findProductById } from '../data/productsData';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const result = findProductById(id);

  React.useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {}
  }, [id]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-100 px-6 py-12">
        <div className="text-center bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
          <p className="text-lg font-semibold text-red-600 mb-6">
            Product not found
          </p>
          <button
            onClick={() => navigate('/myproducts')}
            className="px-6 py-2.5 rounded-lg bg-sppl-blue text-white font-medium shadow hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const { product, section } = result;
  // Prefer per-product overview/features; fall back to section-level, then defaults
  const defaultOverview = 'This solution delivers reliable, scalable structural monitoring with modern acquisition & analytics.';
  const defaultFeatures = [
    'Real-time data monitoring',
    'Scalable edge + cloud architecture',
    'AI-powered insights',
    'User-friendly interface',
  ];
  const overviewText = product.overview || section.overview || defaultOverview;
  const featureList = (Array.isArray(product.features) && product.features.length
    ? product.features
    : (Array.isArray(section.features) && section.features.length ? section.features : defaultFeatures));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-sky-50">
      {/* Header */}
      <div className="w-full bg-sppl-blue text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/50 text-white/95 hover:bg-white/10 active:bg-white/15 px-3 py-2 text-sm font-medium transition-colors"
          >
            <span className="inline-block rotate-180 select-none">➜</span>
            Go Back
          </button>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            {product.name}
          </h1>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-7xl bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-200 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Image Section */}
            <div className="lg:col-span-4 flex items-center justify-center">
              {product.imgSrc ? (
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="max-h-48 md:max-h-64 lg:max-h-72 object-contain drop-shadow-md transition-transform hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/img/sppl-logo.png';
                  }}
                  loading="lazy"
                />
              ) : (
                <img
                  src="/img/sppl-logo.png"
                  alt="Logo"
                  className="h-28 opacity-70"
                />
              )}
            </div>

            {/* Overview Section */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Overview</h2>
              <p className="text-slate-700 leading-relaxed text-base" style={{ textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>{overviewText}</p>
            </div>

            {/* Features Section */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 border-b border-slate-200 pb-2">Key Features</h2>
              <ul className="space-y-2.5 text-slate-700">
                {featureList.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-sppl-blue/80 flex-shrink-0" />
                    <span className="text-sm md:text-base leading-relaxed font-medium" style={{ textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
