'use client';

import React from 'react';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import { useAppContext } from '@/hooks/useAppContext';
import { menuLinks } from '@/data/navLinks';

export const MobileMenu = () => {
	const { setMobileMenuShown } = useAppContext();

	const handleClick = () => {
		setTimeout(() => {
			setMobileMenuShown(false);
		}, 10);
	};
	return (
		<ul className={styles.mobileMenu}>
			{menuLinks.map((link) => (
				<li key={link.id}>
					<Link href={link.href} className={styles.link} onClick={handleClick}>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
};
