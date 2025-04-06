import React from 'react';
import { StartSection } from '../sections/start/StartSection';
import { SectionOffer } from '../sections/offer/SectionOffer';
import { SEO } from '../components/SEO/SEO';
import { SectionFacilities } from '../sections/facilities/SectionFacilities';
import { SectionReview } from '../sections/reviews/SectionReview';
import { SectionPricing } from '../sections/pricing/SectionPricing';
import { ReachUs } from '../sections/reach_us/ReachUs';

const LandingPage = () => {
	return (
		<>
			<StartSection />
			<SectionOffer />
			<SectionFacilities />
			<SectionReview />
			<SectionPricing />
			<ReachUs />
		</>
	);
};

export default LandingPage;

export const Head = () => (
	<SEO
		schema={{
			'@context': 'https://schema.org',
			'@type': 'Accommodation',
			name: 'Kwatery u Zosi',
			description:
				'Przytulne i przystępne pokoje w Węgierskiej Górce, idealne na relaks i górskie wędrówki. Zarezerwuj nocleg w Beskidzie Żywieckim!',
			image: 'https://www.kwateryuzosi.pl/galeria',
			url: 'https://kwateryuzosi.pl',
			email: 'kontakt@kwateryuzosi.pl',
			telephone: '+48 607 262 643',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'ul. Zielona 136',
				addressLocality: 'Węgierska Górka',
				postalCode: '34-350',
				addressCountry: 'PL',
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: 49.61174914694431,
				longitude: 19.12085678051011,
			},
			checkinTime: '14:00-20:00',
			checkoutTime: '10:00-11:00',
			amenityFeature: [
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Prywatne łazienki',
					value: true,
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Balkon',
					value: true,
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Wiata grillowa',
					value: true,
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Aneks kuchenny',
					value: true,
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Jadalnia',
					value: true,
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Pomieszczenie gospodarcze',
					value: true,
				},
				{ '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Parking',
					value: true,
				},
			],
			priceRange: 'PLN 70-90',
		}}
	/>
);
