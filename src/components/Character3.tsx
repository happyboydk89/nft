import Image from 'next/image';
import Marquee from './Marquee';

const Character3 = () => (
	<section className="character3">
		<div className="container">
			<h2>
				<Image src="/character3.svg" className="ml-auto" width={580} height={427} alt="NFTの送信が無料ということは？" />
			</h2>
			<ul className="character3-list flex flex-wrap justify-between gap-[40px]">
				<li>
					<div className="img">
						<Image src="/img1.jpg" width={580} height={320} alt="NFTがもっと便利に！" />
					</div>
					<div className="text">
						<h3>
							<small>NFTが</small>
							<br />
							<small>もっと</small>便利に！
						</h3>
						<p>
							コインがないからNFTを送れないという心配はありません！
							<br />
							ガス代の安い時間を待って送信する必要もありません。
						</p>
					</div>
				</li>
				<li>
					<div className="img">
						<Image src="/img2.jpg" width={580} height={320} alt="NFTがもっと楽しく！" />
					</div>
					<div className="text">
						<h3>
							<small>NFTが</small>
							<br />
							<small>もっと</small>楽しく！
						</h3>
						<p>
							コレクションしたNFTをいつでも交換可能！
							<br />
							欲しいデジタルアートやゲーム内アイテムをもらったり、あげ たりして楽しもう！
						</p>
					</div>
				</li>
			</ul>
		</div>
		<Marquee x={1} duration={20} />
	</section>
);

export default Character3;
