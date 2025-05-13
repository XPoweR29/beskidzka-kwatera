'use client';
import React from 'react';
import styles from './LinkBar.module.scss';

import { useEffect } from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import Link from 'next/link';
import { motion, Variants } from 'motion/react';
import { useDropdown } from '@/hooks/useDropdown';
import { menuLinks } from '@/data/navLinks';

export const LinkBar = () => {
	const { visibleSection } = useAppContext();
	const { closeMenu, openMenu, isSubmenuOpen } = useDropdown();

	const dropdownVariants: Variants = {
		open: {
			y: 0,
			opacity: 1,
			visibility: 'visible',
			pointerEvents: 'auto',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		closed: {
			y: -20,
			opacity: 0,
			visibility: 'hidden',
			pointerEvents: 'none',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
	};

	useEffect(() => {
		if (location.hash && location.pathname === '/') {
			const id = location.hash.replace('#', '');
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
		if (location.pathname === '/' && !location.hash) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [location]);

	return (
		<ul className={styles.linkbar}>
			{menuLinks.map((link) => (
				<li key={link.id} className={styles.menuItem}>
					<Link
						href={link.href}
						className={`${styles.link} ${
							visibleSection === link.id ? styles.linkActive : ''
						}`}
						onMouseEnter={link.name === 'Atrakcje' ? openMenu : undefined}
						onMouseLeave={closeMenu}>
						{link.name}
					</Link>

					{link.children && (
						<motion.ul
							className={styles.dropdown}
							onMouseEnter={openMenu}
							onMouseLeave={closeMenu}
							initial='closed'
							variants={dropdownVariants}
							animate={isSubmenuOpen ? 'open' : 'close'}>
							{link.children.map((child) => (
								<li key={child.id}>
									<Link href={child.href} className={styles.dropdownLink}>
										{child.name}
									</Link>
								</li>
							))}
						</motion.ul>
					)}
				</li>
			))}
		</ul>
	);
};
