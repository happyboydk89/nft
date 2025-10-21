import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
	<footer className="footer relative">
		<div className="container mx-auto xl:flex justify-between pt-[160px] pb-[102px] mw-[1216px] px-[15px]">
			<div className="logo">
				<Link href="/">
					<Image src="/logo.png" width={300} height={52} alt="次世代NFT" />
				</Link>
			</div>
			<ul className="links">
				<li>
					<Link href="/">FAQ</Link>
				</li>
				<li>
					<Link href="/">プライバシーポリシー</Link>
				</li>
			</ul>
			<div className="sns">
				<Link href="/">
					<Image src="/line.png" width={208} height={52} alt="LINEでお問い合わせ" />
				</Link>
			</div>
			<div className="logo-portal">
				<Link href="/">
					<Image src="/portal.svg" width={228} height={103} alt="次世代" />
				</Link>
			</div>
		</div>
		<p className="copyright text-center text-[14px] pt-[10px] pb-[20px]">Copyright © 次世代NFT</p>
		<div className="pagetop absolute top-[-40px] right-[40px]">
			<Link href="#top">
				<Image src="/pagetop.png" width={65} height={85} alt="TOP↑" />
			</Link>
		</div>
	</footer>
);

export default Footer;
