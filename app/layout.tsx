import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import { NavBar } from '@modules/NavBar';
import { Footer } from '@modules/Footer';
import './globals.scss';
import { Providers } from './providers';

export const lato = Lato({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'] });
export const playfairDisplay = Playfair_Display({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'] });

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
    <html lang='en' suppressHydrationWarning className='min-h-screen'>
      <body className={`${lato.className} min-h-screen`}>
        <div className='flex flex-col min-h-screen'>
          <Providers>
            <NavBar />
            <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex-grow'>{children}</div>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
