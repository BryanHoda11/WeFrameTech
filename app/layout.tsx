import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-dmsans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dm_sans.variable} antialiased`}>
        <div className="main-container flex items-start">
          <Sidebar />
          <div className="w-full overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
