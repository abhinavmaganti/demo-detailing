import './globals.css';

export const metadata = {
  title: 'Deluxe Details | Premium Mobile Car Detailing — Central New Jersey',
  description:
    'Deluxe Details brings the shine to you. Premium mobile car detailing in Central New Jersey. Full detail, exterior wash, interior clean, and more — at your location.',
  keywords:
    'mobile car detailing, car detailing NJ, car wash Central New Jersey, premium auto detailing, Deluxe Details',
  openGraph: {
    title: 'Deluxe Details | Premium Mobile Car Detailing',
    description: 'We bring the shine to you. Premium mobile car detailing in Central New Jersey.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-silver-300 font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
