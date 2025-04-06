import React from 'react';

import logo from '../../assets/img/logo.svg';

import * as styles from './Header.module.scss';
import { LinkBar } from '../LinkBar/LinkBar';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { useContext } from 'react';
import { useBreakpoints } from '../../hooks/useBreakpoint';
import { AppContext } from '../../contexts/app.context';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export const Header = () => {
  const {breakpoint} = useBreakpoints();
	const { mobileMenuShown, setMobileMenuShown } =
		useContext(AppContext)!;

	return (
		<nav
			className={`${styles.nav} ${
				mobileMenuShown ? styles['activeMobileMenu'] : ''
			}`}>
			<div className={styles.navbar_container}>
				<AnchorLink to='/#home' className={styles.logo}>
					<img src={logo} alt='kwatery u zosi - logo' />
				</AnchorLink>

				{breakpoint.lg ? (
					<LinkBar />
				) : (
					<BurgerBtn
						className={styles.burgerBtn}
						mobileMenuShown={mobileMenuShown}
						toggleMenu={setMobileMenuShown}
					/>
				)}

				{mobileMenuShown && <LinkBar />}
			</div>
		</nav>
	);
};
