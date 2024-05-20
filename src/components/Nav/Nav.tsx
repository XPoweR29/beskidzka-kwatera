import styles from './Nav.module.scss';
import logo from '../../assets/img/logo.svg';
import { LinkBar } from '../LinkBar/LinkBar';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const Nav = () => {
	const { breakpoint, mobileMenuShown, setMobileMenuShown } = useContext(AppContext)!;
	
	return (
		<nav className={`${styles.nav} ${mobileMenuShown ? styles['activeMobileMenu'] : '' }`}>
			<div className={styles.navbar_container}>
				<a href='/' className={styles.logo}>
					<img src={logo} />
				</a>

				{breakpoint.lg ? (
					<LinkBar />
				) : (
					<BurgerBtn
						className={styles.burgerBtn}
						mobileMenuShown={mobileMenuShown}
						toggleMenu={setMobileMenuShown}
					/>
				)}

				{mobileMenuShown && <LinkBar/>}
			</div>
		</nav>
	);
};
