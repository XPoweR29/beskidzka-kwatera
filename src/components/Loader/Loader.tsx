import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Loader.module.scss';

export const Loader = () => {
	return (
		<Wrapper className={styles.wrapper}>
			<div className={styles.loader}></div>
		</Wrapper>
	);
};
