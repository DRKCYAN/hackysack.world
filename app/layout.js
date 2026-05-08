import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Hacky Sack Central — The Home of Hacky Sack',
  description:
    'The definitive hub for the hacky sack resurgence. Skills, marketplace, and the league rankings shaping the new era of footbag.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black font-switzer">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
