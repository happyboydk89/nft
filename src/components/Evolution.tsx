import Image from 'next/image';
import Marquee from './Marquee';

const Evolution = () => (
	<section className="evolution">
		<Marquee x={-1} duration={20} />
		<div className="container relative">
			<div className="intro flex justify-center items-center">
				<div className="intro-in flex flex-col items-center gap-[20px]">
					<h2 className="text-center">
						<span>
							NFT<small>は</small>
							<br />
							もっと<small>進化する！</small>
						</span>
					</h2>
					<p>NFTはアートのイメージが強いですが、これからもっと進化します！</p>
					<p>近い将来、お店で購入するトレーディングカードのように、中身は所有者だけが確認できるようになります。</p>
				</div>
			</div>
			<div className="icon">
				<span>
					希少性とセキュリティ、開封時の
					<br />
					ワクワク感が強化されるんだね！
				</span>
				<Image src="/evolution_icon.png" width={398} height={108} alt="次世代NFT" />
			</div>
		</div>
	</section>
);

export default Evolution;
