import { useContext, useEffect, useRef } from 'react';
import { ScrollSpySection } from '../ScrollSpySection/ScrollSpySection';
import styles from './PageAttractions.module.scss';
import { AppContext } from '../../context/AppContext';
import { Wrapper } from '../Wrapper/Wrapper';
import whiteWave_small from '../../assets/img/whiteWave_small.svg';
import whiteWave_large from '../../assets/img/whiteWave.svg';
import folk_sign from '../../assets/img/folk_sign_gray.svg';
import folk_sign_big from '../../assets/img/folk_sign.svg';
import butterfly from '../../assets/img/butterfly.webp';
import fort1 from '../../assets/photos/fort1.avif';
import fort2 from '../../assets/photos/fort2.avif';
import statue1 from '../../assets/photos/statue1.avif';
import statue2 from '../../assets/photos/statue2.avif';
import boulevard1 from '../../assets/photos/boulevard1.avif';
import boulevard2 from '../../assets/photos/boulevard2.avif';
import gory1 from '../../assets/photos/gory1.avif';
import gory2 from '../../assets/photos/gory2.avif';
import bewery1 from '../../assets/photos/brewery1.avif';
import bewery2 from '../../assets/photos/brewery2.avif';
import inn1 from '../../assets/photos/inn1.avif';
import inn2 from '../../assets/photos/inn2.avif';
import wave__small from '../../assets/img/blackWave_small.svg';
import wave__large from '../../assets/img/blackWave.svg';
import bg_wave from '../../assets/img/bg_wave.svg';
import { AnimeContent } from '../AnimeContent/AnimeContent';
import { Footer } from '../Footer/Footer';

export const PageAttractions = () => {
	const { setVisibleSection, breakpoint } = useContext(AppContext)!;
	const heroRef = useRef<HTMLDivElement | null>(null);

	const startHeroPosition = `50%`;

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			heroRef.current!.style.backgroundPositionY = `calc(${startHeroPosition} + ${
				offset * 0.5
			}px)`;
		};

		window.addEventListener('scroll', handleScroll);
		setVisibleSection('atrakcje');
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<ScrollSpySection
				className={styles.attractions}
				id='atrakcje'
				onVisible={() => setVisibleSection('atrakcje')}>
				<header
					className={styles.header}
					ref={heroRef}
					style={{ backgroundPositionY: `${startHeroPosition}` }}>
					<Wrapper className={styles.header__wrapper}>
						<h1 className={styles.header__title}> Odkrywaj Węgierską Górkę</h1>
						<div className={styles.divider}>
							<span className={styles.line}></span>
							<img src={folk_sign} alt=''/>
							<span className={styles.line}></span>
						</div>
					</Wrapper>
					<img
						src={breakpoint.lg ? whiteWave_large : whiteWave_small}
						className={styles.whiteWave}
						draggable='false'
						alt=''
					/>
				</header>

				<Wrapper className={styles.wrapper}>
					<img src={bg_wave} className={styles.background_wave} alt=''/>
					<img
						src={bg_wave}
						className={`${styles.background_wave} ${styles['background_wave--2']}`}
						alt=''
					/>

					<p className={styles.attractions__text}>
						Odkryj Węgierską Górkę, malowniczą miejscowość pełną atrakcji, która
						stanowi idealną bazę wypadową do Beskidu Śląskiego i Beskidu
						Żywieckiego. Tu, gdzie historia splata się z naturą, każdy znajdzie
						coś dla siebie – od miłośników górskich wędrówek, przez pasjonatów
						historii, aż po szukających lokalnych smaków i rozrywki.
					</p>

					<div className={styles.attractionContainer}>
						<AnimeContent direction='left' className={styles.animated}>
							<div className={styles.attraction}>
								<div className={styles.attraction__photo}>
									<img src={fort1} alt='forty w węgierskiej górce' />
									<img src={fort2} alt='fortyfikacje' />
								</div>

								<div className={styles.attraction__brief}>
									<h2 className={styles.attraction__heading}>
										Forty z czasów II Wojny Światowej
									</h2>
									<p className={styles.attraction__text}>
										Zwane czasem "Westerplatte Południa", są świadectwem
										bohaterskiej historii Polski. Stanowią one część linii
										obronnej z września 1939 roku, gdzie polscy żołnierze
										stawiali zaciekły opór niemieckiemu najeźdźcy. Wśród nich
										Fort Wędrowiec, Wyrwidąb, Wąwóz oraz Waligóra, każdy z nich
										ma swoją unikalną historię i architekturę. Dziś te obiekty
										są dostępne dla turystów, oferując nie tylko lekcję
										historii, ale również imponujące widoki na okolicę.
										Odwiedzając je, można poczuć atmosferę tamtych dni i oddać
										hołd tym, którzy walczyli o wolność.
									</p>
								</div>
							</div>
						</AnimeContent>

						<AnimeContent direction='right' className={styles.animated}>
							<div className={styles.attraction}>
								<img
									src={folk_sign_big}
									className={styles.folk_sign_big}
									draggable='false'
									alt=''
								/>
								<div
									className={`${styles.attraction__photo} ${styles['attraction__photo--v2']}`}>
									<img src={statue2} alt='aleja zbójników' />
									<img src={statue1} alt='zdjęcie zbójników' />
								</div>
								<div className={styles.attraction__brief}>
									<h2 className={styles.attraction__heading}>
										Aleja Zbójników
									</h2>
									<p className={styles.attraction__text}>
										Aleja Zbójników to unikatowe miejsce w Węgierskiej Górce,
										które oddaje hołd lokalnej historii zbójnictwa. Powstała w
										2009 roku, jest wynikiem artystycznego pleneru
										rzeźbiarskiego. Znajduje się tu sześć monumentalnych rzeźb o
										wysokości od 4,5 do 5 metrów, przedstawiających postaci
										zbójników. Rzeźby te, umieszczone wzdłuż ul. Zielonej
										niedaleko Urzędu Gminy, stanowią fascynujące połączenie
										sztuki z lokalną tradycją. Inicjatywa ta nie tylko wzbogaca
										kulturalny krajobraz Węgierskiej Górki, ale również jest
										zaproszeniem do dalszego poznawania bogatej historii
										regionu.
									</p>
								</div>
							</div>
						</AnimeContent>

						<AnimeContent direction='left' className={styles.animated}>
							<div className={styles.attraction}>
								<div
									className={`${styles.attraction__photo} ${styles['attraction__photo--v3']}`}>
									<img src={boulevard1} alt='deptak nad sołą' />
									<img src={boulevard2} alt='bulwary nad sołą' />
								</div>

								<div className={styles.attraction__brief}>
									<h2 className={styles.attraction__heading}>
										Bulwary nad Sołą
									</h2>
									<p className={styles.attraction__text}>
										Bulwary nad Sołą w Węgierskiej Górce to nowoczesna
										przestrzeń rekreacyjna, która stała się jednym z ulubionych
										miejsc spotkań mieszkańców i turystów. To idealne miejsce na
										spacery, rowerowe wycieczki czy po prostu odpoczynek na
										łonie natury, z pięknymi widokami na rzekę Sołę. Bulwary są
										doskonale zagospodarowane, oferując ławki, ścieżki rowerowe
										oraz miejsca do relaksu. Stanowią one nową, atrakcyjną
										wizytówkę Węgierskiej Górki, łącząc naturalne piękno okolicy
										z nowoczesną infrastrukturą.
									</p>
								</div>
							</div>
						</AnimeContent>

						<AnimeContent direction='right' className={styles.animated}>
							<div className={styles.attraction}>
								<img
									src={butterfly}
									className={styles.butterfly}
									draggable='false'
									alt=''
								/>
								<div className={`${styles.attraction__photo}`}>
									<img src={gory1} alt='widok na beskidy' />
									<img src={gory2} alt='górskie widoki' />
								</div>
								<div className={styles.attraction__brief}>
									<h2 className={styles.attraction__heading}>
										Beskidzkie szlaki
									</h2>
									<p className={styles.attraction__text}>
										Węgierska Górka to idealny punkt startowy dla miłośników
										górskich wędrówek, oferujący dostęp do malowniczych szlaków
										turystycznych Beskidu Żywieckiego. Tuż za progiem czekają
										trasy o różnym stopniu trudności, prowadzące przez zielone
										hale, gęste lasy i oferujące zapierające dech w piersiach
										widoki. Niezależnie od tego, czy szukasz łagodnych spacerów
										bulwarami nad Sołą, czy wyzwań na szlakach wiodących na Hala
										Rysianka czy Hala Boracza, Węgierska Górka jest doskonałym
										miejscem na rozpoczęcie przygody z górami. Każdy znajdzie tu
										coś dla siebie, od początkujących turystów po doświadczonych
										miłośników gór.
									</p>
								</div>
							</div>
						</AnimeContent>

						<AnimeContent direction='left' className={styles.animated}>
							<div className={styles.attraction}>
								<div className={`${styles.attraction__photo}`}>
									<img src={bewery1} alt='muzeum borwaru żywieckiego' />
									<img src={bewery2} alt='piwiarnia żywiecka' />
								</div>

								<div className={styles.attraction__brief}>
									<h2 className={styles.attraction__heading}>
										Muzeum Browaru Żywiec
									</h2>
									<p className={styles.attraction__text}>
										Odkryj bogatą historię i tradycję piwowarską w Muzeum
										Browaru Żywieckiego, które przyciąga miłośników złocistego
										trunku. Położone w sercu Beskidów, muzeum oferuje
										fascynującą podróż przez czas, prezentując historię jednego
										z najstarszych browarów w Polsce, który działa nieprzerwanie
										od 1856 roku. Zanurz się w historię i proces produkcji piwa,
										oglądając zabytkowe wyposażenie i archiwalne fotografie.
										Zakończ wizytę degustacją różnych gatunków piwa, które
										zadowolą każdego miłośnika złocistego napoju.
									</p>
								</div>
							</div>
						</AnimeContent>

						<AnimeContent direction='right' className={styles.animated}>
							<div className={styles.attraction}>
								<div
									className={`${styles.attraction__photo} ${styles['attraction__photo--v3']}`}>
									<img src={inn1} alt='karczma w węgierskiej górce' />
									<img src={inn2} alt='gastronomia w węgierskiej górce' />
								</div>

								<div className={styles.attraction__brief}>
									<h2 className={styles.attraction__heading}>
										Atrakcje gastronomiczne
									</h2>
									<p className={styles.attraction__text}>
										Odkryj smaki Beskidu Żywieckiego, odwiedzając karczmy
										położone zaledwie krótki spacer od naszego obiektu. Te
										urokliwe, regionalne restauracje oferują wyjątkowe doznania
										kulinarne, serwując lokalne specjały w sercu gór. Ciesz się
										autentycznymi potrawami, takimi jak ręcznie lepione pierogi,
										dania z dziczyzny, ziemniaczane placki z boczkiem, czy
										kwaśnica z żeberkiem. Każda z nich zaprasza do cieszenia się
										nie tylko smakowitymi daniami, ale i niezapomnianą
										atmosferą, idealną na zakończenie górskich wędrówek.
									</p>
								</div>
							</div>
						</AnimeContent>
					</div>
				</Wrapper>

				<img
					src={breakpoint.md ? wave__large : wave__small}
					className={styles.wave}
					alt=''
				/>
			</ScrollSpySection>
			<Footer />
		</>
	);
};

export default PageAttractions;
