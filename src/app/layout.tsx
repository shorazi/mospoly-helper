import type { Metadata } from "next"
import "./globals.css"
import Providers from './providers'

// const geistSans = localFont({
//   // src: "./fonts/GeistVF.woff",
//   // variable: "--font-geist-sans",
//   // weight: "100 900",
//   src: "./fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
//   variable: "--font-montserrat-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   // src: "./fonts/GeistMonoVF.woff",
//   // variable: "--font-geist-mono",
//   // weight: "100 900",
//   src: "./fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
//   variable: "--font-montserrat-italic",
//   weight: "100 900",
// });

// const Montserrat = localFont({
//   src: '/public/fonts/Montserrat-VariableFont_wght.ttf',
//   variable: '--font-montserrat-sans',
//   weight: '100 900',
// })

export const metadata: Metadata = {
  title: "Mospoly Helper",
  description: "Don't generate by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      // className={`${Montserrat}`}
      // className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
