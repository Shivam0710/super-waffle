import AppSideBar from '@/components/AppSidebar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins, Roboto } from "next/font/google";
import { headers } from 'next/headers';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const showAppLayout = !activePath?.includes('admin')

  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='lg:grid lg:grid-cols-[auto,1fr] min-h-screen'>
          { showAppLayout && <AppSideBar />}
          {children}
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0RC2S82WBK');
            `}
          </Script>
        </div>
      </body>
    </html>
  )
}
