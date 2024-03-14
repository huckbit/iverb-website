import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@components/NavBar';
import './globals.scss';
import { Providers } from './providers';

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
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <NavBar />
          <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
