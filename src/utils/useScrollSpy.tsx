import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				});
			},
			{ rootMargin: '-50% 0px -50px 0px', threshold: 0.5 }
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => {
			sectionIds.forEach((id) => {
				const el = document.getElementById(id);
				if (el) observer.unobserve(el);
			});
		};
	}, [sectionIds]);

    return activeSection;
};

