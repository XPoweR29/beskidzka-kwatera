import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Footer.module.scss';
import blackWave_small from '../../assets/img/blackWave_small.png';

export const Footer = () => {
    return (
        <section id='footer' className={styles.footer}>
            <img src={blackWave_small} className={styles.wave}/>
            <Wrapper className={styles.wrapper}>

            </Wrapper>
        </section>
    );
}