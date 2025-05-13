'use client';

import React from 'react';
import styles from './Header.module.scss';
import { LinkBar } from '../LinkBar/LinkBar';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { useContext } from 'react';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import { AppContext } from '../../contexts/app.context';

import logo from '../../assets/images/kwatery-u-zosi_logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '@/hooks/useAppContext';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
	const { breakpoint } = useBreakpoints();
	const { mobileMenuShown, setMobileMenuShown } = useAppContext();

	return (
		<nav
			className={`${styles.nav} ${
				mobileMenuShown ? styles['activeMobileMenu'] : ''
			}`}>
			<div className={styles.navbar_container}>
				<Link href='/#start' className={styles.logo}>
					<Image
						src={logo}
						alt='Kwatery u Zosi – pokoje i noclegi Węgierska Górka'
					/>
				</Link>

				{breakpoint.lg ? (
					<LinkBar />
				) : (
					<BurgerBtn
						className={styles.burgerBtn}
						mobileMenuShown={mobileMenuShown}
						toggleMenu={setMobileMenuShown}
					/>
				)}

				{mobileMenuShown && <MobileMenu />}
			</div>
		</nav>
	);
};
