import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomSessionProvider from "@/components/SessionWrapper";
import ClientProvider from "@/components/ClientProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Chai - Fund your projects with chai",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <CustomSessionProvider>
          <ClientProvider>
            <Navbar />
            <main className="text-white flex-grow bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
              {children}
            </main>
            <Footer />
          </ClientProvider>
        </CustomSessionProvider>
      </body>
    </html>
  );
}
