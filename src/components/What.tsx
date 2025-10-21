import Link from 'next/link';
import Image from 'next/image';

const What = () => (
	<section className="what pt-[48px] md:pt-[96px] pb-[324px] md:pb-[648px]">
		<div className="container mx-auto">
			<div className="box flex bg-[#fff] px-[30px] md:px-[66px] rounded-[60px]">
				<h2></h2>
				<div className="text">
					<p>
						NFTとは「世界にひとつだけの証明番号」を画像やビデオ、
						<br className="hidden md:block" />
						3D、音楽、音声などに付与する技術を活用して発行されるもの
						<br className="hidden md:block" />
						です。証明番号は第三者から書き換えられたりするリスクがな
						<br className="hidden md:block" />
						く、デジタルの世界に"ひとつだけ"であることを証明するために
						<br className="hidden md:block" />
						使われています。
					</p>
					<p>
						<small>
							※Non-Fungible Token（ノンファンジブルトークン）の略称で、
							<br className="hidden md:block" />
							日本語では「非代替性トークン」と訳されることが多いです。
						</small>
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default What;
