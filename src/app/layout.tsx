import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Shop Test",
  description: "Test generado con nextjs13",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Erick" }],
  creator: "Erick Quiroz",
  publisher: "Erick Quiroz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex h-12 bg-yellow-300">
          <form
            action="/items"
            className="max-w-screen-lg flex m-auto flex-1 px-4"
          >
            <Link
              href={`/`}
              className="px-2 py-1 h8 font-bold sm:visible min-w-320:hidden"
            >
              MercadoShop
            </Link>
            <input
              name="search"
              type="text"
              className="h-8 flex-1 px-4 text-sm"
              placeholder="Nunca dejes de buscar..."
            />
            <button
              type="submit"
              className="px-2 py-1 text-sm font-medium text-grey-400 bg-gray-50 border border-gray-50"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Buscar</span>
            </button>
          </form>
        </header>
        <main className="px-4 max-w-screen-lg m-auto">{children}</main>
      </body>
    </html>
  );
}
