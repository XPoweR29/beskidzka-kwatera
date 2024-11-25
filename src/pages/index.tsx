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
			<SectionFacilities/>
			<SectionReview/>
			<SectionPricing/>
			<ReachUs/>
		</>
	);
};

export default LandingPage;

export const Head = () => (
	<SEO/>
);
