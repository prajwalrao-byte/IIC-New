import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Nitte IIC Report Generator', description: 'Generate Nitte IIC activity reports' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
