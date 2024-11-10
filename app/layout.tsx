import { Metadata } from "next";
import { TopHeaderComponent } from "@/components";
import { libreBaskerville } from "@/constants/fonts";
import "./globals.css";

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
