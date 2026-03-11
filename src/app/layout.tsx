import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tick Safe & the Mozzie Team | Expert Control',
  description: 'Providing the Gold Standard in tick and mosquito control for your garden or outdoor area, including paralysis ticks. Protect your home and enjoy peace of mind.',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
