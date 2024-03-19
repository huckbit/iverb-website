import type { Metadata } from 'next';
import Head from 'next/head';
import { Lato, Playfair_Display } from 'next/font/google';
import { NavBar } from '@modules/NavBar';
import { Footer } from '@modules/Footer';
import './globals.scss';
import { Providers } from './providers';

const lato = Lato({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'] });

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
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body className={`${lato.className} min-h-screen dark:bg-gray-800`}>
        <div className='flex flex-col min-h-screen '>
          <Providers>
            <a href='#main-content' className='skip-link sr-only sr-only-focusable'>
              Skip to main content
            </a>
            <NavBar />
            <main id='main-content' className='grid grid-cols-1 gap-4 mt-10 pt-20 md:pt-10 mb-20 layout-container'>
              <div className='container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex-grow'>{children}</div>
            </main>
            <div className='layoutSvg'></div>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
