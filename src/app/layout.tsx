import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar/TopNavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IFA",
  description: "platform for finding internship to students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="topNavBar">
          <TopNavBar />
        </div>
        <main className="children">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
