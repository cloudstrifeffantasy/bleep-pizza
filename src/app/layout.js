import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bleep Pizza",
  description: "Best pizza in Sacramento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-red-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Bleep Pizza
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-red-200">
                Home
              </Link>
              <Link href="/menu" className="hover:text-red-200">
                Menu
              </Link>
              <Link href="/about" className="hover:text-red-200">
                About
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Bleep Pizza. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
