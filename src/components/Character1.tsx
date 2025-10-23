import Image from 'next/image';

const Character1 = () => (
	<section className="character1">
		<div className="container">
			<h2>
				<Image src="/character1.svg" width={569} height={421} alt="でもNFTってなんか良くないって聞いたことがあるよ…" />
			</h2>
			<ul className="character1-list flex flex-wrap justify-between">
				<li className="card-wrapper flip-right">
					<div className="card">
						<div className="front">
							<p>多くのNFTが短期間で急激に価格が上昇し、その後大幅に価値を失うことがあったため、NFTはお金儲けの道具と思われている方もいます。</p>
						</div>
						<div className="back">
							<p>しかし今は適正価格で取引されており、真の価値を見極めた投資や収集が可能になっています。</p>
						</div>
					</div>
				</li>
				<li className="card-wrapper flip-left">
					<div className="card">
						<div className="front">
							<p>
								NFTは新しい技術であるため、ユー
								<br className="hidden md:block" />
								ザーが詐欺に遭うリスクが高いと思われている方もいます。
							</p>
						</div>
						<div className="back">
							<p>しかし今は適正価格で取引されており、真の価値を見極めた投資や収集が可能になっています。</p>
						</div>
					</div>
				</li>
				<li className="card-wrapper flip-up">
					<div className="card">
						<div className="front">
							<p>NFT市場に参加するためには、暗号通貨やデジタルウォレットの知識が必要であり、この技術的ハードルが多くの人々にとって参加の障壁となっています。</p>
						</div>
						<div className="back">
							<p>しかし今は適正価格で取引されており、真の価値を見極めた投資や収集が可能になっています。</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</section>
);

export default Character1;
