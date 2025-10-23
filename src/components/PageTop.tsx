'use client';
// import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PageTop() {
	// const [visible, setVisible] = useState(false);

	// useEffect(() => {
	// 	const onScroll = () => setVisible(window.scrollY > 200);
	// 	onScroll();
	// 	window.addEventListener('scroll', onScroll, { passive: true });
	// 	return () => window.removeEventListener('scroll', onScroll);
	// }, []);

	const scrollToTop = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<div className="pagetop absolute top-[-62px] right-[40px]">
			<Link href="#top" onClick={scrollToTop} className="block duration-150 hover:opacity-70">
				<Image src="/pagetop.png" width={65} height={85} alt="TOP↑" />
			</Link>
		</div>
	);
}
