'use client';

import Image from 'next/image';

type Props = {
	x?: number;
	duration?: number;
};

export default function Marquee({ x = -1, duration = 18 }: Props) {
	const dir = x >= 0 ? 'ltr' : 'rtl';

	const items = [1, 2, 3];

	return (
		<div className={`marquee marquee--${dir}`} style={{ ['--marquee-duration' as any]: `${duration}s` }}>
			<div className="marquee__inner">
				<div className="marquee__group">
					<Image src="/deco.svg" width={1440} height={59} alt="次世代NFT" />
				</div>

				<div className="marquee__group" aria-hidden="true">
					{items.map((i) => (
						<div key={`dup-${i}`} className="marquee__item">
							<Image src="/deco.svg" width={1440} height={59} alt="次世代NFT" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
