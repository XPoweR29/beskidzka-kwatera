import { AboutSection } from '@/sections/Home_About/AboutSection';
import { FacilitiesSection } from '@/sections/Home_Facilities/FacilitiesSection';
import { StartSection } from '@/sections/Home_Start/StartSection';
import { Toaster } from 'react-hot-toast';

export default function Home() {
	return (
		<>
			<StartSection />
			<AboutSection/>
			<FacilitiesSection/>
			<Toaster toastOptions={{ className: 'toaster' }} />
		</>
	);
}
