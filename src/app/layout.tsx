import '../styles/globals.css';
import { PropsWithChildren } from 'react';
import NavigationBar from './components/client/NavigationBar';
import { Metadata } from 'next';

type RootLayoutProps = PropsWithChildren<{}>;

export const metaData: Metadata = {
  title: 'Darryl Brooks',
  description: 'Darryl Brooks personal website',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
