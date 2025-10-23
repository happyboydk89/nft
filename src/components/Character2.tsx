import Image from 'next/image';

const Character2 = () => (
	<section className="character2">
		<div className="container">
			<h2>
				<Image src="/character2.svg" className="mx-auto" width={580} height={427} alt="そう！これらの誤解は前世代NFTの話！" loading="lazy" />
			</h2>
			<div className="character2-box">
				<div className="text-center">
					<h3>次世代NFTとは？</h3>
					<p>
						次世代NFTとは、NFTをQRコードを撮影して簡単に受け取ったり、
						<br className="hidden md:block" />
						説明いらずの直感操作でNFTを送信することができるサービスです。
					</p>
				</div>
				<div className="character2-quote">
					<dl>
						<dt>
							<Image src="/c2quote.svg" width={424} height={100} alt="NFTの送受信が無料！" />
						</dt>
						<dd>
							次世代NFTの最大の特徴は、NFTの送受信が<span className="highline">永年無料</span>であること！
							<br />
							いつでもどこでも、ガス代(=手数料)を気にせずにNFTを送信することができます。
						</dd>
					</dl>
					<div className="c2img1">
						<Image src="/c2img1.svg" width={450} height={600} alt="永年無料" loading="lazy" />
					</div>
					<div className="c2img2">
						<Image src="/c2img2.svg" width={380} height={380} alt="手数料" loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Character2;
