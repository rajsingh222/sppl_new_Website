import React, { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from 'react';

// Carousel with center-mode and infinite rotation by reordering items
const Testimonials = () => {
	const baseItems = useMemo(
		() => [
			{ id: 1, quote: 'We consulted Sanrachna Prahari to evaluate the structural integrity of a high-rise building. Their detailed assessment and use of cutting-edge SHM technologies provided us with proactive solutions. Their professionalism and technical prowess are unmatched.', company: 'Raman Reti Ashram', logo: encodeURI('/img/RamanReti.jpg') },
			{ id: 2, quote: 'SPPL’s structural health monitoring solutions have greatly improved the safety and reliability of our projects. Their team is professional, responsive and delivers cost-effective systems that help us maintain and extend the life of our structures.', name: 'Avinya Greens Constructions', company: 'Avinya Greens Construction', logo: encodeURI('/logo/avgc.png') },
			{ id: 3, quote: 'SPPL’s technology has given us confidence in the safety of the infrastructure we rely on every day. Their monitoring systems provide peace of mind by ensuring critical structures remain strong and reliable.', company: 'Mr. Siddhant Shukla', logo: encodeURI('/img/Sid.jpeg') },
			{ id: 4, quote: 'SPPL is building innovative solutions that bring real value to the construction industry. Their focus on safety, reliability, and technology sets them apart. We appreciate their dedication and look forward to working with them as they continue to grow', company: 'FITT', logo: encodeURI('/logo/Fitt.png') },

		],
		[]
	);
	const [items, setItems] = useState(baseItems);
	const [active, setActive] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isInstant, setIsInstant] = useState(false); // disable transition during reorder
	const [translate, setTranslate] = useState(0);
	const [gap, setGap] = useState(24); // px
	const [visibleCount, setVisibleCount] = useState(1);
	const [slideWidth, setSlideWidth] = useState(0);
	const [peek, setPeek] = useState(0); // px side peek on small screens
	const timerRef = useRef(null);
	const trackRef = useRef(null);
	const viewportRef = useRef(null);



	// Controls
	const centerIndex = visibleCount === 3 ? 1 : 0;

	useEffect(() => {
		setActive(centerIndex);
	}, [centerIndex]);

	const scheduleRotate = useCallback((direction) => {
		setIsAnimating(true);
		window.setTimeout(() => {
			setIsInstant(true);
			setItems((prev) => {
				if (direction === 'next') {
					const [first, ...rest] = prev;
					return [...rest, first];
				}
				const last = prev[prev.length - 1];
				const rest = prev.slice(0, -1);
				return [last, ...rest];
			});
			setActive(centerIndex);
			requestAnimationFrame(() => {
				setIsInstant(false);
				setIsAnimating(false);
			});
		}, 520); // slightly longer than CSS duration
	}, [centerIndex]);

	const next = useCallback(() => {
		if (isAnimating) return;
		setActive(centerIndex + 1);
		scheduleRotate('next');
	}, [isAnimating, centerIndex, scheduleRotate]);

	// Autoplay (placed after `next` so linter doesn't report use-before-define)
	useEffect(() => {
		if (isPaused) return;
		timerRef.current = setInterval(() => {
			next();
		}, 3200);
		return () => clearInterval(timerRef.current);
	}, [isPaused, visibleCount, next]);

	const prev = () => {
		if (isAnimating) return;
		if (visibleCount === 1) {
			// For 1 visible, pre-rotate without animation (simple UX)
			setIsInstant(true);
			setItems((prev) => {
				const last = prev[prev.length - 1];
				return [last, ...prev.slice(0, -1)];
			});
			requestAnimationFrame(() => setIsInstant(false));
			return;
		}
		setActive(centerIndex - 1);
		scheduleRotate('prev');
	};

	const onKeyDown = (e) => {
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	};

	// Measure sizes
	useLayoutEffect(() => {
		const measure = () => {
			if (!viewportRef.current || !trackRef.current) return;
			const containerWidth = viewportRef.current.clientWidth;
			const isDesktop = window.innerWidth >= 1024; // lg
			const isTablet = window.innerWidth >= 768; // md
			const newVisibleCount = isDesktop || isTablet ? 3 : 1;
			const newGap = isDesktop ? 28 : isTablet ? 24 : 16;
			setGap(newGap);
			setVisibleCount(newVisibleCount);
			if (newVisibleCount === 1) {
				const newPeek = Math.round(Math.min(40, Math.max(16, containerWidth * 0.07)));
				setPeek(newPeek);
				setSlideWidth(containerWidth - newPeek * 2);
			} else {
				setPeek(0);
				setSlideWidth((containerWidth - newGap * (newVisibleCount - 1)) / newVisibleCount);
			}
		};
		measure();
		const ro = new ResizeObserver(measure);
		if (viewportRef.current) ro.observe(viewportRef.current);
		window.addEventListener('resize', measure);
		return () => {
			ro.disconnect();
			window.removeEventListener('resize', measure);
		};
	}, []);

	// Recenter on change
	useLayoutEffect(() => {
		if (!viewportRef.current || !trackRef.current) return;
		const slides = trackRef.current.querySelectorAll('[data-slide]');
		const containerWidth = viewportRef.current.clientWidth;
		const idx = active;
		const el = slides[idx];
		if (!el) return;
		const offsetLeft = el.offsetLeft;
		const centerOfSlide = offsetLeft + slideWidth / 2;
		const desired = containerWidth / 2;
		setTranslate(desired - centerOfSlide);
	}, [active, slideWidth, gap, visibleCount, peek, items]);

	return (
		<section id="testimonials" className="relative py-16 sm:py-20 bg-gradient-to-br from-white via-green-50 to-sky-50" aria-label="Testimonials">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-10 sm:mb-14">
					<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-600 to-sppl-dark-blue">What our partners say</span>
					</h2>
					<div className="mt-3 flex justify-center">
						<div className="h-1 w-28 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
					</div>
					<p className="mt-3 text-gray-600 max-w-2xl mx-auto">Real outcomes from real deployments — reliability, clarity and speed.</p>
				</div>

				<div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
					<button aria-label="Previous testimonial" onClick={prev} className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-gray-200 shadow hover:shadow-md hover:bg-gray-50">
						<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button aria-label="Next testimonial" onClick={next} className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-gray-200 shadow hover:shadow-md hover:bg-gray-50">
						<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</button>

					<div ref={viewportRef} role="region" aria-roledescription="carousel" aria-label="Testimonials carousel" tabIndex={0} onKeyDown={onKeyDown} className="outline-none">
						<div ref={trackRef} className={`flex items-stretch transition-transform ${isInstant ? 'duration-0' : 'duration-500'} ease-out will-change-transform`} style={{ transform: `translateX(${translate}px)`, gap: `${gap}px`, paddingLeft: `${peek}px`, paddingRight: `${peek}px` }}>
							{items.map((t, idx) => {
								const isActive = idx === active;
								const prevIdx = (active - 1 + items.length) % items.length;
								const nextIdx = (active + 1) % items.length;
								const isNeighbor = idx === prevIdx || idx === nextIdx;
								const scale = isActive ? 'scale-100' : isNeighbor ? 'scale-95' : 'scale-90';
								const blur = isActive ? 'blur-0' : isNeighbor ? 'blur-[1px]' : 'blur-[2px]';
								const opacity = isActive ? 'opacity-100' : isNeighbor ? 'opacity-90' : 'opacity-80';
								return (
									<article key={t.id} data-slide className={`${opacity} shrink-0`} style={{ width: `${slideWidth}px` }}>
										<div className={`h-full bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 transition-all duration-500 ${scale} ${blur}`}>
											<div className="flex items-center gap-3 sm:gap-4 mb-4">
												<div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
													{t.logo ? (
														<img src={t.logo} alt={t.company} className="max-h-10 sm:max-h-12 w-auto object-contain" loading="lazy" />
													) : (
														<span className="text-lg sm:text-xl font-semibold text-gray-600">{t.company?.[0] || 'S'}</span>
													)}
												</div>
												<div>
													<div className="font-semibold text-gray-900">{t.company}</div>
													<div className="text-xs sm:text-sm text-gray-500">{t.role}</div>
												</div>
											</div>
											<p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">“{t.quote}”</p>
											<div className="mt-4 sm:mt-6 text-sm text-gray-500">— {t.name}</div>
										</div>
									</article>
								);
							})}
						</div>
					</div>

					<div className="mt-6 flex justify-center gap-2">
						{items.map((_, i) => (
							<button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setActive(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-sppl-blue' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
