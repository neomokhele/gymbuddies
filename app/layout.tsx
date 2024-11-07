import { Metadata } from "next";
import localFont from "next/font/local";
import { TopHeaderComponent } from "@/components";
import "./globals.css";

const libreBaskerville = localFont({
  src: [
    {
      path: "./fonts/LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LibreBaskerville-italic.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/LibreBaskerville-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Gym Buddies | Self-Improvement and Workout Planning",
  description:
    "Gym Buddies helps you improve your fitness, find workout buddies, and learn new techniques. Join us today!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} antialiased`}
        suppressHydrationWarning
      >
        <TopHeaderComponent />
        {children}
      </body>
    </html>
  );
}
