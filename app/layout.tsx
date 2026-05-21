
import type { Metadata } from 'next'
import '../styles/globals.css'
import { Poppins, Public_Sans, Roboto, Dancing_Script, Caveat } from "next/font/google";
import Header from '@/components/header';
import AboveFooter from '@/components/AboveFooter';
import Footer from '@/components/footer';
import DevCacheCleanup from '@/components/dev-cache-cleanup';
import { Toaster } from 'sonner';
import Script from 'next/script';

// Poppins setup
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the weights you need
  variable: '--font-poppins',
});

// Public Sans setup
const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you need
  variable: '--font-publicSans',
})


// Add Roboto
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // adjust as needed
  variable: '--font-roboto',
});

// Add Dancing Script
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
});

// Add Caveat
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://navo.work'),
  title: {
    default: 'Navo College Counseling',
    template: '%s | Navo College Counseling',
  },
  description:
    'Navo College Counseling helps students build standout academic profiles and navigate undergraduate and graduate admissions with strategic counseling.',
  applicationName: 'Navo College Counseling',
  generator: 'Next.js',
  openGraph: {
    title: 'Navo College Counseling',
    description:
      'Strategic college counseling for undergraduate, graduate, and transfer applicants.',
    url: 'https://navo.work',
    siteName: 'Navo College Counseling',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navo College Counseling',
    description:
      'Strategic college counseling for undergraduate, graduate, and transfer applicants.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${publicSans.variable} ${roboto.variable} ${dancingScript.variable} ${caveat.variable}`}>
      <head>
        <link rel="preconnect" href="https://aou84dm7dwdg2r06.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://aou84dm7dwdg2r06.public.blob.vercel-storage.com" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18073229118"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18073229118');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${publicSans.variable} ${roboto.variable} ${dancingScript.variable} ${caveat.variable}`}>
        <DevCacheCleanup />
        <Header />
        <Toaster richColors position="top-center" />
        {children}
        <div id="cta-stop-here" className="h-1"></div>
        <AboveFooter />
        <Footer />
      </body>
    </html>
  );
}
