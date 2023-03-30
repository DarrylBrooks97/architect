import '../styles/globals.css';
import { PropsWithChildren } from 'react';
import { Metadata } from 'next';

type RootLayoutProps = PropsWithChildren<{}>;

export const metaData: Metadata = {
	title: 'Darryl Brooks',
	description: 'Darryl Brooks personal website',
	viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
