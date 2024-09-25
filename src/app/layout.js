import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {Toaster} from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Randy Riley Software Developer",
    template: "%s | Randy Riley Software Developer"
  },
  description: "Randy Riley's Web Developer Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster position="bottom-center" />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
