import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akbar | Web Developer",
  description: "Personal portfolio of Akbar - Information Systems Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        {children}
      </body>
    </html>
  );
}