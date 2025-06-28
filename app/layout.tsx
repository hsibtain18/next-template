import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../public/css/dark.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import { Poppins } from "next/font/google";
import ScrollToTopButton from "./components/CursorToTop";
import MouseCursor from "./components/MouseCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ectorious ",
  description: "Ectorious Drives the Growth You Deserve",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-[family-name:var(--font-poppins)] ${poppins.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // 👈 Set default to "dark"
          enableSystem={false}
        >
          <Header />
          <ScrollToTopButton />
          <MouseCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
