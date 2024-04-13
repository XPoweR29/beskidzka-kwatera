import styles from './LinkBar.module.scss';

export const LinkBar = () => {
	return(
        <div className={styles.linkbar}>
            <a href="#">Start</a>
            <a href="#offer">Oferta</a>
            <a href="#attractions">Atrakcje</a>
            <a href="#facilities">Udogodnienia</a>
            <a href="#contact">Kontakt</a>
        </div>
    );
};
