import Hero from '../components/Hero';
import What from '../components/What';
import Evolution from '@/components/Evolution';
import Character1 from '@/components/Character1';
import Character2 from '@/components/Character2';
import Character3 from '@/components/Character3';
import Faq from '@/components/Faq';

export default function Home() {
	return (
		<>
			<Hero />
			<What />
			<Evolution />
			<Character1 />
			<Character2 />
			<Character3 />
			<Faq />
		</>
	);
}
