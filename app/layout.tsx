import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@components/navBar';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iVerb - Learn English verbs with iVerb',
  description: 'Learn English verbs with iVerb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        <div className='container mx-auto'>{children}</div>
      </body>
    </html>
  );
}
