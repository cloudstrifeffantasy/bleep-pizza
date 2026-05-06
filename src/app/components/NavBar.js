import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-red-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Bleeper Pizza
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
    );
}