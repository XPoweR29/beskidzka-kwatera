import { Footer } from "../Footer/Footer";
import { ReachUs } from "../ReachUs/ReachUs";
import { SectionFacilities } from "../SectionFacilities/SectionFacilities";
import { SectionHome } from "../SectionHome/HomeSection";
import { SectionOffer } from "../SectionOffer/SectionOffer";
import { SectionPricing } from "../SectionPricing/SectionPricing";
import { SectionReview } from "../SectionReview/SectionReview";

export const PageHome = () => {
	return (
		<>
			<SectionHome />
			<SectionOffer />
			<SectionFacilities />
			<SectionReview />
			<SectionPricing />
			<ReachUs />
			<Footer />
		</>
	);
};
