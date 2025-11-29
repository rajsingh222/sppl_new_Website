import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* global __webpack_public_path__ */

// --- Dynamic public path correction (for deep links like /myproducts/...) ---
// CRA sets __webpack_public_path__ at build time; stale cached main bundle or prior homepage
// settings can cause relative chunk requests like /myproducts/static/js/X.js.
// Force it to root if we detect a deep route.
// eslint-disable-next-line no-undef
if (typeof __webpack_public_path__ !== 'undefined') {
  try {
    const needsRoot = /^\/myproducts\//.test(window.location.pathname);
    if (needsRoot && !__webpack_public_path__.startsWith('/')) {
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-global-assign
      __webpack_public_path__ = '/';
      // Mark for diagnostics
      window.__SPPL_PUBLIC_PATH_FIXED__ = true;
    }
  } catch (e) {
    // silent
  }
}

// --- Global chunk load retry handler ---
let spplChunkRetry = false;
window.addEventListener('error', (e) => {
  if (!e?.message || !/ChunkLoadError/i.test(e.message)) return;
  if (spplChunkRetry) return;
  spplChunkRetry = true;
  // Attempt a hard reload to root to fetch fresh main bundle
  const url = window.location.href;
  // Add a cache-busting query param
  const divider = url.includes('?') ? '&' : '?';
  window.location.replace('/' + divider + 'v=' + Date.now());
});

// Fallback for promise rejections
window.addEventListener('unhandledrejection', (e) => {
  if (!e?.reason || !/ChunkLoadError/i.test(String(e.reason))) return;
  if (spplChunkRetry) return;
  spplChunkRetry = true;
  window.location.replace('/?v=' + Date.now());
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
