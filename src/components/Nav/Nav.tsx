import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Nav.module.scss';
import logo from '../../assets/img/logo.svg';
import { LinkBar } from '../LinkBar/LinkBar';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export const Nav = () => {
	const {breakpoint} = useContext(AppContext)!;
	const [mobileMenuShown, setMobileMenuShown] = useState(false);

	return (
		<Wrapper className={styles.wrapper}>
			<nav className={styles.nav}>
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
			</nav>
		</Wrapper>
	);
};
