import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bleep Pizza",
  description: "Best pizza in Sacramento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <NavBar />

        {children}

        <Footer />

      </body>
    </html>
  );
}
