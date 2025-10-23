import Image from 'next/image';
import Purposes from './Purposes';

const What = () => (
	<section className="what pt-[48px] md:pt-[96px]">
		<div className="container mx-auto mw-[1440px] px-[40px]">
			<div className="box xl:flex bg-[#fff] text-[#000] px-[30px] md:px-[66px] rounded-[60px]">
				<h2 className="">
					<Image src="/title1.svg" width={488} height={452} alt="次世代NFT" loading="lazy" />
				</h2>
				<div className="text pt-[67px] md:pt-[134px] pb-[166px] md:pb-[333px] lh-[1.8] md:leading-[2.0] text-[18px] pl-[0px] md:pl-[40px]">
					<p>
						NFTとは「世界にひとつだけの証明番号」を画像やビデオ、
						<br className="hidden md:block" />
						3D、音楽、音声などに付与する技術を活用して発行されるもの
						<br className="hidden md:block" />
						です。証明番号は第三者から書き換えられたりするリスクがな
						<br className="hidden md:block" />
						く、デジタルの世界に&ldquo;ひとつだけ&ldquo;であることを証明するために
						<br className="hidden md:block" />
						使われています。
					</p>
					<p className="text-[16px]">
						※Non-Fungible Token(ノンファンジブルトークン)の略称で、
						<br className="hidden md:block" />
						日本語では「非代替性トークン」と訳されることが多いです。
					</p>
				</div>
			</div>
			<Purposes />
		</div>
	</section>
);

export default What;
