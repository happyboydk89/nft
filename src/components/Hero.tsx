import Link from 'next/link';
import Image from 'next/image';

const Hero = () => (
	<section className="fv">
		<div className="container">
			<h1 className="flex justify-center items-center xl:h-[800px]">
				<picture>
					<source media="(max-width: 640px)" srcSet="/fv2x.png" />
					<Image src="/fv.png" width={1440} height={800} alt="次世代NFT" />
				</picture>
			</h1>
		</div>
	</section>
);

export default Hero;
