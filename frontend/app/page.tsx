import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Outreach Platform',
  description: 'AI-powered outreach and communication platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
