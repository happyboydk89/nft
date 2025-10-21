import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { M_PLUS_1p } from 'next/font/google';
import type { Metadata } from 'next';

const mplus1p = M_PLUS_1p({
	subsets: ['latin'],
	weight: ['500', '700', '800', '900'],
	variable: '--font-m-plus-1p',
});

export const metadata: Metadata = {
	title: '次世代NFT',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${mplus1p.variable}`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
