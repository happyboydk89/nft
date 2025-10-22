import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
	<header className="flex justify-between items-center py-[30px] px-[40px] absolute top-0 left-0 w-full z-10">
		<div className="logo">
			<Link href="/">
				<Image src="/logo.svg" width={184} height={45} alt="次世代NFT" />
			</Link>
		</div>
	</header>
);

export default Header;
