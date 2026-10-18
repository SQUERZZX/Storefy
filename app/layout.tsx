import type { Metadata, Viewport } from "next";
import { Unbounded, Onest } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Onest({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Storefy — сайт для вашего бизнеса за 24 часа",
  description:
    "Готовые сайты для кафе, барбершопов, автомоек и салонов. Покажем пример до оплаты.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}